// printing daigonal matrixs

// let mat = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12],
//     [13, 14, 15, 16]
// ];

// for(let row=mat.length-1;row>=0;row--){
//     for(let col=0;col<mat[row].length;col++){
//         if(row+col==mat.length-1)
//           console.log(mat[row][col]);
//     }
// }


// for(let j=0; j<mat[0].length; j++){
//     for(let i=mat.length-1; i>=0; i--){
//         if(i+j==mat.length-1)
//             console.log(mat[i][j]);
//     }
// }
//13 10 7 4
// for(let j=0; j<mat[0].length; j++){
//     for(let i=mat.length-1; i>=0; i--){
//          if(i+j==mat.length-1)
//             console.log(mat[j][i]);
//     }
// }
// 4 7 10 13 
// for(let j=0; j<mat[0].length; j++){
//     for(let i=0;  i<mat.length; i++){
//         if(i==j)
//             console.log(mat[i][j]);
//     }
// }
// 1 6 11 16 

// for(let j=mat[0].length-1; j>=0; j--){
//     for(let i=0; i<mat.length; i++){
//         if(i==j){
//             console.log(mat[i][j]);
//         }
//     }
// }
// 16 11 6 1

// let arr = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [8,9,10]
// ];
// let result=[];
// for(let i=0; i<arr[0].length; i++){
//     for(let j=0; j<arr.length; j++){
//         result.push(arr[j][i]);
//     }
// }
// console.log(result);
//[1,4,8,2,5,9,3,6,10]

// let mat = [
//     [1, 2, 3, 4],
//     [4, 5, 6, 7],
//     [8, 9, 10, 11]
// ]

    // for (let i = 0; i < mat.length; i++) {
    //     let result = "";
    //     if (i % 2 == 0) {
    //         for (let j = 0; j < mat[0].length; j++) {
    //             result += mat[i][j] + " ";
    //         }
    //     } else {
    //         for (let j = mat[0].length - 1; j >= 0; j--) {
    //             result += mat[i][j] + " ";
    //         }
    //     }
    //     console.log(result);
    // }
    
// transpose matricx 
// let mat = [
//     [1, 2, 3, 4],
//     [4, 5, 6, 7],
//     [8, 9, 10, 11]
// ]

// let result = [];
// for (let i = 0; i < mat[0].length; i++) {
//     for (let j = 0; j < mat.length; j++) {
//         result.push(mat[j][i]);
//     }
// }
// console.log(result);
// approach 2
// let transpose=[];
// for(let col=0; col<mat[0].length; col++){
//     let temp=[];
//     for(let row=0; row<mat.length; row++){
//         temp.push(mat[row][col]);
//     }
//     transpose.push(temp);
// }
// console.log(transpose);




// print the mat column wise or column wise traversing 
// for(let col=0; col<mat[0].length; col++){
//     for(let row=0; row<mat.length; row++){
//         console.log(mat[row][col]);
//     }
// }


// print the matrics row wise 
// for(let row = 0; row < mat.length; row++){
//     for(let col = 0; col < mat[0].length; col++){
//         console.log(mat[row][col]);
//     }

// }

// let mat = [
//     [11, 82, 3],
//     [4, 65, 6],
//     [8, 9, 10]
// ]
// sum of rows of matrics
// let sum =0;
// for(let row=0; row<mat.length; row++){
// for(let col=0; col<mat[0].length; col++){
//   sum+=mat[row][col];
//   }
//   console.log(sum);
// }

// printing the maximum  element of the matrics 
// let max=-Infinity;
// for(row=0; row<mat.length; row++){
//     for(let col=0; col<mat[0].length; col++){
//       if(mat[row][col]>max){
//         max=mat[row][col];
//       }
//     }
// } 
// console.log("maximum element of the matrics value is",max);

// printing the minimum  element of the matrics 
// let min=Infinity;
// for(row=0; row<mat.length; row++){
//     for(let col=0; col<mat[0].length; col++){
//       if(mat[row][col]<min){
//         min=mat[row][col];
//       }
//     }
// } 
// console.log("minimum element of the matrics value is",min);

// count the even and odd elements in the matrics 
 
// let count =0; 
// for(let i =0; i<mat.length; i++){
//     for(let j=0; j<mat[0].length; j++){
//         if(mat[i][j]%2==0){
//             count++;
//         }
//     }
// }
// console.log("Number of even elements found in matrics are",count);
// count the  odd elements in the matrics 
 
// let count =0; 
// for(let i =0; i<mat.length; i++){
//     for(let j=0; j<mat[0].length; j++){
//         if(mat[i][j]%2==1){
//             count++;
//         }
//     }
// }
// console.log("Number of odd elements found in matrics are",count);

// print the items of the right digonal
// let mat = [
//     [1, 8, 3],
//     [4, 5, 6],
//     [7, 9, 10]
// ]
// for(let row=0; row<mat.length; row++){
//     for(let col=0; col<mat[0].length; col++){
//         if(row+col==mat.length-1){
//           console.log(mat[row][col]);
//         }
//     }
// }

// for(let row=mat.length-1; row>=0; row--){
//     for(let col=0; col<mat[0].length; col++){
//         if(row+col==mat.length-1){
//             console.log(mat[row][col]);
//         }
//     }
// }
// for(let col=0; col<mat[0].length; col++){
//     for(let row=0; row<mat.length; row++){
//         if(row==col){
//             console.log(mat[row][col]);
//         }
//     }
// }
// for(let col=0; col<mat[0].length; col++){
//     for(let row=0; row<mat.length; row++){
//         if(row==col){
//             console.log(mat[row][col]);
//         }
//     }
// }

// let mat = [
//     [15, 20, 33, 54],
//     [41, 53, 68, 77],
//     [81, 93, 10, 11],
//     [94, 50, 12, 44]
// ]
// let transpose =[];
// for(let col=0; col<mat[0].length; col++){
//     let temp=[];
//     for(let row=0; row<mat.length; row++){
//         temp.push(mat[row][col])
//     }
//     transpose.push(temp);
// }
// console.log(transpose);

// boundary matrics
// for(let row = 0; row < mat.length; row++){
//     let result = "";
//     for(let col = 0; col < mat[0].length; col++){
//         if(row == 0 || row == mat.length - 1 || col == 0 || col == mat[0].length - 1){
//             result += mat[row][col] + " ";
//         } else {
//             result += "  ";
//         }
//     }
//     console.log(result);
// }

// let max = [
//     [0, 1, 1, 1],
//     [1, 1, 1, 1],
//     [0, 0, 1, 1],
//     [1, 1, 1, 1],
// ]

    // let maxCount = 0;
    // let ans = -1;

    // for (let i = 0; i < max.length; i++) {
    //     let count = 0;

    //     for (let j = 0; j < max[0].length; j++) {
    //         if (max[i][j] === 1) {
    //             count++;
    //         }
    //     }

    //     if (count > maxCount) {
    //         maxCount = count;
    //         ans = i;
    //     }
    // }
    // console.log(ans);

   
 let mat = [
    [15, 20, 33, 54],
    [41, 53, 68, 77],
    [81, 93, 10, 11],
    [94, 50, 12, 44]
]

//boundary order traversal 
let result = [];
let top = 0;
let bottom = mat.length - 1;
let left = 0;
let right = mat[0].length - 1;

// 1. Top row: left to right
for (let j = left; j <= right; j++) {
  result.push(mat[top][j]);
}

// 2. Right column: top+1 to bottom
for (let i = top + 1; i <= bottom; i++) {
  result.push(mat[i][right]);
}

// 3. Bottom row: right-1 down to left
for (let j = right - 1; j >= left; j--) {
  result.push(mat[bottom][j]);
}

// 4. Left column: bottom-1 up to top+1
for (let i = bottom - 1; i > top; i--) {
  result.push(mat[i][left]);
}

console.log(result.join(" "));


