"""
***Store the web driver's session id so we can use the same session for multiple requests.***

When the server starts, the first request will create a new web driver instance.
All subsequent requests should use that same session, so we don't run into invalid sessions errors.

"""
sessionId = "";
firstRun = True;
