// function binarySearch(arr, target) {
//     let left = 0;
//     let right = arr.length - 1;
//     while (left <= right) {  
//         let mid = Math.floor((left + right) / 2);
//         if (arr[mid] > target) {
//             right = mid - 1;
//         }
//         else if (arr[mid] < target) {
//             left = mid + 1;
//         }
//         else {
//             return mid;
//         }
//     } 
//     return -1;
// }
// console.log(binarySearch([1, 2, 3, 4, 5], 4));


function BinarySearch(arr,target){
    let left =0; 
    let right =arr.length-1;
    while(left<=right){
        let mid= Math.floor(left+right/2);
        if(arr[mid]>target){
        right = mid-1;
    }
    else if (arr[mid]<target){
      right = mid-1;
    }
    else{
        return mid;
    }
}
return -1;
}
console.log(BinarySearch([1,2,3,4,5,6],3));





const lowerBound = (arr, target) => {
    let ans = -1;
    let l = 0, r = arr.length - 1;

    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        if (arr[mid] >= target) {
            ans = mid;
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    console.log(ans);
}
 lowerBound([2,3,7,10,11,11,25],9);



// 1. Find an Element
const element = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] == target) {
            return mid;
        } else if (arr[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
}
 console.log(element([1, 3, 5, 7, 9, 11],7));





// 2. Check if Element Exists - Return true if the target exists, otherwise false.
const elementExist = (arr, target) => {

    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] == target) {
            return true;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return false;
}

 console.log(elementExist([2, 4, 6, 8, 10],5));





// 3.Find First Occurrence - Given a sorted array with duplicates, find the first index of the target.
const firstOccurrence = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;
    let ans = -1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] == target) {
            ans = mid;
            right = mid - 1;
        } else if (arr[mid] >= target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return ans;
}

 console.log(firstOccurrence([1, 2, 2, 2, 3, 4],2));





// 4. Find Last Occurrence - Find the last index of the target.

const lastOccurrence = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;
    let ans = -1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] == target) {
            ans = mid;
            left = mid + 1;
        } else if (arr[mid] >= target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return ans;
}
// console.log(lastOccurrence([1, 2, 2, 2, 3, 4],2));

// 5. Count Occurrences - Find how many times a target appears in a sorted array.
// arr = [1, 2, 2, 2, 3, 4]
// target = 2

const countOccurences = (arr, target) => {
    return lastOccurrence(arr, target) - firstOccurrence(arr, target) + 1;
}

 console.log(countOccurences([1, 2, 2, 2, 2, 3, 4],2));
