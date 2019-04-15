# Velozity: One Stop Shop for Professional Development
*A Boston University Software Engineering Project*

> Allow user to connect their LinkedIn account to our app, which will find jobs or internships in their field that are filtered using their current experience and skills. Then, using that job data, our app will connect to Glassdoor and Indeed, where the app will retrieve the ratings of each particular job at a company as well as user reviews of that job, the numerical data of the number of people who interviewed and got the job, the experiences of those people and the people who already have the position, and potentially any tips for the interviews for those jobs. Then, we may send the textual data to IBM Watson to do sentiment analysis and return the average experience of an individual in that position, and the average experience of an individual interviewing for that position. We will use the numerical data to calculate how likely the candidate is to get that job if they receive an interview, and return a summary of all of our results for each job back to the user.

##  CORE SERVICES

**Indeed:**
* Create endpoint for Indeed job data - Done
* Test multiple concurrent connections to Indeed - Done
* Setup API calls to Indeed endpoint - Done

**LinkedIn:**
* Connect to LinkedIn using user's LinkedIn account - Done
* Verify account is eligible /Determine how to judge the strength of a LinkedIn profile
* Return job recommendations
* Send job recommendations to aggregator

**Glassdoor:**
* Create endpoint for Glassdoor - Done
* Process Glassdoor data
* Setup API calls to Glassdoor endpoint  


**Watson:**
* Explore our options with Watson

## FRONT END
* Create splash page
* Create sign-up view
* Create log-in view
* Create dashboard


## DATABASE:
* Setup database to store user profiles - Done </br>
* Write calls to database


## INFRASTRUCTURE
* Explore our options with where we are going to host the app and its micro-services - Done
* Determine hosting parameters - Done
