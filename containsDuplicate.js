var containsDuplicate = function (nums) {
    let tempArr = [];
    for (let num of nums) {
        if (tempArr.includes(num)) {
            return true;
        }
        tempArr.push(num);
    }
    return false;
};

let output = containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]);
console.log(output);