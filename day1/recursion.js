// //sum of all the digits

// function SumOfDigits(n){
//     if(n===0)
//         return 0;
//       return(n%10) + SumOfDigits(Math.floor(n/10));
// }
// console.log(SumOfDigits(5382));

// // factorial of n
// function factorial(n){
//     if(n===0)
//         return 1;
//     return n*factorial(n-1);
// }
// console.log(factorial(5));

// // fibonacci number
// function fibonacci(n){
//     if(n==0||n==1){
//         return n;
//     }
//     return fibonacci(n-1) + fibonacci(n-2);
// }
// console.log(fibonacci(10));


// // prime number 
// function prime(n, i = 2) {
//     if (i == n) return true;
//     if (n % i == 0) return false;
//     return prime(n, i + 1);
// }

// function print(n, i = 2) {
//     if (i > n) return;

//     if (prime(i)) console.log(i);

//     print(n, i + 1);
// }

// print(20);


// //even number 
// function EvenNumber(n) {
//     if (n == 0) {
//         return;
//     }

//     EvenNumber(n - 1);

//     if (n % 2 == 0) {
//         console.log(n);
//     }
// }

// EvenNumber(10);
// find the maximum element in the array
//approach 3
//let arr=[4,3,1015,5,67,30,56,34,87,98,99];
// function findMax(arr,i,ans){
//     if(i==arr.length){
//         return ans;
//     }
//     if(arr[i]>ans)
//         ans=arr[i];
//     return findMax(arr,i+1, ans);
// }
// console.log(findMax(arr,0,-Infinity));
// time complexity -> o(n)
// space complexity -> o(n)



// check if array is sorted or not when an array is sorted then return true 
// and when an array is not sorted then return false 
// let arr =[1,2,3,4,6];
// function isSorted(arr,i){
//     if(i==arr.length)
//         return true;
//     if(arr[i]<arr[i-1])
//         return false;
//     return isSorted(arr, i+1);
// }
// console.log(isSorted(arr,1));

// check if a string is palindrome or not using recursion 
// let str = "rar";
// function isPalindrome(str,left ,right){
//  if(right<left)
//     return true;
// if(str[left]!==str[right]){
//     return false;
// }
// return isPalindrome(str,left+1,right-1);
// }
// console.log(isPalindrome(str,0,str.length-1));
// find the prime number from 1 to n using recursion 
let n =20;
function isPrime(number, divisor = 2) {
    if (number < 2) {
        return false;
    }
    if (divisor * divisor > number) {
        return true;
    }
    if (number % divisor === 0) {
        return false;
    }
    return isPrime(number, divisor + 1);
}

function findPrime(number, limit) {
    if (number > limit) {
        return;
    }
    if (isPrime(number)) {
        console.log(number);
    }
    findPrime(number + 1, limit);
}

findPrime(1, n);

let arr = [5, 4, 6, 2, 1];
//let str ="ajay";

function reverse(left, right, arr) {
    // Base condition: jab left pointer right se aage ya barabar ho jaye
    if (left >= right) {
        return;
    }
    
    // Swap logic
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    
    // Recursive call
    reverse(left + 1, right - 1, arr);
}

//Function call (Yahan length - 1 dena zaroori hai)
reverse(0, arr.length - 1, arr);
console.log(arr);

   let str = "ajay"
const reverseString=(i)=>{
    if(i<0){
        return "";
    }
    return str[i] + reverseString(i-1);
}
 console.log(reverseString(str.length-1));