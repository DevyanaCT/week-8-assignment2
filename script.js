function fizzBuzz() {
    let result = [];
    
    for (let i = 1; i <= 50; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push("FizzBuzz");
        } else if (i % 3 === 0) {
            result.push("Fizz");
        } else if (i % 5 === 0) {
            result.push("Buzz"); 
        } else {
            result.push(i);
        }
    }
    
    return result;
 }
 
 // Test the function
 console.log(fizzBuzz());

 // Starting array of student scores
const studentScores = [85, 93, 78, 92, 88, 76, 95, 89];

// Filter scores above 80
const passingScores = studentScores.filter(score => score >= 80);
console.log("Passing scores:", passingScores);

// Add 5 bonus points to each passing score
const boostedScores = passingScores.map(score => score + 5);
console.log("Boosted scores:", boostedScores);

// Calculate total class score
const totalScore = boostedScores.reduce((sum, score) => sum + score, 0);
console.log("Total class score:", totalScore);

function findMinMax(numbers) {
    // Check if array is empty
    if (numbers.length === 0) {
        return "Array is empty";
    }
    
    // Initialize max and min with first number
    let max = numbers[0];
    let min = numbers[0];
    
    // Loop through array starting from second element
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
        if (numbers[i] < min) {
            min = numbers[i];
        }
    }
    
    return {
        maximum: max,
        minimum: min
    };
 }
 
 // Test cases
 console.log(findMinMax([5, 2, 9, 1, 7, 6, 3]));     // {maximum: 9, minimum: 1}
 console.log(findMinMax([10, 20, 30, 40, 50]));      // {maximum: 50, minimum: 10}
 console.log(findMinMax([-5, -2, -9, -1, -7]));      // {maximum: -1, minimum: -9}
 console.log(findMinMax([100]));                      // {maximum: 100, minimum: 100}
 console.log(findMinMax([]));                         // "Array is empty"