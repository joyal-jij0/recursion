function fibs(n){
    let arr = [0,1];
    for(let i=2; i<n; i++){
        arr.push(arr[i-1] + arr[i-2]);
    }
    return arr;
}

console.log(fibs(8));

function fibsRec(n, arr = []){
    if(n===0){
        return[];
    }
    else if(n === 1){
        arr.push(0)
        return[0];
    }
    else if(n ===2){
        arr.push(0,1)
        return[0,1];
    }
    else{
        let prevFibs = fibsRec(n-1, arr);
        let nextFib = prevFibs[prevFibs.length -1] + prevFibs[prevFibs.length -2];
        arr.push(nextFib);
        return arr;
    }
}

console.log(fibsRec(8));