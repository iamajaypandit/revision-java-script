// subarrays

//let arr =[5,4,8,9,10];
//find the subarray of length
// let k =2; 
//   for(let i =0; i<arr.length-k+1; i++){
//     let subarray=[];
//   for(let j =i; j<i+k; j++){
//     subarray.push(arr[j]);
//   }
//   console.log(subarray);
//   }
 // find all the subarrays 
// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//     let subarray = [];
//   for (let j = i; j <arr.length; j++) {
//      subarray.push(arr[j]);
//     console.log(subarray);
//     count++;
//   }
// }

// console.log("Total number of subarrays:", count);

// for(let i=0; i*i<n;i++){
// }
// //T.c = sqrt(n)
// for(let i=0;i<n; i++){
//     for(let j=0; j<i; j++){

//     }
// }
// //T.C = 0(n^2)
// for(let i=0; i<10000; i++){

// }
// // T.C =o(1)

// while(n!=0){
//     n=n/2;
// }
//t.c o(log2(n))
// Asymptotic notation 
 //Omega() = best case
 //Theta() = Avg 
 // Big Oh = worst case

 // given an array and find if the target exist or not
//  let arr = [4,1,8,2,3,6]
//  let target =3
//  let found = false
//  for(let i=0; i<arr.length; i++){
//     if(target==arr[i]){
//         found = true; 
//         break;
//     }
//  }
//  console.log(found);
// best case =o(1) when item is at first index
// abg case =o(n)
// worst case =o(n) when item is at last index 

// Space complexity 
// extra memory required by an algorithm when input size changes 

// let k=1; 
// let k =2;
// let k=3;
// 100 variables 
//s,c = o(1)

// for reverse(input){
//    let arr=[]
//    for(let i=input.length-1; i=>0; i--){
//     arr.push(input[i]);
//    }
//    return arr;
// }
// t.c o(n) n> input size
// s.c o(n)n> input size

// o(1) <o(log(n))<0(sqrt(n))<o(n)<o(n^2)<o(n^3)

// function findProductPair(arr, target) {
//   // Check every pair using two nested loops
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] * arr[j] === target) {
//         return [arr[i], arr[j]]; // Found the pair
//       }
//     }
//   }
//   return null; // No pair found
// }

// // Example Execution
// const arr = [2, 5, 3, 10, 4];
// const target = 20;

// const result = findProductPair(arr, target);

// if (result !== null) {
//   console.log(result[0] + " * " + result[1] + " = " + target);
// } else {
//   console.log("No such pair exists");
// }

function findMaxSubarray(arr) {
  // Initialize with the first element
  let currentSum = arr[0];
  let maxSum = arr[0];

  let start = 0;
  let end = 0;
  let tempStart = 0;

  for (let i = 1; i < arr.length; i++) {
    // Decision: extend the existing subarray or start fresh from current element
    if (currentSum + arr[i] < arr[i]) {
      currentSum = arr[i];
      tempStart = i;
    } else {
      currentSum = currentSum + arr[i];
    }

    // Update global maximum and tracking indices
    if (currentSum > maxSum) {
      maxSum = currentSum;
      start = tempStart;
      end = i;
    }
  }

  // Extract the subarray manually or via slice
  const subarray = [];
  for (let k = start; k <= end; k++) {
    subarray.push(arr[k]);
  }

  return { subarray: subarray, maxSum: maxSum };
}

// Example Execution
const inputArr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const ans = findMaxSubarray(inputArr);

console.log("Subarray:", ans.subarray); // [4, -1, 2, 1]
console.log("Max Sum:", ans.maxSum);     // 6

// const students = [
//   { name: "Amit", math: 78, science: 82, english: 90 },
//   { name: "Sneha", math: 83, science: 75, english: 91 },
//   { name: "Ravi", math: 92, science: 90, english: 85 }
// ];

// Map method se har student ka total aur average calculate karna
// const result = students.map(student => {
//   const total = student.math + student.science + student.english;
  
//   // 3 subjects hain, to divide by 3 aur .toFixed(2) se 2 decimal places
//   const average = Number((total / 3).toFixed(2));

//   return {
//     name: student.name,
//     total: total,
//     average: average
//   };
// });

// console.log(result);

const students = [
  { name: "Aman", marks: 85, active: true },
  { name: "Riya", marks: 42, active: true },
  { name: "Rahul", marks: 91, active: false },
  { name: "Neha", marks: 76, active: true },
  { name: "Karan", marks: 35, active: true }
];

// Step 1: Filter active students with marks >= 50
const eligibleStudents = students.filter(s => s.active && s.marks >= 50);

// Step 2: Get their names
const names = eligibleStudents.map(s => s.name);

// Step 3: Total marks using reduce
const totalMarks = eligibleStudents.reduce((sum, s) => sum + s.marks, 0);

// Step 4: Final result
const result = { names, totalMarks };

console.log(result); 
// { names: ['Aman', 'Neha'], totalMarks: 161 }