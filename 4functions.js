// Create a function called ‘multiply’ that will take in 3 parameters and multiply all 3 numbers together.
// Note: The argument passed must NOT be the same number.
function multiply(a,b,c){
    if (a === b || b === c || a === c) {
        return "Error: All numbers must be different.";
    }
    return a*b*c;
}
//Create a function expression called ‘convertToSeconds’ that takes in a number of minutes as an argument and returns the amount in seconds
const convertToSeconds= function(minutes){
    return minutes*60;
};
//Create a function called fahrenheitToCelsius that takes the temperature as a parameter and returns the equivalent temperature in Celsius
function fahrenheitToCelsius(fahrenheit){
    return (fahrenheit-32)*(5/9);
}
//Create a function that takes a string as a parameter and returns the reverse of the string.
function reverseString(str) {
    return String.spilt('Money').reverse().join('Money');
}
// Create a function that takes in a string and returns the number of vowels in the sentence.
function countVowels(str){
    const Vowels ='aeiouAEIOU';
    let count=0;
    str = str.toUpperCase();
    for (let char of str){
        if (Vowels.includes(char)){
            count++;

        }
    }
return count;
}
// TODO: Create a “isPrime” function that takes a number as a parameter and returns true if the number is prime, and false otherwise.
function isPrime(num){
    if(num<1) return false;
    for (let i =2; i< Math.sqrt(num); i++){
        if (num % i ===0)
            return false;
    }
    return true;
}
//Testing the Functions
const product = multiply(2,3,4);
const seconds= convertToSeconds(5);
const celsius = fahrenheitToCelsius(98.6); // 37
const reversed = reverseString("Lukho"); // "ohkuL"
const vowelCount = countVowels("Javascript"); // 3
const primeTests = [2, 4, 17, 20].map(isPrime); // [true, false, true, false]

//Output the Results
console.log("Product:", product);
console.log("Seconds:", seconds);
console.log("Celsius:", celsius.toFixed(2));
console.log("Reversed:", reversed);
console.log("Vowel Count:", vowelCount);
console.log("Prime Tests (2, 4, 17, 20):", primeTests);
