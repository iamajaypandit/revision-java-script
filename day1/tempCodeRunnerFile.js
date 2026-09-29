for(let j=0; j<mat[0].length; j++){
    for(let i=mat.length-1; i>=0; i--){
         if(i+j==mat.length-1)
            console.log(mat[j][i]);
    }
}