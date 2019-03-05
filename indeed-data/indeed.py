from selenium import webdriver
from selenium.webdriver.common.keys import Keys;
from selenium.webdriver.chrome.options import Options;


class IndeedSearch:

    options = Options();
    #options.AddUserProfilePreference("profile.default_content_setting_values.images", 2); #do not load images
    options.add_argument("--headless"); #run in headless mode
    #ec2 env driver = webdriver.Chrome('/usr/bin/chromedriver',options = options);
    driver = webdriver.Chrome(options=options);
    query = "";
    avgRating = 0;

    def __init__(self, company_name, job_title):
        self.company = company_name;
        self.job = job_title;

    def formatJobTitle(self):
        formattedJobTitle = "";
        for char in range(0,len(self.job)):
            if(self.job[char] != " "):
                formattedJobTitle = formattedJobTitle + self.job[char];
            else:
                formattedJobTitle = formattedJobTitle + "+";

        self.job = formattedJobTitle
        return self.job;

    def buildQuery(self):
        self.formatJobTitle();
        baseUrl = "https://www.indeed.com/cmp/";
        partialUrl = baseUrl + self.company + "/";
        self.query = partialUrl + "reviews?fjobtitle=" + self.job;
        return;

    def printQuery(self):
        print(self.query);
        return;

    def connect(self):
        self.buildQuery();
        self.driver.get(self.query);

    def getAvgRating(self):
        ratingsData = self.driver.find_elements_by_class_name('cmp-ratingNumber');
        ratings = [0] * len(ratingsData);
        sum = 0;
        for i in range(0, len(ratingsData)): #build an array of all the ratings, each as a double
            ratings[i] = float(ratingsData[i].text);
        for rating in ratings:
            sum = sum + rating;
        self.avgRating = sum / len(ratings);
        data = {
        "rating": self.avgRating
        }
        return data;

    def getReviews(self):
        #print("The requested job is " + self.job);
        reviewsRawData = self.driver.find_elements_by_class_name('cmp-review-text');
        reviews = [0] * len(reviewsRawData);
        count = 0;
        for review in reviewsRawData:
            currReview = str(review.text);
            reviews[count] = currReview;
            count = count + 1;
        data = {
        "reviews": reviews
        }
        return data;

    def getPros(self):
        pass

    def getCons(self):
        pass

    def returnAllData(self):
        rating = self.getAvgRating();
        reviews = self.getReviews();
        self.disconnect();
        #TODO: add company and position to data object
        data = {
        "rating": rating,
        "reviews": reviews
        } #object that holds our retreived data
        return data;

    def disconnect(self):
        self.driver.close();
