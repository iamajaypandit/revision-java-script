//sum of all the digits

function SumOfDigits(n){
    if(n===0)
        return 0;
      return(n%10) + SumOfDigits(Math.floor(n/10));
}
console.log(SumOfDigits(5382));

// factorial of n
function factorial(n){
    if(n===0)
        return 1;
    return n*factorial(n-1);
}
console.log(factorial(5));

// fibonacci number
function fibonacci(n){
    if(n==0||n==1){
        return n;
    }
    return fibonacci(n-1) + fibonacci(n-2);
}
console.log(fibonacci(10));


// prime number 
function prime(n, i = 2) {
    if (i == n) return true;
    if (n % i == 0) return false;
    return prime(n, i + 1);
}

function print(n, i = 2) {
    if (i > n) return;

    if (prime(i)) console.log(i);

    print(n, i + 1);
}

print(20);


// even number 
// function EvenNumber(n){
//     if(n==0){
//         return n;
//     }
//     return ()
// }