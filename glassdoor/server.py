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
#options.add_argument("--headless"); #run in headless mode

#Init chrome web driver for Glassdoor
#EC2 driver = "/usr/bin/chromedriver"
glassdoorDriver = webdriver.Chrome(options=options)

#GLASSDOOR
@app.route("/api/glassdoor/<company>/<position>")
def initGlassdoorSearch(company,position):
    searchUrl = buildUrl(company, position);
    glassdoorDriver.get(searchUrl) #execute search
    result = glassdoorDriver.find_element_by_class_name("LC20lb").click();
    #print("The first result that was returned is: " + result.text);
    return "Request went through"

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8082);
