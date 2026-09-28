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
 let arr = [4,1,8,2,3,6]
 let target =3
 let found = false
 for(let i=0; i<arr.length; i++){
    if(target==arr[i]){
        found = true; 
        break;
    }
 }
 console.log(found);
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