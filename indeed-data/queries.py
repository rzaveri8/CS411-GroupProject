from indeed import IndeedSearch


someJob = IndeedSearch("Amazon", "Product Manager");
someJob.connect();
print(someJob.returnAllData());
someJob.disconnect();
