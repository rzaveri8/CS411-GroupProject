from selenium import webdriver
from selenium.webdriver.chrome.options import Options;

def formatJobTitle(position):
    formattedJobTitle = "";
    for char in range(0,len(position)):
        if(position[char] != " "):
            formattedJobTitle = formattedJobTitle + position[char];
        else:
            formattedJobTitle = formattedJobTitle + "+";

    position= formattedJobTitle
    return position;

def buildQuery(company, position):
    position = formatJobTitle(position);
    baseUrl = "https://www.indeed.com/cmp/";
    partialUrl = baseUrl + company + "/";
    query = partialUrl + "reviews?fjobtitle=" + position;
    return query;

def printQuery(self):
    print(self.query);
    return;

def processRatings(ratingsData):
    print("Processing ratings data");
    ratings = [0] * len(ratingsData);
    sum = 0;
    for i in range(0, len(ratingsData)): #build an array of all the ratings, each as a double
        ratings[i] = float(ratingsData[i].text);
    for rating in ratings:
        sum = sum + rating;
    avgRating = sum / len(ratings);
    return avgRating;

def processReviews(reviewsRawData):
    print("Processing reviews data");
    reviews = [0] * len(reviewsRawData);
    count = 0;
    for review in reviewsRawData:
        currReview = str(review.text);
        reviews[count] = currReview;
        count = count + 1;
    return reviews;

def processPros(prosRawData):
    print("Processing pros data");
    pros = [0] * len(prosRawData);
    count = 0;
    for pro in prosRawData:
        currPro = str(pro.text);
        pros[count] = currPro;
        count = count + 1;
    return pros;

def processCons(consRawData):
    print("Processing cons data");
    cons = [0] * len(consRawData);
    count = 0;
    for con in consRawData:
        currCon = str(con.text);
        cons[count] = currCon;
        count = count + 1;
    return cons;
