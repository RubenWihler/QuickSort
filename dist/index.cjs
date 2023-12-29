"use strict";
// Wihler Ruben
// 12.28.2023
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const quicksort_cjs_1 = __importDefault(require("./quicksort.cjs"));
const main = () => {
    while (true) {
        //get the number of elements to sort
        const input = (0, prompt_sync_1.default)()("Enter the numbers of elements to sort or 'exit' to exit the program: ");
        const n = parseInt(input);
        //exit if the input is 'exit'
        if (input === "exit")
            break;
        //exit if the input is not a number
        if (isNaN(n)) {
            console.warn("  -> invalid input");
            continue;
        }
        //generate an array of n random numbers
        const array = Array.from({ length: n }, () => Math.floor(Math.random() * 100));
        //sort the array
        const st = new Date().getTime();
        const sorted = (0, quicksort_cjs_1.default)(array);
        const duration = new Date().getTime() - st;
        //print the result
        console.log(`  -> ${array} => ${sorted} | in ${duration}ms`);
        console.log();
    }
    console.log("exiting...");
};
main();
