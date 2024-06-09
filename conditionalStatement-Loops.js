
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


