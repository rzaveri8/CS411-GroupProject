def urlencode(job):
    jobParts = job.split(" ");
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
    

jobcase1 = (urlencode("quality assurance engineer"));
print(buildUrl(jobcase1));