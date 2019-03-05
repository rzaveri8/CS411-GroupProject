from indeed import IndeedSearch;
import json

class IndeedRequest:

    def __init__(self, company, position):
        self.reqCompany = company;
        self.reqPosition = position;
        self.search = IndeedSearch(self.reqCompany, self.reqPosition);
        self.search.connect();

    def requestAllData(self):
        responseData = json.dumps(self.search.returnAllData());
        return responseData;

    def requestRating(self):
        responseData = json.dumps(self.search.getAvgRating());
        self.search.disconnect();
        return responseData;

    def requestReviews(self):
        responseData = json.dumps(self.search.getReviews());
        self.search.disconnect();
        return responseData;
