function printArr(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(`${arr[i]} `);
    }
    console.log();
}

function mergeSort(arr, si, ei) {
    if (si >= ei) {
        return;
    }
    let mid = Math.floor(si + (ei - si) / 2);
    mergeSort(arr, si, mid);
    mergeSort(arr, mid + 1, ei);
    merge(arr, si, mid, ei);
}

function merge(arr, si, mid, ei) {
    let temp = [];
    let i = si;
    let j = mid + 1;
    let k = 0;
    while (i <= mid && j <= ei) {
        if (arr[i] < arr[j]) {
            temp[k++] = arr[i++];
        } else {
            temp[k++] = arr[j++];
        }
    }

    // Copy the remaining elements from the left and right subarrays
    while (i <= mid) {
        temp[k++] = arr[i++];
    }
    while (j <= ei) {
        temp[k++] = arr[j++];
    }

    // Copy temp back to the original arr
    for (k = 0, i = si; k < temp.length; k++, i++) {
        arr[i] = temp[k];
    }
}

let arr = [6, 3, 9, 5, 2, 8];
mergeSort(arr, 0, arr.length - 1);
printArr(arr);
