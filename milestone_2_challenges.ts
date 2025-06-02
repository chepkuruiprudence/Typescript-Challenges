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
