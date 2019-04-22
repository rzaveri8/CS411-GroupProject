import requests

response = requests.get("http://linkedin.com/jobs/search/?keywords=electrical+engineer");
print(response.text);