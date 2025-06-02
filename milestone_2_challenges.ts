// Challenge 1: Sum of positives
function sumOfPositives(numbers: number[]){
 let sum =0;
 for(let num of numbers){
  if(num>0){
   sum+=num;
  }
 }
 return sum;
}

console.log(sumOfPositives([1, -3, 5, -2, 9, -8]))

// Challenge 2: Maximum value
function findMax(num : number[]){
 let largestNum = num[0];

 for (let i = 1; i < num.length; i++){
   let currentnum = num[i];
   if (currentnum > largestNum){
     largestNum = currentnum;
   }
 }
 return largestNum;
}

console.log(findMax([3, 7, 2, 9, 5]));

// Challenge 3:Election winner

function findWinner(arr : { name: string; votes: number }[]) {
 let maxVotes = 0;
 let winner = {};

 for (let i = 0; i < arr.length; i++) {
   if (arr[i].votes > maxVotes) {
     maxVotes = arr[i].votes;
     winner = arr[i];
   }
 }

 return winner;
}

const candidates = [
 { name: "Alice", votes: 50 },
 { name: "Bob", votes: 75 },
 { name: "Charlie", votes: 65 }
];

console.log(findWinner(candidates));

// Challenge 4:longest word

function findLongestWord(arr:string[]){
 let longest = "";
for (let i= 0; i< arr.length; i++){
 if(arr[i].length > longest.length){
  longest = arr[i];
 }
} 
return longest;
}
console.log(findLongestWord(["apple", "banana", "pear", "grapefruit"]));

// Challenge 5:count properties

function countProperties(obj:{name:string, age: number, city:string}){
 return Object.keys(obj).length;
 }
 
 console.log(countProperties({ name: "Alice", age: 25, city: "Paris" }));

 // Challenge 6:filter by length
function filterByLength(strings: string[], minLength: number){
 return strings.filter(function(str){
  return str.length >= minLength;
 })
}
console.log(filterByLength(["cat", "giraffe", "hippo", "dog", "elephant"], 5));

// Challenge 7 :Sum of Even Numbers

function sumEvenNumbers(arr: number[]){
 let sum=0;

 for (let i=0; i<arr.length; i++){
   if (arr[i]%2 ==0){
     sum+=arr[i];
   }
 }
return sum;
}

console.log (sumEvenNumbers([1, 2, 3, 4, 5, 6]));

// Challenge 8 :Difference Between Sum of Even and Odd Numbers

function differenceEvenOdd(numbers: number[]){
 let sumEven = 0;
 let sumOdd = 0;

 numbers.forEach(function(num){
   if (num%2==0){
     sumEven+=num;
   }else{
     sumOdd+=num;
   }
 });
 return sumEven-sumOdd;
}

console.log(differenceEvenOdd([1, 2, 3, 4, 5, 6]));

// Challenge 9 :Count Truthy

function countTruthy(obj: { [key: string]: any }){
 let count = 0;
 for(let key in obj){
   if (obj[key]){
     count++;
   }
 }
 return count;
}
console.log (countTruthy({ a: 0, b: "hello", c: false, d: 42, e: null }));

// Challenge 10:Average of Numbers

function average(array: number[]){
 if (array.length ==0) return 0;
 let sum =0;

 for (let i=0; i<array.length; i++){
sum+=array[i];

 }
 return sum/array.length;
};

console.log(average([2, 4, 6, 8]));

console.log(average([]));

// Challenge 11:Linear Search

function linearSearch(array: number[], value: number){
 for (let i=0; i< array.length; i++){
  if(array[i]==value){
    return i;
  }
 }
 return -1;
}

console.log(linearSearch([5, 3, 7, 1, 4], 7));
console.log(linearSearch([5, 3, 7, 1, 4], 10));

// Challenge 12:Reverse Linear Search

function reverseLinearSearch(array: number[], value:number){
 for(let i=array.length - 1; i>=0; i--){
   if (array[i] ==value){
     return i;
   }
 }
 return -1;
}

console.log(reverseLinearSearch([5, 3, 7, 1, 4, 7], 7));
console.log(reverseLinearSearch([5, 3, 7, 1, 4], 10));

// Challenge 13:Linear Search All 
function linearSearchAll(arr:number[], value: number) {
 let indices: number[] = [];

 for (let i = 0; i < arr.length; i++) {
   if (arr[i] === value) {
     indices.push(i);
   }
 }

 return indices;
}

console.log(linearSearchAll([5, 3, 7, 1, 4, 7], 7));
console.log(linearSearchAll([5, 3, 7, 1, 4], 10));

// Challenge 14:Count Occurrences

function countOccurences(array: any[]){
 const counts: { [key: string]: number } = {};

 array.forEach(item => counts[item] = (counts[item] || 0) + 1);

 return counts;
}


// Challenge 15:Remove Duplicates

function removeDuplicates(array: any[]){
 const newArray: any[] = [];

 for (let i = 0; i < array.length; i++){
   let value = array[i];
   if (!newArray.includes(value)){
     newArray.push(value);
   }
 }
   return newArray;
 
}

console.log(removeDuplicates([1, 2, 3, 2, 4, 1, 5]));

// Challenge 16:Most Frequent
function mostFrequent(array){
  const countMap = {};
  let maxCount = 0;
  let mostFrequentValue;  

  for (let i = 0; i < array.length; i++){
    let item = array[i];

    if (countMap[item]){
      countMap[item]++;
    }else{
      countMap[item]=1;
    }
    if (countMap[item] > maxCount){
      maxCount=countMap[item];
      mostFrequentValue=item;
    }
  }
  return mostFrequentValue;  
}

console.log(mostFrequent([1, 2, 2, 3, 3, 3, 4]));

console.log(mostFrequent(["apple", "banana", "apple", "orange", "banana", "apple"]));