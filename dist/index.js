"use strict";
function formatString(input, toUppier) {
    if (toUppier == true) {
        const res = input.toUpperCase();
        return res;
    }
    else {
        return input;
    }
}
const result = formatString('mehedi', true);
console.log(result);
