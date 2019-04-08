from selenium import webdriver
from selenium.webdriver.chrome.options import Options;
from flask import Flask
from flask import request
from flask import Response
from glassdoor import *
import json
#from flask_cors import CORS
app = Flask(__name__)
#CORS(app)


#Web driver options
options = Options();
options.add_argument("--headless"); #run in headless mode

#Init chrome web driver for Glassdoor
#EC2 driver = "/usr/bin/chromedriver"
driver = webdriver.Chrome(options=options)
loggedIn = False; #flag that tells us whether or not we are logged into Glassdoor

#GLASSDOOR

#We have to be logged in order to get data
def login():
    driver.get("https://www.glassdoor.com");

    #first test if are logged in
    verificationHeader= driver.find_elements_by_xpath('//*[@id="MainCol"]/section[1]/div[1]/h2');
    if(len(verificationHeader) > 0):
        if(verificationHeader[0].text == "Your Glassdoor Dashboard"):
            #we are at the dashboard, so we are logged in
            print("Webdriver already logged in");
            loggedIn = True; #update the flag
            return True;
        else:
            #we may have ran into an error or are still not logged in properly
            print("Not at the dashboard, may not be logged in. Exiting");
            loggedIn = False; #update the flag
            return False;

    #else login to glassdoor
    else:
        driver.find_element_by_xpath('//*[@id="TopNav"]/nav/div/div/div[1]/div[1]/a').click(); #sign in button

        usernameField = driver.find_element_by_name('username');
        passwordField = driver.find_element_by_name('password');
        submit = driver.find_element_by_xpath('//*[@id="LoginModal"]/div/div/div[2]/div/div[2]/div/div[1]/div[4]/form/div[3]/div[1]/button');

        usernameField.send_keys("xmd1412@gmail.com"); #fill in username field
        passwordField.send_keys("notarealpassword"); #fill in password field
        submit.click(); #submit
        print("Now logged in");
        loggedIn = True;
        return True;


@app.route("/api/glassdoor/<company>/<position>")
def initGlassdoorSearch(company,position):
    print("The flag says " + str(loggedIn));
    print("Attempting query");
    searchUrl = buildUrl(company, position);
    driver.get(searchUrl) #execute search
    result = driver.find_element_by_class_name("LC20lb").click();
    data = {
       "offers": getInterviewOffers(),
       "experience": getInterviewExperience(),
       "difficulty": getInterviewDifficulty(),
       "comments": getInterviewComments(),
       "questions": getInterviewQuestions()
    }
    return "Request went through"


#individual offer comments
def getInterviewOffers():
    offersRawData = driver.find_elements_by_xpath('//*[@class=" empReview cf "]/div[3]/div/div[2]/div[1]/div/div[1]/div/div[2]/span');
    return processInterviewOffers(offersRawData);


#aggregate percentage experience level
def getInterviewExperience():
    posExperience = driver.find_element_by_xpath('//*[@id="AllStats"]/div[1]/div/div/div[2]/div/div[2]/div[2]/span[1]');
    return processInterviewExperience(posExperience);

#aggregate difficulty rating
def getInterviewDifficulty():
    difficultyRating = driver.find_element_by_xpath('//*[@id="AllStats"]/div[3]/div/div/div[1]/div ');
    return processInterviewDifficulty(difficultyRating);

#individual comments
#TODO: Determine how to truncate individual comments, or get full content.
def getInterviewComments():
    commentsRawData = driver.find_elements_by_xpath('//*[@class=" empReview cf "]/div[3]/div/div[2]/div[2]/div/p[4]');
    return processInterviewComments(commentsRawData);


#TODO: Get interview questions ?
def getInterviewQuestions():
    driver.execute_script('document.getElementsByClassName("questionResponse")');
    print("Removed extra content");
    questionsRawData = driver.find_elements_by_xpath('//*[@class=" empReview cf "]/div[3]/div/div[2]/div[2]/div/div/ul/li/span');
    return processInterviewQuestions(questionsRawData);

#TODO: Get interview path




#individual experience comments
def getInterviewExperiences():
    experiencesRawData = driver.find_elements_by_xpath('//*[@class=" empReview cf "]/div[3]/div/div[2]/div[1]/div/div[2]/div/div[2]/span');
    return processInterviewExperiences(experiencesRawData);

#individual difficulty comments
def getInterviewDifficultyLevels():
    difficultyLevelsRawData = driver.find_elements_by_xpath('//*[@class=" empReview cf "]/div[3]/div/div[2]/div[1]/div/div[3]/div/div[2]/span');
    return processInterviewDifficultyLevels(difficultyLevelsRawData);

if __name__ == "__main__":
    if login():
        print("Starting server");
        app.run(host="0.0.0.0", port=8082);
    else:
        print("Could not login");