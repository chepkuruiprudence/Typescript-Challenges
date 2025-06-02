// Challenge 1: Sum of two numbers
function addition(a : number, b : number){
 console.log(a+b);
}
addition(5,3)
addition(-5,9)

//Challenge2: Convert Minutes into seconds
function convert(minutes: number){
 console.log(minutes*60)
}
convert(5);
convert(2);

// Challenge 3: calculate perimeter of a rectangle

function findPerimeter(l : number,w : number) {
 console.log(2*(l+w));
}
findPerimeter(8,7);
findPerimeter(5,8);

// Challenge 4: check negative
function isNegative(num: number){
 if (num < 0){
   console.log("Negative");
 } else {
   console.log("positive")
 }
}

isNegative(3);
isNegative(-8);

// Challenge 5:can i drive
function canDrive(name: string, age :number){
 var age = 18;
 if (age >=18){
   console.log(name + "is old enough to drive");
   } else {
     console.log(name + "is not old enough to drive")
   }
}

canDrive("John", 22)
canDrive("Jane", 12);

// Challenge 6:Largest Number
function findLargest(a : number, b : number, c : number){
 if (a > b && a > c){
   console.log(a);
 } else if (b > a && b > c){
   console.log(b);
 } else {
   console.log(c);
 }
}

findLargest(5,7,9)
findLargest(10, 10, 10)

// Challenge 7: calculate BMI weight
function calculateBMI(weight : number,height : number){
  const BMI = weight / (height * height)
 if  (BMI < 18.5){
  console.log("Underweight")
 } else if (BMI >= 18.5 && BMI<=24.9){
   console.log("Normal weight")
  } else if (BMI>=25 && BMI<=29.9){
   console.log("Overweight")
  }else if(BMI>=30){
   console.log("Obese")
  }
}

calculateBMI(68, 1.75);
calculateBMI(85, 1.8);

// Challenge 8: Greeting based on time
function greetUser(name : string, hour : number){
 if (hour>5 && hour<11){
  console.log("Good morning," + name)
 } else if(hour>12 && hour<17){
  console.log("Good afternoon," + name)
 }else if(hour>18 && hour<21){
  console.log("Good evening," + name)
 }else{
  console.log("Good night, " + name)
 }
}

greetUser("Prudence", 11)
greetUser("Prudence", 14)
greetUser("Prudence", 19)
greetUser("Prudence", 23)

// Challenge 9: fizzbuzz
function fizzBuzzCheck(number : number){
 if (number % 3 ==0 && number % 5 ==0){
  console.log("FizzBuzz");
 } else if (number % 3 == 0){
   console.log("Fizz");
  } else if(number % 5 ==0){
   console.log("Buzz");
  }else{
   console.log(number);
  }
}

fizzBuzzCheck(3); 

fizzBuzzCheck(10); 

fizzBuzzCheck(15); 

fizzBuzzCheck(7);

// Challenge 10: perimeter 2
function perimeterTwo(l : string, num : number) {
 if (l == "s") {
   return 4 * num;
 } else if (l == "c") {
   return 6.28 * num;
 } else {
   return "Invalid shape";
 }
}

console.log(perimeterTwo("s", 7)); 
console.log(perimeterTwo("c", 4));

// Challenge 11: Sum of even numbers
function sumEvenNumber(n : number) : void{
 let sum =0;
 for (let i=1; i <= n; i++){
  if (i%2 == 0){
   sum+=i
 }
}
console.log(sum);
}

sumEvenNumber(6); 
sumEvenNumber(10);
sumEvenNumber(5);

// Challenge 12: Multiply by itself
function powerUp(num : number, times : number): number{
 let result=1;
 for ( let i=0; i<times; i++){
  result *=num;
 }
 return result;
}

console.log(powerUp(2, 3)); 
console.log(powerUp(5, 0));
console.log(powerUp(3, 4)); 
console.log(powerUp(0, 0));


// Challenge 13: Factorial
function factorial(n : number): number{
if(n == 0 ){
 return 1;
}else{
 return factorial(n-1)*n
}
}
console.log(factorial(1));
console.log(factorial(4));
console.log(factorial(6));

// Challenge 14: multiple sum
function sumMultiples(n : number, divisor : number){
 let sum = 0;

 for ( let i=1; i<=n; i++){
  if (i % divisor==0){
   if (i % divisor == 0)
    sum+=i;
  }
 }
 return sum;
}

console.log(sumMultiples(10, 2)); 
console.log(sumMultiples(15, 3)); 
console.log(sumMultiples(7, 5));

// Challenge 15: Sum of digits
function sumDigits(num : number): number{
 let sum = 0;
 
 while (num > 0) {
   let digit = num % 10;
   sum += digit;
   num = Math.trunc(num / 10);
 }
 
 return sum;
}

console.log(sumDigits(173))

