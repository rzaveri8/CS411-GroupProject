from selenium import webdriver
from selenium.webdriver.chrome.options import Options;
from flask import Flask
from flask import request
from flask import Response
from processJobs import processJobs
import json

app = Flask(__name__)

options = Options()
options.add_argument("--headless")

driver = webdriver.Chrome(options=options);

loggedIn = False;

def login():
    global loggedIn;
    driver.get("https://www.linkedin.com/uas/login");
    usernameField = driver.find_element_by_name("session_key");
    passwordField = driver.find_element_by_name("session_password");
    submit = driver.find_element_by_xpath("//*[@id='app__container']/main/div/form/div[3]/button");
    usernameField.send_keys("mdesilva@bu.edu");
    passwordField.send_keys("LOgitech22");
    submit.click();
    #Assume that at this point we are logged in 
    loggedIn = True;



@app.route("/api/jobs/<position>")
def getJobs(position):
    if(loggedIn == False):
        login();
    parsedPosition = urlEncode(position);
    url = buildUrl(position);
    driver.get(url);
    titles = driver.find_elements_by_xpath('//*[@class="job-card-search__title artdeco-entity-lockup__title ember-view"]');
    companies = driver.find_elements_by_xpath('//*[@class="job-card-search__company-name t-14 t-black artdeco-entity-lockup__subtitle ember-view"]');
    #print("The length of job titles is");
    #print(len(titles));
    jobs = processJobs(titles,companies);
    return Response(json.dumps(jobs), status=200, mimetype='application/json');


def urlEncode(job):
    jobParts = job.split(" ");
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

if(__name__ == "__main__"):
    app.run(host="0.0.0.0", port=8085);