/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let longestString = '';
    let string = '';
    let allPrefix = true;
    for(var i = 0; i < strs[0].length; i++) {
        string += strs[0][i];
        for(var j = 1; j < strs.length; j++) {
            if(strs[j].substring(0, i + 1) !== string) {
                allPrefix = false;
            }
        }
        if(allPrefix) {
            longestString = string;
        }
    }
    return longestString
};