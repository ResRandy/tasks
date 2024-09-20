/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    let fin: number[] = [numbers[0], numbers[numbers.length - 1]];
    return numbers.length < 1 ? [] : fin;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    let fin: number[] = numbers.map((numbers: number): number => numbers * 3);
    return fin;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    let fin: number[] = numbers.map(Number);
    return fin.map((value) => (isNaN(value) ? 0 : value));
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    let cut: string[] = amounts.map((amounts: string): string =>
        amounts.replace("$", ""),
    );
    let fin: number[] = cut.map(Number);
    return fin.map((value) => (isNaN(value) ? 0 : value));
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    let hans: string[] = messages.filter(
        (message: string): boolean => !message.includes("?"),
    );
    let ans: string[] = hans.map((hans: string): string =>
        hans.includes("!") ? hans.toUpperCase() : hans,
    );
    return ans;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    let ans: string[] = words.filter((words: string) => words.length < 4);
    return ans.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const RGB: string[] = ["red", "green", "blue"];
    let ans: string[] = colors.filter((col) => !RGB.includes(col));

    return ans.length == 0 ? true : false;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0) {
        return "0=0";
    }
    let ans = addends.map((addend: number): string => addend.toString());
    let sum: number =
        addends.length < 1 ?
            0
        :   addends.reduce(
                (currentTotal: number, num: number) => currentTotal + num,
                0,
            );
    let summary: string =
        sum.toString() + "=" + ans.toString().replaceAll(",", "+");
    return summary;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    let sum: number = values.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0,
    );
    let ans: number[] = [...values];
    let boo: boolean = values.every((num: number) => num >= 0);
    if (boo) {
        ans = [...values, sum];
    } else {
        ans = ans.splice(ans.findIndex((num: number) => num < 0) + 1, 0, sum);
    }
    return ans;
}
