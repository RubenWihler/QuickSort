// Wihler Ruben
// 12.28.2023

import PromptSync from "prompt-sync";
import quickSort from "./quicksort.cjs";

const main = () => {
    while(true){
        //get the number of elements to sort
        const input = PromptSync()("Enter the numbers of elements to sort or 'exit' to exit the program: ");
        const n = parseInt(input as string);

        //exit if the input is 'exit'
        if(input === "exit") break;

        //exit if the input is not a number
        if(isNaN(n)) {
            console.warn("  -> invalid input");
            continue;
        }

        //generate an array of n random numbers
        const array = Array.from({length: n}, () => Math.floor(Math.random() * 100));

        //sort the array
        const st = new Date().getTime();
        const sorted = quickSort(array);
        const duration = new Date().getTime() - st;

        //print the result
        console.log(`  -> ${array} => ${sorted} | in ${duration}ms`);
        console.log();
    }

    console.log("exiting...");
};

main();