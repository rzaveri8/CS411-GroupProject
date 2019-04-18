#Todo: Remove 'promoted' from promoted jobs 
def processJobs(titles, companies):
    listLength = len(titles);
    jobs = [[0 for i in range(2)] for j in range(listLength)];
    for i in range(listLength):
        title = titles[i].text;
        if(title[-8:] == "Promoted"):
            title = title[:-9]
        company = companies[i].text;
        jobs[i][0] = title;
        jobs[i][1] = company;
    return jobs;
