// // Merge Sort
// const merge = (arr, st, mid, ed) => {
//     let temp = [];
//     let i = st, j = mid + 1;

//     //Left & Right Half
//     while (i <= mid && j <= ed) {
//         if (arr[i] <= arr[j]) {
//             temp.push(arr[i]);
//             i++;
//         } else {
//             temp.push(arr[j]);
//             j++;
//         }
//     }
//     //Left Half
//     while (i <= mid) {
//         temp.push(arr[i]);
//         i++;  
//     }
//     //Right Half
//     while (j <= ed) {
//         temp.push(arr[j]);
//         j++;
//     }

//     for (let idx = 0; idx < temp.length; idx++) {
//         arr[st + idx] = temp[idx];
//     }
// }

// const mergeSort = (arr, st, ed) => {
//     if (st >= ed){
//         return;
//     } 

//     let mid = Math.floor((st + ed) / 2);
//     mergeSort(arr, st, mid);  //left
//     mergeSort(arr, mid + 1, ed); //right

//     merge(arr, st, mid, ed);
// }

// let arr = [5,7,2,8,1];
// mergeSort(arr, 0, arr.length - 1);
// console.log(arr);

// Quick Sorting 
let arr = [5, 4, 6, 7, 1, 2];
function partitionIndex(arr, st, ed) {
    let pivot = arr[ed];
    let i = st - 1;
    for (let j = st; j < ed; j++) {
        if (arr[j] <= pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    [arr[i + 1], arr[ed]] = [arr[ed], arr[i + 1]];

    return i + 1;
}
function quickSort(arr, st, ed) {
    if (st >= ed) return;

    let index = partitionIndex(arr, st, ed);

    quickSort(arr, st, index - 1);
    quickSort(arr, index + 1, ed);
}
quickSort(arr, 0, arr.length - 1);
console.log(arr);