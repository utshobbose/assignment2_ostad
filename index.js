//noTask 1
function calculateDifference(first, second) {
    difference = first - second;
    return difference;
}
console.log(calculateDifference(10, 5)); 

//Task 2
function isOdd(i) {
    if (i % 2!= 0) {
        console.log("It is odd number");
    }
    else {
        console.log("It is even number");
    }
};
isOdd(5);

//Task 3
function findMin(arr) {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    };
    return min;
};
console.log(findMin([1, 2, 3, 4, 5]));

//Task 4
function filterEvenNumbers(numbers) {
    const evenNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evenNumbers.push(numbers[i]);
        }
    }
    return evenNumbers;
}
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));

//Task 5
function sortArrayDescending(num) {
    return num.slice().sort(function(a, b) {
        return b - a;
    });
}
console.log(sortArrayDescending([1, 2, 3, 4, 5, 6]));

//Task 6
function lowerCaseFirstLetter(str){
    return str[0].toLowerCase() + str.substring(1);
}
console.log(lowerCaseFirstLetter("Hello"));


//Task 7
function countVowels(str) {
    const vowels = "aeiouAEIOU";
    let count = 0;
    for (let i=0; i<str.length; i++) {
        if (vowels.indexOf(str[i]) !== -1) {
            count++;
        }
    }
    return count;
}  
console.log(countVowels("Hello, my name is Utshob"));

//Task 8
function findAverage(numbers) {
    let sum = 0;
    
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    return sum / numbers.length;
}
console.log(findAverage([1, 2, 3, 4, 5, 6]));
