def buildUrl(company,position):
    baseUrl = "https://www.google.com/search?q=";
    parameters = company + "+" + position + "+interview";
    fullUrl = baseUrl + parameters;
    #print(fullUrl);
    return fullUrl;

def processInterviewOffers(offersRawData):
    offersData = [0] * len(offersRawData);
    for i in range(len(offersRawData)):
        offersData[i] = offersRawData[i].text;
    return offersData;

def processInterviewExperience(posExperience):
    #get the posExperience, calculate neg experience and return both
    pos = int(posExperience.text);
    neg = 100 - pos;
    exp = [pos, neg];
    return exp;

def processInterviewDifficulty(rating):
    difficultyRating = rating.text;
    return difficultyRating;

def processInterviewComments(commentsRawData, additionalCommentsRawData):
    commentsData = [0] * len(commentsRawData);
    j = 0; #keep track of our additional comments, as not every comment will have an additional comment
    for i in range(len(commentsRawData)):
        comment = commentsRawData[i].text;
        if(comment[-9:] == "Show More"):
            #there is more content to this comment that is hidden in the additional comments
            comment = comment[:-10]; #strip the "Show More" string from this comment
            #since the additional comments are initially hidden, we need to use get_attribute('textContent') to actually get the text
            additionalCommentContent = additionalCommentsRawData[j].get_attribute('textContent');
            j+=1;
            commentsData[i] = comment + additionalCommentContent;
        else:
            commentsData[i] = comment;
    return commentsData;

def processInterviewQuestions(questionsRawData):
    interviewQuestions = [0] * len(questionsRawData);
    for i in range(len(questionsRawData)):
        interviewQuestions[i] = questionsRawData[i].text;
    return interviewQuestions;


#We can get percentages using processInterviewExperience instead of getting individual experiences, so we don't need to use this
def processInterviewExperiences(experiencesRawData):
    for i in range(len(experiencesRawData)):
        print(experiencesRawData[i].text);
    return;

#We can get an average difficulty level already using processInterviewDifficulty, so we don't need to use this
def processInterviewDifficultyLevels(difficultyLevelsRawData):
    for i in range(len(difficultyLevelsRawData)):
        print(difficultyLevelsRawData[i].text);
    return;


#def process

#TODO: parse input parameters if not done on the client side
buildUrl("amazon", "software+engineer");
