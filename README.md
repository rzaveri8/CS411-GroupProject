# Velozity: One Stop Shop for Professional Development
*A Boston University Software Engineering Project*

> Velozity is a hub for accelerating your career and finding your perfect job. Users login by connecting their LinkedIn account to our app. Users can upload their current resume to get scores and feedback on how to improve it. The user's LinkedIn information is used to generate recommended jobs or internships in their field. The user can select any of these jobs, or can manually search for any job, to see detailed information from Indeed and Glassdoor about that particular job. The app retrieves the ratings of each particular job at a company as well as user reviews of that job. It also returns the numerical data of the number of people who interviewed and got the job, the experiences of those people and the people who already have the position, and potentially any tips for the interviews for those jobs. The app then uses the user's most recent resume grade and the rated difficulty of the interview process to calculate how likely the candidate is to get an offer for that particular job. 

##  CORE SERVICES

**Resume Grader:**
* User can upload their resume to be stored in their profile
* Uploaded resume is parsed and graded using an API call
* Results return an overall grade, sub-scores, readability, and most popular words
* Results also include advice for improvement of the resume

**Recommended Jobs:**
* LinkedIn returns a list of recommended jobs based on the user's industry from their profile
* User can manually change their industry / position for their profile on Velozity
* Clicking on any job will take the user to the Job Search page

**Job Search:**
* User can manually enter a position and a company name
* User can automatically search for any recommended job by clicking on it
* Results are pulled from Indeed and Glassdoor for the given job
* Results from Indeed include ratings, reviews, and a list of pros and cons for the job
* Results from Glassdoor include interview questions, interview ratings, interview difficulty, and how many candidates received offers
* The app calculates the likelihood that a user will get an offer for the job given their resume grade and the interview difficulty
