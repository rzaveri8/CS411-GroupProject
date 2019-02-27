from flask import Flask
from flask import request
app = Flask(__name__)

@app.route("/")
def verify_status():
    return "The server on the AWS EC2 instance works!"

@app.route("/get")
def get_info():
    company_name = str(request.args.get('company'));
    position = str(request.args.get('position'));
    response = "Requesting data for " + position + " job at " + company_name;
    return response;

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=80)


