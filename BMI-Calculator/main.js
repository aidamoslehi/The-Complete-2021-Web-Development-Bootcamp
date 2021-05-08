// BMI Calculator:

// Create a BMI calculator using JavaScript functions. 
// The Body Mass Index (BMI) is a way of estimating the amount of body fat. It's used in medicine to calculate risk of heart disease.
// You can calculate it using the formula below, where weight divided by height squared.
// Your challenge is to create a function that takes weight and height as inputs and gives the calculated BMI value as an output. The output should be rounded to the nearest whole number.
// The first parameter should be the weight(Kg) and the second should be the height(M).
// NOTE: You do not need to write any alerts or prompts or console logs. Your code should only contain the function, the result has to be returned by the function. You do not need to call the function.

function bmiCalculator(weight,height){
    var bmi=weight/Math.pow(height,2);
    return Math.round(bmi) ;
}

// bmiCalculator(45,1.56);
// 18

