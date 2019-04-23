"""
Glassdoor API
"""

from selenium import webdriver
from selenium.webdriver.chrome.options import Options;
from flask import Flask
from flask import request
from flask import Response
from glassdoor import *
from logger import log, writeToFile
from flask_cors import CORS
from os import environ as environment
import json


#Initialization
#env = environment['CurrentEnvironment'];
env = "prod"
app = Flask(__name__);
CORS(app)
DEBUG = True;

#Web driver options
options = Options();
#options.add_argument("--headless"); #run in headless mode
if(env == "exp" or env == "prod"):
    #TODO: change to prod
    options.add_argument("user-data-dir=/home/ubuntu/osspd/Profiles/") #load our profile with user account information
    EC2Driver = "/usr/bin/chromedriver"
    driver = webdriver.Chrome(EC2Driver, options=options);
    log("Running on experimental production");
else:
    driver = webdriver.Chrome(options=options)
    log("Running on dev");

loggedIn = False;

def verifyLoggedIn(verificationHeader, wait):
    print("Attempting to verify")
    if(wait == False):
        verificationHeaderResponse = driver.find_elements_by_xpath(verificationHeader);
        if(len(verificationHeaderResponse) > 0):
            if(verificationHeaderResponse[0].text == "Your Glassdoor Dashboard"):
                #we are at the dashboard, so we are logged in
                print("Webdriver logged in");
                return True;
        else:
            #we may have ran into an error or are still not logged in properly
            print("Not at the dashboard, may not be logged in. Exiting");
            return False;
    else:
        driver.implicitly_wait(1); #wait for page to load
        verificationHeaderResponse = driver.find_element_by_xpath(verificationHeader);
        if(verificationHeaderResponse):
            print("Now logged in");
            return True;
        else:
            print("Could not verify");
            return False;

#We have to be logged in order to get data
def login():
    global loggedIn; 
    driver.get("https://www.glassdoor.com");

    #first test if are logged in
    verificationHeaderAttemptOne= '//*[@id="MainCol"]/section[1]/div[1]/h2';
    if(verifyLoggedIn(verificationHeaderAttemptOne, False)):
        return True;
    
    #else login to glassdoor
    else:
        driver.find_element_by_xpath('//*[@id="TopNav"]/nav/div/div/div[4]/div[1]/a').click(); #sign in button

        usernameField = driver.find_element_by_name('username');
        passwordField = driver.find_element_by_name('password');
        submit = driver.find_element_by_xpath('//*[@id="LoginModal"]/div/div/div[2]/div/div[2]/div/div[1]/div[4]/form/div[3]/div[1]/button');

        usernameField.send_keys("xmd1412@gmail.com"); #fill in username field
        passwordField.send_keys("notarealpassword"); #fill in password field
        submit.click(); #submit

        verificationHeaderAttemptTwo = '//*[@id="MainCol"]/section[1]/div[1]/h2';
        if(verifyLoggedIn(verificationHeaderAttemptTwo, True)):
            log("Verified");
            loggedIn = True;
            return True;
        else:
            log("Not verified");
            loggedIn = False;
            return False;

"""Company name MUST be separated by spaces if more than one word, and it MUST be lowercase """
@app.route("/api/glassdoor/<company>/<position>")
def initGlassdoorSearch(company,position):
    #initialize error json object and response object in case we can't find results for a query
    error = {"error": "Glassdoor data not available for this position"}; 
    errorResponse = Response(json.dumps(error), status=503, mimetype="application/json");
    #execute search
    log("Attempting query");
    searchUrl = buildUrl(company, position);
    driver.get(searchUrl); 
    result = driver.find_element_by_class_name("LC20lb");
    #verify that we have valid results for our query
    if(result.text[-9:] != "Glassdoor"):
        return errorResponse;
    if(company not in result.text.lower()):
        return errorResponse;
    #get result if query valid
    result.click();
    """
    if(DEBUG):
        writeToFile(driver.page_source);
        return Response("Debugging Glassdoor, don't mind us", status=503, mimetype="application/text");
    """
    driver.implicitly_wait(1); #We have to wait for the page to load before we get all of our data
    data = {
       "offers": getInterviewOffers(),
       "experience": getInterviewExperience(),
       "difficulty": getInterviewDifficulty(),
       "comments": getInterviewComments(),
       "questions": getInterviewQuestions(),
       "path": getInterviewPaths()
    }
    return Response(json.dumps(data), status=200, mimetype="application/json");


#individual offer comments
def getInterviewOffers():
    offersRawData = driver.find_elements_by_xpath('//*[@class=" empReview cf "]/div[3]/div/div[2]/div[1]/div/div[1]/div/div[2]/span');
    return processInterviewOffers(offersRawData);


#aggregate percentage experience level
def getInterviewExperience():
    posExperience = driver.find_elements_by_xpath('//*[@id="AllStats"]/div[1]/div/div/div[2]/div/div[2]/div[2]/span[1]');
    return processInterviewExperience(posExperience);

#aggregate difficulty rating
def getInterviewDifficulty():
    difficultyRating = driver.find_elements_by_xpath('//*[@class="difficultyLabel subtle"]');
    return processInterviewDifficulty(difficultyRating);

#individual comments
#Note: We don't get a comment if it doesn't have an 'Application' component
def getInterviewComments():
    commentsRawData = driver.find_elements_by_xpath('//*[@class=" empReview cf "]/div[3]/div/div[2]/div[2]/div/p[4]');
    #add class to the additional comment data
    driver.execute_script("var evenMoreContent = $('.moreContent').children(':nth-child(1)'); for(var i=0;i<evenMoreContent.length;i++){ evenMoreContent[i].classList.add('additional-comment');}")
    additionalCommentsRawData = driver.find_elements_by_xpath('//*[@class="additional-comment"]');
    return processInterviewComments(commentsRawData,additionalCommentsRawData);


def getInterviewQuestions():
    driver.execute_script('$(".questionResponse").remove();'); #remove links to 'answer questions' and/or 'question solutions'
    questionsRawData = driver.find_elements_by_xpath('//*[@class=" empReview cf "]/div[3]/div/div[2]/div[2]/div/div/ul/li/span');
    return processInterviewQuestions(questionsRawData);

def getInterviewPaths():
    driver.execute_script(
    'var obtainedStatsContainerElements=document.getElementsByClassName("tbl dataTbl fill toggleable")[0].childNodes;function addClassToStatsRow(){for(var t=0;t<obtainedStatsContainerElements.length;t++){"row "==obtainedStatsContainerElements[t].className&&obtainedStatsContainerElements[t].classList.add("method-obtained")}}var obtainedElements=document.getElementsByClassName("method-obtained");function addClassesToMethodStats(){for(var t=0;t<obtainedElements.length;t++){var e=obtainedElements[t].childNodes;e[0].childNodes[1].classList.add("method-name"),e[1].childNodes[0].classList.add("method-pct")}}addClassToStatsRow(),addClassesToMethodStats();')
    interviewPathMethods = driver.find_elements_by_class_name('method-name');
    interviewPathPercentages = driver.find_elements_by_class_name('method-pct');
    return processInterviewPaths(interviewPathMethods, interviewPathPercentages);


#individual experience comments
def getInterviewExperiences():
    experiencesRawData = driver.find_elements_by_xpath('//*[@class=" empReview cf "]/div[3]/div/div[2]/div[1]/div/div[2]/div/div[2]/span');
    return processInterviewExperiences(experiencesRawData);

#individual difficulty comments
def getInterviewDifficultyLevels():
    difficultyLevelsRawData = driver.find_elements_by_xpath('//*[@class=" empReview cf "]/div[3]/div/div[2]/div[1]/div/div[3]/div/div[2]/span');
    return processInterviewDifficultyLevels(difficultyLevelsRawData);


def run():
    print("Running glassdoor API");
    verifyLogin();
    app.run(host="0.0.0.0", port=8082);

@app.route("/api/glassdoor/verifyLogin")
def verifyLogin():
    driver.get("https://www.glassdoor.com");
    if(verifyLoggedIn('//*[@id="MainCol"]/section[1]/div[1]/h2', False)):
        return "We are already logged in"
    else:
        login();
        return "Now logged in"

