def buildUrl(company,position):
    baseUrl = "https://www.google.com/search?q=";
    parameters = company + "+" + position + "+interview";
    fullUrl = baseUrl + parameters;
    #print(fullUrl);
    return fullUrl;

def processInterviewOffers(offersRawData):
    for i in range(len(offersRawData)):
        print(offersRawData[i].text);
    return;

def processInterviewExperience(posExperience):
    #get the posExperience, calculate neg experience and return both
    print(posExperience.text);
    return;

def processInterviewDifficulty(rating):
    print(rating.text);
    return;

def processInterviewComments(commentsRawData):
    for i in range(len(commentsRawData)):
        print(commentsRawData[i].text);
    return;


def processInterviewExperiences(experiencesRawData):
    for i in range(len(experiencesRawData)):
        print(experiencesRawData[i].text);
    return;

def processInterviewDifficultyLevels(difficultyLevelsRawData):
    for i in range(len(difficultyLevelsRawData)):
        print(difficultyLevelsRawData[i].text);
    return;

def processInterviewQuestions(questionsRawData):
    for i in range(len(questionsRawData)):
        print(questionsRawData[i].text);
    return;

#def process

#TODO: parse input parameters if not done on the client side
buildUrl("amazon", "software+engineer");
