from selenium import webdriver
from selenium.webdriver.common.keys import Keys;
from selenium.webdriver.chrome.options import Options;

options = Options()
options.add_argument("--headless");

driver1 = webdriver.Chrome(options=options);

driver1.get("https://www.indeed.com/");
print("Got Indeed.com");
driver1SessionId = driver1.session_id;
print("The session id of driver 1 is ");
print(driver1SessionId);
print("\n");

driver1.get("https://www.glassdoor.com/");
print("Got Glassdoor.com");

"""
driver2 = webdriver.Chrome(options=options);
driver2.session_id = driver1SessionId;
print("The session id of driver 2 is ");
print(driver2.session_id);
"""
