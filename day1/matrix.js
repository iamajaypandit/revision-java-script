// printing daigonal matrixs

let mat = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];

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

for(let j=mat[0].length-1; j>=0; j--){
    for(let i=0; i<mat.length; i++){
        if(i==j){
            console.log(mat[i][j]);
        }
    }
}
// 16 11 6 1


