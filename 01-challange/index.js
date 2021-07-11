console.log("Javascript Challange 01")
console.log("Remove duplicate numbers")
const arr1 = [2, 3, 2, 5, 3, 4, 1]
let uniqArr = []
console.log(arr1)

for (let i = 0; i < arr1.length; i++) {
    if (uniqArr.indexOf(arr1[i]) === -1) {
        uniqArr.push(arr1[i])
    }
}

console.log(uniqArr)