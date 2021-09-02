'use strict';

/**
 * @description finding min and max numbers in string
 * @param {String} str source string
 * @return {Array} returns array in which the first elem is min numb, the second - max numb
 */

const minmax = (str) => {
    const regexp = /(-?\.?\d+e-?\d+)|(-?\d*\.?\d+)|(-?Infinity)/g;
    try {
        const numbsFromStr = str.match(regexp);
        if (!numbsFromStr) {
            return [undefined, undefined];
        }
        return [Math.min(...numbsFromStr), Math.max(...numbsFromStr)];
    } catch (e) {
        throw new Error('Incorrect input');
    }
};
