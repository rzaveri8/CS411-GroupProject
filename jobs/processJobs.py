def processJobs(titles, companies):
    listLength = len(titles);
    jobs = [[0 for i in range(2)] for j in range(listLength)];
    for i in range(listLength):
        title = titles[i].string;
        """
        When signed in, promoted jobs show up in our results that aren't relevant to the job search.
        if(title[-8:] == "Promoted"):
            title = title[:-9]
        """
        company = companies[i].string;
        jobs[i][0] = title;
        jobs[i][1] = company;
    return jobs;
