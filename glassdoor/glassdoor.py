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
    if( len(posExperience) > 0):
        pos = int(posExperience[0].text);
        neg = 100 - pos;
        exp = [pos, neg];
    else:
        exp = [0,0];
    return exp;

def processInterviewDifficulty(rating):
    if(len(rating) > 0 ):
        difficultyRating = rating[0].text;
    else:
        difficultyRating = 0;
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

def processInterviewPaths(pathNames, pathPcts):
    size = len(pathNames);
    interviewPaths = [[0 for i in range(2)] for j in range(size)]; #initialize our 2d array
    for i in range(len(pathNames)):
        interviewPaths[i][0] = pathNames[i].text;
        interviewPaths[i][1] = pathPcts[i].text;
    print(interviewPaths);
    return interviewPaths;

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

def parsePosition(position):
    if("+" in position): 
        #multiple words in position
        positionParts = position.split("+");
        parsedPosition = "";
        for i in range(len(positionParts)):
            parsedPosition = parsedPosition + positionParts[i] + " ";
        return parsedPosition[:-1].lower();
    else:
        return position.lower();

if(__name__ == "__main__"):
    print(parsePosition("analyst"));