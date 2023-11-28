function difference(arr1, arr2) {
    // Combine both arrays
    const joinedArray = arr1.concat(arr2);

    //filtering only elements that occured once
    //keywords
    const unique = joinedArray.filter((element, index, array) => array.indexOf(element) === index);

    return unique;
}


console.log(difference([1, 2, 3], [100, 2, 1, 10])); 
