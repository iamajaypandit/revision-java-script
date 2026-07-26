//Multiplication Table Generator for a Given Number
//Write a program that takes a variable named input and assign 
//its value as 8 and prints its multiplication table upto 10.
// let n=8;
// for(let i =1; i<=10; i++){
// if(i*n){
//     console.log(`${i}x${n}=${i*n}`);
// }
// }
//Sum of Even Numbers
//You are given a number N. Print sum of all even numbers from 1 to N.
// let n = 50;
// let sum =0;
// for(let i=1; i<=n; i++){
//     if(i%2==0){
//         sum+=i;
//         console.log(sum);
//     }
// }
//Factorial with loop
// Note: Factorial of any given number n is represented as n! = n * n-1 * n-2 .....* 1.
// let n=6;
// let fact=1;
// for(let i=1; i<=n; i++){
//       fact=fact*i;
//       console.log(fact);

// }
//Check Prime
// Write a program that inputs a positive integer N. 
// It should then output a message indicating whether the number is a prime number or not.
// let n= 50;
// let isPrime=false;
// if(n<=1){
//     isPrime=false;
// }else{
//     for(let i=2; i<n; i++){
//         if(n%i===0){
//             isPrime=false;
//             break;
//         }
//     }
// }
// if(isPrime){
//     console.log(n+"is a  Prime number");
// }
// else{
//     console.log(n+"is not a prime number");
// }

//Digit Frequency Counter
//Given a number N and a digit D. Write a program to find how many times the digit D appears in the number N.
// let n = 151111524;
// let d = 1;
// let count = 0;
// while (n > 0) {
//     let last_digit = n % 10;

//     if (last_digit == d) {
//         count++;
//     }
//     n = Math.floor(n / 10);
// }
// console.log(count);
//Palindrome Number Checker
// Given a number N, you need to check 
// whether the given number is Palindrome or not. 
// A number is said to be Palindrome when it reads the same from backward as forward.
function checkPalindrome(str){
let rev="";
for(let i=str.length-1;  i>=0; i--){
    rev=rev+str[i];
}
if(str === rev){
    console.log("Palindrome");
}else{
    console.log("Not Palindrome");
}
}
checkPalindrome("madam");
checkPalindrome("hello");
checkPalindrome("rabina");
//JS Reverse
//Given a number, you task is to reverse its digits.
// If the reversed number contains 0s in the beginning, you must remove them as well.
// function JsReverse(num) {
// let n= num;
// let rev =0;
// while(n>0){
//     let last_digit=n%10;
//     rev=rev*10+last_digit;
//     n=Math.floor(n/10);
// }
// return rev;
// }
// console.log(JsReverse(1234));
// console.log(JsReverse(9876));
//Sum of Digits
//Complete the function SumofDigits() that takes an integer N as a parameter and
//  returns the sum of its digits.
function SumofDigits(n){
let sum =0;
while(n>0){
    let last_digit=n%10;
    sum= sum+last_digit;
    n=Math.floor(n/10);
}
return sum;
}
console.log(SumofDigits(15264));


//Index of Element
//You are given an integer array Arr of size N and a number X. 
// You need to print all the indexes of the given X in the array, else print -1.

//Note : You have to give output in 1-based indexing.

//Input Format:

//The first line of input contains N and X representing the number of elements 
// and the number whose indexes is to be given respectively.

//The second line of input contains N space separated integers, representing elements of the array Arr.

//Output Format:

//Print the indexes of number X in the array Arr, else print -1.

//Example 1:

//Input

//5 1
//2 1 3 1 1
//Output:

//2 4 5
//Explanation:

//1 is present at index 2, 4 and 5.
function indexOfElement(N, X, arr) {
  // write code and print here
  let found = false;
  for(let i =0; i<arr.length; i++){
    if(arr[i]  == X){
      console.log(i+1);
      found =true;
    }
   }
   if(found == false){
    console.log(-1);
  }
}

//Longest String
//You want to implement a function that takes an array of strings 
// and returns the longest string in the array.
function longestString(arr) {
  
  let ansIdx = 0;
for(let i = 0; i< arr.length; i++){
     let ansLen = arr[ansIdx].length;
     let currLen = arr[i].length;
     if(currLen > ansLen){
      ansIdx = i;
     }
 }
   return arr[ansIdx];
}
