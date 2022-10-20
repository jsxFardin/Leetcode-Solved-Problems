
var findMedianSortedArrays = function (nums1, nums2) {
    let arr = [...nums1, ...nums2];

    const mid = Math.floor(arr.length / 2),
        nums = [...arr].sort((a, b) => a - b);

    return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
};

let mid = findMedianSortedArrays([1, 2], [3, 4]);
console.log(mid);