'use strict';

const minmax = str => {
    if (typeof(str) != "string")
        return [undefined, undefined];
    const regexp = /(-?\.?\d+e-?\d+)|(-?\d*\.?\d+)|(-?Infinity)/g;
    const numbsFromStr = str.match(regexp);
    if (numbsFromStr == null)
        return [undefined, undefined];
    return [Math.min(...numbsFromStr), Math.max(...numbsFromStr)];
};
