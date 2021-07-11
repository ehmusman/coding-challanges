console.log("Javascript Challange 01")
console.log("Sort an Array and remove duplicates")
const numArray = [2, 3, 2, 5, 3, 4, 1]
const uniqArray = uniqArrayFun(numArray)

console.log(uniqArray);

let sortedArray = sortArray(uniqArray)
console.log(sortedArray);

function uniqArrayFun(array) {
    let uniqArr = []
    for (let i = 0; i < array.length; i++) {
        if (uniqArr.indexOf(numArray[i]) === -1) {
            uniqArr.push(numArray[i])
        }
    }
    return uniqArr
}

function sortArray(numArray) {
    for (var i = 0; i < numArray.length - 1; i++) {
        var min = i;
        for (var j = i + 1; j < numArray.length; j++) {
            if (numArray[j] < numArray[min]) {
                min = j;
            }
        }
        if (min != i) {
            var target = numArray[i];
            numArray[i] = numArray[min];
            numArray[min] = target;
        }
    }
    return numArray
}