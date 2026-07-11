//question 1
//Circle Area and Perimeter Calculation
//You are required to take the radius of a circle as input from the user, and finally, print the area and perimeter 
// of the circle.
//Note: Take pi as 3
// Solution=
let pi = 3;
let radius = 4;
area = pi * radius * radius;
perimeter = 2 * pi * radius;
console.log(area);
console.log(perimeter);
 //Question 2 =
 //Given a temperature in Celsius, output the fahrenheit equivalent of it. This is similar to
 //  the Celsius to Fahrenheit 1 question, read the note below carefully.
// Solution =
let C =32;
let F = (C*(9/5)) + 32;
console.log(F.toFixed(6));
//Question 3 =
//Basic Arithmetic Operations
//You are given two positive integers. You have to calculate the result of 
// performing +,-,*,/,% operations on them.
//Solution = 
let a = 8;
let b = 3;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a%b);
console.log(Math.floor(a/b));
// Question 4 =
//JavaScript Float Variable Reassignment
//Declare a variable named a and initialize its value to 10.45
//After that re-initialize its value to 20.55 and print the variable a.
//Solution = 
let c = 10.45;
c = 20.45;
console.log(c);
// question 5 =
//Calculate Average Product Rating
//Imagine you're working on an e-commerce site and you need to calculate the average rating for a product. 
// The ratings are stored as floating point numbers in a MongoDB database. For this task, you can simulate 
// the ratings with three variables rating1, rating2, and rating3, which should be initialized with the 
// values 10.5, 12.5, and 12.15 respectively. Write a JavaScript function calculateAverageRating that 
// calculates the average rating and returns the floored integer value.
// Soution =
let rating1 = 10.5;
let rating2 = 12.5;
let rating3 = 12.15;
averagerating = ((rating1+rating2+rating3)/3);
console.log(Math.floor(averagerating));
//Question 6 =
//Compound interest
//Write a program to find the compound interest for given principal amount
//  P, time Tm(in years), and interest rate R.
//Print the compound interest by 2  decimal places.
// Not solved
// Question 7
//Temperature Conversion
//Given the temperature of a city in celsius(C), your task is to 
// convert the temperature to Fahrenheit(F) and Print it.
//Formula : (C* (9/5)) + 32 = F
// Solution 
let D = 25;
let E = (D* (9/5)) + 32;
console.log(E);
// Question 8
//Quotient and Remainder Calculation
//Declare two variables as a and b. 
// Initialize the values those variables as 1042 and 7 respectively.
//Declare another two variables quo and rem that will store the quotient 
// and remainder of these numbers taking a as dividend and b as divisor.
//Print quo and rem in a line separated by a space.
// Solution =
let x = 1042;
let y = 7;
quo = Math.floor(x/y);
rem = (x%y);
console.log(quo);
console.log(rem);
//Question 9
//JavaScript Float Variable Reassignment
//Declare a variable named a and initialize its value to 10.45
//After that re-initialize its value to 20.55 and print the variable a
//Solution = 
let g = 10.45;
g = 20.55;
console.log(g);
//Question 10 = 
//Agent Binod
//You are required to take input a string agentName, and finally print the line 
// "Hi my name is Agent insert agentName".
//Input Format First line contains a string which is the name of the agent.
//Solution = 
let agentname = "Binod";
console.log("Hi my name is agent "  + agentname );
