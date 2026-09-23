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

let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [8,9,10]
];
let result=[];
for(let i=0; i<arr[0].length; i++){
    for(let j=0; j<arr.length; j++){
        result.push(arr[j][i]);
    }
}
console.log(result);
//[1,4,8,2,5,9,3,6,10]

let mat = [
    [1, 2, 3, 4],
    [4, 5, 6, 7],
    [8, 9, 10, 11]
]

    for (let i = 0; i < mat.length; i++) {
        let result = "";
        if (i % 2 == 0) {
            for (let j = 0; j < mat[0].length; j++) {
                result += mat[i][j] + " ";
            }
        } else {
            for (let j = mat[0].length - 1; j >= 0; j--) {
                result += mat[i][j] + " ";
            }
        }
        console.log(result);
    }

