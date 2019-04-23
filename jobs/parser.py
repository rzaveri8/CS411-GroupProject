from bs4 import BeautifulSoup
from processJobs import *
import requests

proxies = {
    'http': 'http://104.248.220.216:3128',
    'https': 'http://104.248.220.216:3128'
}

debug = False;

def fetchData(query):
    data = requests.get(query,proxies=proxies);
    return data;
    
def parseData(data):
    soup = BeautifulSoup(data.text,features="lxml");
    pass00 = soup.find_all(attrs={"class": "listed-job-posting__title"});
    pass10 = soup.find_all(attrs={"class": "result-card__title"});
    if(debug):  
        print(len(pass00));
        print(len(pass10));
    if(len(pass00) > 0):
        companies = soup.find_all(attrs={"class": "listed-job-posting__company"});
        titles = pass00;
    else:
        companies = soup.find_all(attrs={"class": "job-result-card__subtitle-item"});
        titles = pass10
    jobs = processJobs(titles,companies);
    if(debug):
        print(jobs);
    return jobs;

def getJobs(query):
    rawData = fetchData(query);
    return parseData(rawData);
