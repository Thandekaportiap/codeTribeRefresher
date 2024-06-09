
//Exercise 1: Temperature check
//Temparature check using if else statement
let temparature = 23;

if (temparature < 0){
    console.log("It's freezing");
} else if (temparature <= 15 ){
    console.log("Its cold");
} else if ( temparature <= 25){
    console.log("Its mild");
}else{
    console.log("Its warm");
};

// Temparature check using switch statement
let temperature = 15;

switch (true) {
  case temperature < 0:
    console.log("It's freezing!");
    break;
  case temperature >= 0 && temperature <= 15:
    console.log("It's cold.");
    break;
  case temperature >= 16 && temperature <= 25:
    console.log("It's mild.");
    break;
  default:
    console.log("It's warm.");
    break;
}

//Exercise 2: Divisibility Check
// Divisibility check using if else statement 
 let z = 18;

 if (z % 2 === 0 && z % 3 === 0){
    console.log ("Divisible by both");
 } else if ( z % 2 ===0){
    console.log ("Divisible by 2");
 }else if (z % 3 === 0) {
    console.log("Divisible by 3.");
} else {
    console.log("Not divisible by 2 or 3.");
}
// Division check using switch statement
let division1 = 9;
switch(true){
case division1 % 2 ===0  && division1 %  3 === 0:
    console.log ("Divisible by both");
    break;
    case division1 % 2 === 0:
        console.log ("Divisible by 2");
    break;
    case division1 % 3 === 0:
            console.log("Divisible by 3.");
            break;
        default:
            console.log("Not divisible by 2 or 3.");
            break;
}

// Exercise 3: For loops
for (let i = 1; i <= 10; i++){
    console.log( i)
}

for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

let sumTotal = 0;
for (let i = 1; i <= 100; i++){
   console.log(sumTotal += i);
}

const numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

const numbers1 = [3, 7, 2, 5, 10, 6];
let largestNumber = numbers1[0];
for (let i = 1; i < numbers1.length; i++) {
    if (numbers1[i] > largestNumber) {
        largestNumber = numbers1[i];
    }
}
console.log(largestNumber);