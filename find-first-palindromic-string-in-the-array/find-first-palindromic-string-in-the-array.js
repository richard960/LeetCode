/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    for(var i = 0; i < words.length; i++) {
        let string = words[i];
        if(words[i] === string.split('').reverse().join('')) {
            return words[i];
        }
    }
    return ''
};