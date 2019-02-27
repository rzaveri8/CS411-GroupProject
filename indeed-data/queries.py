from indeed import IndeedSearch


someJob = IndeedSearch("Amazon", "Product Manager");
someJob.connect();
print(someJob.getAvgRating());
someJob.getReviews();
someJob.disconnect();
