'use strict';

/**
 * @description finding min and max numbers in string
 * @param {String} sourceString source string
 * @return {Number[]} returns array in which the first elem is min numb, the second - max numb
 */

const minmax = (sourceString) => {
    const regexp = /(-?\.?\d+e-?\d+)|(-?\d*\.?\d+)|(-?Infinity)/g;
    if (typeof(sourceString) !== 'string') {
        throw new TypeError('Input is not string');
    }
    const numbsFromStr = sourceString.match(regexp);
    if (!numbsFromStr) {
        return [undefined, undefined];
    }
    return [Math.min(...numbsFromStr), Math.max(...numbsFromStr)];
};
