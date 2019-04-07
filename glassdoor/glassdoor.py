def buildUrl(company,position):
    baseUrl = "https://www.google.com/search?q=";
    parameters = company + "+" + position + "+interview";
    fullUrl = baseUrl + parameters;
    #print(fullUrl);
    return fullUrl;

#TODO: parse input parameters
buildUrl("amazon", "software+engineer");
