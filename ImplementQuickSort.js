function quickSort(array) {

    let lesser = [];
    let equal = [];
    let greater = [];

    if (array.length === 0) {
        return [];
    } else {
        const pivotValue = array[0];

        for (let e of array) {
            if (e < pivotValue) {
                lesser.push(e);
            } else if (e > pivotValue) {
                greater.push(e);
            } else {
                equal.push(e);
            }
            
        }
    }
    return [...quickSort(lesser), ...equal, ...quickSort(greater)];
}

console.log(quickSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]));