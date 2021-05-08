// Create a function that tells us how many days, weeks and months we have left if we live until 90 years old.
// It will take your current age as the input and console.logs a message with our time left in this format:
// For this challenge, assume there are 365 days in a year, 52 weeks in a year and 12 months in a year.

function lifeInWeek(age){
    var yearReminig=90-age;
    var days=yearReminig*365;
    var weeks=yearReminig*52;
    var months=yearReminig*12;
    console.log("You have " +days+" days, "+weeks+" weeks, and "+months+ " month left.");

}

//lifeInWeek(12);
// You have 28470 days, 4056 weeks, and 936 month left.