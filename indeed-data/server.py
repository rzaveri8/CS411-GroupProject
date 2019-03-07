from flask import Flask
from flask import request
from flask import Response
from IndeedRequest import IndeedRequest
app = Flask(__name__)

#TODO: Fix invalid session id for multiple requests within the same session
#TODO: Further abstract requests by creating one handler for different types of requests


@app.route("/") #by default these routes are GET requests
def verify_status():
    return "The server works!"

@app.route("/api/all/<company>/<position>")
def api_all_data(company, position):
    request = IndeedRequest(company,position);
    response = Response(request.requestAllData(), status=200, mimetype="application/json");
    return response;

@app.route("/api/rating/<company_name>/<position>")
def api_rating_request(company_name, position):
    request = IndeedRequest(company_name, position);
    response = Response(request.requestRating(), status=200, mimetype="application/json");
    return response;

@app.route("/api/reviews/<company_name>/<position>")
def api_reviews_request(company_name, position):
    request = IndeedRequest(company_name, position);
    response = Response(request.requestReviews(), status=200, mimetype="application/json");
    return response;

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=80)
