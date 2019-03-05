from flask import Flask
from flask import request
from flask import Response
from indeed import IndeedSearch
import json
app = Flask(__name__)

@app.route("/") #by default these routes are GET requests
def verify_status():
    return "The server on the AWS EC2 instance works!"

@app.route("/api/rating/<company_name>/<position>") #variable parts of url passed into function
def api_rating_request(company_name, position):
    newSearch = IndeedSearch(company_name, position);
    newSearch.connect();
    rating = newSearch.getAvgRating();
    newSearch.disconnect();
    responseData = "The average rating of the " + position + " position at " + company_name + " is " + str(rating);
    responseData = json.dumps(responseData);
    response = Response(responseData, status=200, mimetype='application/json');
    return response;

@app.route("/api/reviews/<company_name>/<position>")
def api_reviews_request(company_name, position):
    newSearch = IndeedSearch(company_name, position);
    newSearch.connect();
    reviews = newSearch.getReviews();
    newSearch.disconnect();
    responseData = json.dumps(reviews);
    response = Response(responseData, status=200, mimetype='application/json');
    return response;

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=80)
