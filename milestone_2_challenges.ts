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