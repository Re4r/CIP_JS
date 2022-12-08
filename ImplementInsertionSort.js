function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        
        let j;
        let curr = array[i];
    
        for (j = i - 1; j >= 0 && array[j] > curr; j-- ) {
            array[j + 1] = array[j];
        }
        array[j + 1] = curr;
    }
    return array;
}

console.log(insertionSort([5, 4, 33, 2, 8]));