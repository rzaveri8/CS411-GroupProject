#Todo: Remove 'promoted' from promoted jobs 
def processJobs(titles, companies):
    listLength = len(titles);
    jobs = [[0 for i in range(2)] for j in range(listLength)];
    for i in range(listLength):
        title = titles[i].text;
        company = companies[i].text;
        jobs[i][0] = title;
        jobs[i][1] = company;
    return jobs;
