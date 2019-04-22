def urlEncode(job):
    #If the job is inputted with whitespaces or '+'s, url encode the job
    if(job.find(" ") != -1):
        #job was sent with whitespaces
        jobParts = job.split(" ");
    elif(job.find("+") != -1):
        #job was sent with '+'s
        jobParts = job.split("+");
    else:
        #single word job, don't need to url encode itself
        return job;
    jobPartsLength = len(jobParts);
    parsedJob = "";
    for i in range(jobPartsLength):
        if(i != jobPartsLength-1):
            parsedJob = parsedJob + jobParts[i] + "%20";
        else:
            parsedJob = parsedJob + jobParts[i];
    return parsedJob;

def buildUrl(urlEncodedJob):
    url = "https://www.linkedin.com/jobs/search/?keywords=";
    finalUrl = url + urlEncodedJob;
    return finalUrl;