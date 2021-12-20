/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let arr = s.split(' ');
    console.log(arr[arr.length -1])
    while(arr[arr.length -1] === '') {
        arr.pop();
    }
    console.log(arr);
    return arr[arr.length - 1].length
};