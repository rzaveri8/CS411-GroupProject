from indeed import IndeedSearch


someJob = IndeedSearch("Google", "Product Manager");
someJob.connect();
print(someJob.getAvgRating());
someJob.getReviews();
someJob.disconnect();
