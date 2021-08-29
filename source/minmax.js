'use strict';

const minmax = function (str) {
    const regexp = /(-?\.?\d+e-?\d+)|(-?\d*\.?\d+)|(-?Infinity)/g;
    let numbsFromStr = str.match(regexp);
    if (numbsFromStr == null)
        return [undefined, undefined]
    for (let i = 0; i < numbsFromStr.length; i++)
        numbsFromStr[i] = -Number(numbsFromStr[i]);
    let result = [];
    result.push(-max(numbsFromStr));
    for (let i = 0; i < numbsFromStr.length; i++)
        numbsFromStr[i] = -numbsFromStr[i];
    result.push(max(numbsFromStr));
    return result;
}
