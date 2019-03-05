from indeed import IndeedSearch


someJob = IndeedSearch("Amazon", "Product Manager");
someJob.connect();
print(someJob.getAvgRating());
print(someJob.getReviews());
someJob.disconnect();
