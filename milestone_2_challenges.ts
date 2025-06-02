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