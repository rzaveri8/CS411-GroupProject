from selenium import webdriver
from selenium.webdriver.chrome.options import Options;
from flask import Flask
from flask import request
from flask import Response
from processJobs import processJobs
import json

app = Flask(__name__)

options = Options();
options.add_argument("--headless");
options.add_argument("user-data-dir=/Users/manujadesilva/Desktop/CS411/semester-project/Profiles/") #load our profile with user account information

env = "dev";

if(env == "exp" or env == "prod"):
    #TODO: change to prod
    EC2Driver = "/usr/bin/chromedriver"
    driver = webdriver.Chrome(EC2Driver, options=options);
    print("Running on experimental production");
else:
    driver = webdriver.Chrome(options=options)
    print("Running on dev");

loggedIn = False;


#Login if neccessary
def login():
    global loggedIn;
    driver.get("https://www.linkedin.com/uas/login");
    usernameField = driver.find_element_by_name("session_key");
    passwordField = driver.find_element_by_name("session_password");
    submit = driver.find_element_by_xpath("//*[@id='app__container']/main/div/form/div[3]/button");
    usernameField.send_keys("");
    passwordField.send_keys("");
    submit.click();
    #Assume that at this point we are logged in 



@app.route("/api/jobs/<position>")
def getJobs(position):
    """if(loggedIn == False):
        login();"""
    parsedPosition = urlEncode(position);
    url = buildUrl(position);
    driver.get(url);
    #Since LinkedIn has multiple UIs, we have to go through all the possible classes our data could be under
    #Pass[i,0] represents a class job titles could be under
    #Pass[i,1] represents a class job companies could be under
    pass00 = driver.find_elements_by_xpath('//*[@class="job-card-search__title artdeco-entity-lockup__title ember-view"]');
    pass01 = driver.find_elements_by_xpath('//*[@class="job-card-search__company-name t-14 t-black artdeco-entity-lockup__subtitle ember-view"]');
    """
    pass10 = driver.find_elements_by_class_name('listed-job-posting__title');
    pass11 = driver.find_elements_by_class_name('listed-job-posting__company');
    pass20 = driver.find_elements_by_class_name('result-card__title');
    pass21 = driver.find_elements_by_class_name('job-result-card__subtitle-item');
    passes = {
        0: [pass00,pass01],
        1: [pass10,pass11],
        2: [pass20,pass21]
    };
    listingsIndex = getCorrectListingIndex([passes[0][0],passes[1][0],passes[2][0]]);
    titles = passes[listingsIndex][0];
    companies = passes[listingsIndex][1];
    print(len(titles));
    print(len(companies));
    """
    jobs = processJobs(pass00,pass01);
    return Response(json.dumps(jobs), status=200, mimetype='application/json');

def getCorrectListingIndex(arr):
    #Since LinkedIn has multiple UIs for their job search, we have to calculate which one we currently have
    for i in range(len(arr)):
        length = len(arr[i]);
        if(length > 0):
            print("The first length greater than 0 found was");
            print(length);
            print("The index of the listings type is");
            print(i);
            return i;
    
def urlEncode(job):
    #If the job is inputted with whitespaces or '+'s, url encode the job
    if(job.find(" ") != -1):
        #job was sent with whitespaces
        jobParts = job.split(" ");
    elif(job.find("+") != -1):
        #job was sent with '+'s
        jobParts = job.split("+");

    jobPartsLength = len(jobParts);
    parsedJob = "";
    for i in range(jobPartsLength):
        if(i != jobPartsLength-1):
            parsedJob = parsedJob + jobParts[i] + "%20";
        else:
            parsedJob = parsedJob + jobParts[i];
    return parsedJob;

def buildUrl(urlEncodedJob):
    url = "https://www.linkedin.com/jobs/search/?keywords=";
    finalUrl = url + urlEncodedJob;
    return finalUrl;

@app.route("/api/jobs/verifyLogin")
def verifyLogin():
    driver.get("http://www.linkedin.com");
    if(driver.current_url == "https://www.linkedin.com/feed/" or driver.current_url == "http://www.linkedin.com/feed/"):
        response = "Logged in to LinkedIn!";
    else:
        response = "Not logged in";
    print(response);
    return Response(response, status=200, mimetype="application/text");

def run():
    verifyLogin();
    app.run(host="0.0.0.0", port=8083);