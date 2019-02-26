<h2> Project description </h2>
Allow user to connect their LinkedIn account to our app, which will find jobs or internships in their field that are filtered using their current experience and skills. Then, using that job data, our app will connect to Glassdoor/Indeed, where the app will retrieve the ratings of each particular job at a company as well as user reviews of that job, the numerical data of the number of people who interviewed and got the job, the experiences of those people and the people who already have the position, and potentially any tips for the interviews for those jobs. Then, we will send the textual data to IBM Watson to do sentiment analysis and return the average experience of an individual in that position, and the average experience of an individual interviewing for that position. We will use the numerical data to calculate how likely the candidate is to get that job if they receive an interview, and return a summary of all of our results for each job back to the user.

<h2> Tasks </h2>:

<h3> CORE SERVICES </h3>

Indeed:
Create endpoint for Indeed job data - Done
Test multiple concurrent connections to Indeed -
Setup API calls to Indeed endpoint -

LinkedIn:
Connect to LinkedIn using User's LinkedIn account
Verify account is eligible
Return job recommendations
Send job recommendations to Indeed endpoint

Watson:
Explore our options with Watson

Glassdoor:
Explore our options with Glassdoor

<h3> WEBSITE/WEB APP </h3>

Front-end:
Create splash page
Create sign-up view
Create log-in view
Create dashboard

Back-end:
Write Sign-up/Log-in functionality

Database:
Setup database to store user profiles


<h3> INFRASTRUCTURE </h3>

Server:
Explore our options with where we are going to host the app and its micro-services
Determine hosting parameters
