// Challenge 1: Sum of positives
function sumOfPositives(numbers) {
    var sum = 0;
    for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
        var num = numbers_1[_i];
        if (num > 0) {
            sum += num;
        }
    }
    return sum;
}
console.log(sumOfPositives([1, -3, 5, -2, 9, -8]));
// Challenge 2: Maximum value
function findMax(num) {
    var largestNum = num[0];
    for (var i = 1; i < num.length; i++) {
        var currentnum = num[i];
        if (currentnum > largestNum) {
            largestNum = currentnum;
        }
    }
    return largestNum;
}
console.log(findMax([3, 7, 2, 9, 5]));
// Challenge 3:Election winner
function findWinner(arr) {
    var maxVotes = 0;
    var winner = {};
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].votes > maxVotes) {
            maxVotes = arr[i].votes;
            winner = arr[i];
        }
    }
    return winner;
}
var candidates = [
    { name: "Alice", votes: 50 },
    { name: "Bob", votes: 75 },
    { name: "Charlie", votes: 65 }
];
console.log(findWinner(candidates));
// Challenge 4:longest word
function findLongestWord(arr) {
    var longest = "";
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length > longest.length) {
            longest = arr[i];
        }
    }
    return longest;
}
console.log(findLongestWord(["apple", "banana", "pear", "grapefruit"]));
// Challenge 5:count properties
function countProperties(obj) {
    return Object.keys(obj).length;
}
console.log(countProperties({ name: "Alice", age: 25, city: "Paris" }));
// Challenge 6:filter by length
function filterByLength(strings, minLength) {
    return strings.filter(function (str) {
        return str.length >= minLength;
    });
}
console.log(filterByLength(["cat", "giraffe", "hippo", "dog", "elephant"], 5));
// Challenge 7 :Sum of Even Numbers
function sumEvenNumbers(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            sum += arr[i];
        }
    }
    return sum;
}
console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6]));
// Challenge 8 :Difference Between Sum of Even and Odd Numbers
function differenceEvenOdd(numbers) {
    var sumEven = 0;
    var sumOdd = 0;
    numbers.forEach(function (num) {
        if (num % 2 == 0) {
            sumEven += num;
        }
        else {
            sumOdd += num;
        }
    });
    return sumEven - sumOdd;
}
console.log(differenceEvenOdd([1, 2, 3, 4, 5, 6]));
// Challenge 9 :Count Truthy
function countTruthy(obj) {
    var count = 0;
    for (var key in obj) {
        if (obj[key]) {
            count++;
        }
    }
    return count;
}
console.log(countTruthy({ a: 0, b: "hello", c: false, d: 42, e: null }));
// Challenge 10:Average of Numbers
function average(array) {
    if (array.length == 0)
        return 0;
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum / array.length;
}
;
console.log(average([2, 4, 6, 8]));
console.log(average([]));
// Challenge 11:Linear Search
function linearSearch(array, value) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] == value) {
            return i;
        }
    }
    return -1;
}
console.log(linearSearch([5, 3, 7, 1, 4], 7));
console.log(linearSearch([5, 3, 7, 1, 4], 10));
// Challenge 12:Reverse Linear Search
function reverseLinearSearch(array, value) {
    for (var i = array.length - 1; i >= 0; i--) {
        if (array[i] == value) {
            return i;
        }
    }
    return -1;
}
console.log(reverseLinearSearch([5, 3, 7, 1, 4, 7], 7));
console.log(reverseLinearSearch([5, 3, 7, 1, 4], 10));
// Challenge 13:Linear Search All 
function linearSearchAll(arr, value) {
    var indices = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            indices.push(i);
        }
    }
    return indices;
}
console.log(linearSearchAll([5, 3, 7, 1, 4, 7], 7));
console.log(linearSearchAll([5, 3, 7, 1, 4], 10));
// Challenge 14:Count Occurrences
function countOccurences(array) {
    var counts = {};
    array.forEach(function (item) { return counts[item] = (counts[item] || 0) + 1; });
    return counts;
}
// Challenge 15:Remove Duplicates
function removeDuplicates(array) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        var value = array[i];
        if (!newArray.includes(value)) {
            newArray.push(value);
        }
    }
    return newArray;
}
console.log(removeDuplicates([1, 2, 3, 2, 4, 1, 5]));
// Challenge 16:Most Frequent
function mostFrequent(array) {
    var countMap = {};
    var maxCount = 0;
    var mostFrequentValue;
    for (var i = 0; i < array.length; i++) {
        var item = array[i];
        if (countMap[item]) {
            countMap[item]++;
        }
        else {
            countMap[item] = 1;
        }
        if (countMap[item] > maxCount) {
            maxCount = countMap[item];
            mostFrequentValue = item;
        }
    }
    return mostFrequentValue;
}
console.log(mostFrequent([1, 2, 2, 3, 3, 3, 4]));
console.log(mostFrequent(["apple", "banana", "apple", "orange", "banana", "apple"]));
