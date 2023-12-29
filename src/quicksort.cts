// Wihler Ruben
// 12.28.2023

export default function quickSort(array: number[]) : number[] {
    if (array.length <= 1) return array;

    const pivot = array[0];

    const left  = array.filter((n) => n < pivot);
    const right = array.filter((n) => n > pivot);

    return [...quickSort(left), pivot, ...quickSort(right)]
}