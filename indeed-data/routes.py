from indeed import IndeedSearch;
import json

class IndeedRequest:

    def __init__(self, company, position):
        self.reqCompany = company;
        self.reqPosition = position;

    def requestAllData(self):
        search = IndeedSearch(self.reqCompany, self.reqPosition);
        responseData = json.dumps(search.returnAllData());
        return responseData;
