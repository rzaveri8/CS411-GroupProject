from selenium import webdriver
from selenium.webdriver.chrome.options import Options;
from flask import Flask
from flask import request
from flask import Response
from indeed import *
import json
from flask_cors import CORS
app = Flask(__name__)
CORS(app)

#Web driver options
options = Options();
options.add_argument("--headless"); #run in headless mode

#Init chrome web driver for Indeed

env = "dev";

if(env == "prod"):
    indeedDriver = webdriver.Chrome("/usr/bin/chromedriver", options=options);
else:
    #assume dev
    indeedDriver = webdriver.Chrome(options=options);

@app.route("/api/indeed/")
def it_works():
    return "The server works";


@app.route("/api/indeed/<company>")
def test_driver(company):
    url = "https://www." + company + ".com";
    indeedDriver.get(url);
    return("Got " + company + " page");

#INDEED
@app.route("/api/indeed/<company>/<position>")
def get_all(company, position):
    url = buildQuery(company, position);
    currentDriver = indeedDriver.get(url);
    print("Successfully fetched " + url);
    nullPageCheck = indeedDriver.find_elements_by_class_name('cmp-ZrpPromo-text');
    if(len(nullPageCheck) > 0 ):
        return "Indeed data not available for this position at this company";
    data = {
    "rating": getAvgRating(),
    "reviews": getReviews(),
    "pros": getPros(),
    "cons": getCons()
    }
    print("Succesfully fetched all data");
    response = Response(json.dumps(data), status=200, mimetype="application/json"); #use json.dumps to correctly encode the dict into a json object
    return response;

def getAvgRating():
    rawRatingsData = indeedDriver.find_elements_by_class_name('cmp-ratingNumber');
    print("Got ratings data");
    return processRatings(rawRatingsData);

def getReviews():
    rawReviewsData = indeedDriver.find_elements_by_class_name('cmp-review-text');
    print("Got reviews data");
    return processReviews(rawReviewsData);

def getPros():
    rawProsData = indeedDriver.find_elements_by_class_name('cmp-review-pro-text');
    print("Got pros data");
    return processPros(rawProsData);

def getCons():
    rawConsData = indeedDriver.find_elements_by_class_name('cmp-review-con-text');
    print("Got cons data");
    return processCons(rawConsData);

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8080);
