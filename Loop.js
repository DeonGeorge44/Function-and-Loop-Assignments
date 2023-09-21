//Question 1:Create a function and take an input of an array and Print Odd or Even Numbers in a given array

function OddOrEven(arr) {
    const evenNumbers = [];
    const oddNumbers = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenNumbers.push(arr[i]);
        } else {
            oddNumbers.push(arr[i]);
        }
    }
    console.log("Question 1: Even Numbers in array are: ", evenNumbers);
    console.log("Question 1: Odd Numbers in array are: ", oddNumbers);
}

let array = [10, 11, 50, 14];

console.log(OddOrEven(array));

//Question 2:Check whether given number is prime or not. Before that Print 'Starting'

function isPrimeOrNot(number) {
    if (number < 2) {
        return false;
    }

    for (let i = 2; i < Math.sqrt(number); i++) {
        if (number % i === 0) return false;
    }
    return true;
}

//Example
const num = 13;
if (isPrimeOrNot(num)) {
    console.log("Question 2: ", num, " is prime");
} else {
    console.log("Question 2: ", num, " is not prime");
}

//Question 3:Output A factorial of a number using loops

function Factorials(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        let result = 1;

        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }
}
//Example
let num3 = 18;
const result = Factorials(num3);
console.log(`Question 3 :The Factorial Of ${num3} is ${result} `);

// Question 4:Flat this array using loops

function flattenArray(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            result = result.concat(flattenArray(arr[i]));
        } else {
            result.push(arr[i]);
        }
    }

    return result;
}

const nestedArray = [[[1]]];
const flattenedArray = flattenArray(nestedArray);
console.log("Question 4:", flattenedArray);

// Question 5: Print This Array as in given format: input [[Hello]],[[2]],[[[[Everyone]]]].Output- 'Hello 2 Everyone'.
const arr = [[["Hello"]], [[2]], [[[["everyone"]]]]];

const array = arr.flat(Infinity);
const formattedString = array.join("\t");
console.log("Question 5:", formattedString);
