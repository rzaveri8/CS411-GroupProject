from flask import Flask
from flask import request
from flask import Response
from flask_cors import CORS
from parser import getJobs
from urlEncode import urlEncode, buildUrl
import json

app = Flask(__name__);
CORS(app);


@app.route("/api/jobs/<position>")
def returnJobListings(position):
    urlEncodedPosition = urlEncode(position);
    query = buildUrl(urlEncodedPosition);
    results = getJobs(query);
    return Response(json.dumps(results), status=200,mimetype="application/json");
