// Wihler Ruben
// 12.28.2023

import quickSort from "./quicksort.cjs";

const test = (toSort : number[], expected : number[]) : boolean => {
    const st = new Date().getTime();
    const sorted = quickSort(toSort);

    const duration = new Date().getTime() - st;
    const result = JSON.stringify(sorted) === JSON.stringify(expected);

    if(result) console.log(`[OK] > ${toSort} => ${sorted} | in ${duration}ms`);
    else console.error(`[ERR] > ${toSort} => ${sorted} | in ${duration}ms`);

    return result;
}

const testCases = [
    test([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]),
    test([5, 4, 3, 2, 1], [1, 2, 3, 4, 5]),
    test([1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9]),
    test([9, 8, 7, 6, 5, 4, 3, 2, 1], [1, 2, 3, 4, 5, 6, 7, 8, 9]),
    test([1, 5, 3, 4, 2, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9]),
    test([9, 5, 7, 6, 8, 4, 3, 2, 1], [1, 2, 3, 4, 5, 6, 7, 8, 9]),
    test([1, 5, 3, 4, 2, 6, 7, 8, 9, 0], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]),
    test([9, 5, 7, 6, 8, 4, 3, 2, 1, 0], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]),
];

const result = testCases.reduce((acc, cur) => acc && cur, true);

if(result) console.log("[OK] > All tests passed!");
else console.error("[ERR] > Some tests failed!");