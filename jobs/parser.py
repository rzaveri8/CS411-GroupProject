from bs4 import BeautifulSoup
from processJobs import *
import requests

proxies = {
    'http': 'http://104.248.183.67:3128',
    'https': 'http://104.248.183.67:3128'
}

data = requests.get("http://linkedin.com/jobs/search/?keywords=financial+analyst",proxies=proxies);
soup = BeautifulSoup(data.text,features="lxml");

pass00 = soup.find_all(attrs={"class": "listed-job-posting__title"});
pass10 = soup.find_all(attrs={"class": "result-card__title"});

print(len(pass00));
print(len(pass10));
if(len(pass00) > 0):
    companies = soup.find_all(attrs={"class": "listed-job-posting__company"});
    titles = pass00;
else:
    companies = soup.find_all(attrs={"class": "job-result-card__subtitle-item"});
    titles = pass10

jobs = processJobs(titles,companies);
print(jobs);
