/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let arr = [];
    let openBrackets = ['(', '{', '['];
    let closingBrackets = [')', '}', ']']
    if(s.length === 1) {
        return false;
    }
    for(var i = 0; i < s.length; i++) {
       if(openBrackets.indexOf(s[i]) !== -1) {
           arr.push(s[i]);
       } else {
          let index = closingBrackets.indexOf(s[i]);
           if(openBrackets.indexOf(arr[arr.length - 1]) !== index) {
               return false;
           } else {
               arr.pop()
           }
       }
    }
    
    if(arr.length > 0) {
        return false;
    }
    return true;
};