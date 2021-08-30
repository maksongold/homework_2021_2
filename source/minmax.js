'use strict';

/**
 * @description finding min and max numbers in string
 * @param {String} str source string
 * @return {Array} returns array in which the first elem is min numb, the second - max numb
 */

const minmax = str => {
    if (typeof(str) != "string")
        return [undefined, undefined];
    const regexp = /(-?\.?\d+e-?\d+)|(-?\d*\.?\d+)|(-?Infinity)/g;
    const numbsFromStr = str.match(regexp);
    if (numbsFromStr == null)
        return [undefined, undefined];
    return [Math.min(...numbsFromStr), Math.max(...numbsFromStr)];
};
