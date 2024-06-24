let price =100;
let product = "product_steve";
let isAvailable = 'true';
const array_of_numbers = [10, 20 ,30 ,40 ,50 ,60];
const car={
    make:"Maserati",
    model:"Diavolo",
    year:2024
};
console.log (price);
console.log (product);
console.log (isAvailable);
console.log (array_of_numbers);
car.year=2020;
console.log (car);
const a= 10;
const b= 10;
console.log (a==b);//checks only values of same datatype
console.log (a===b);//check both the datatype and values.
let str1="Good Morning";
let str2="Welcome to Moringa";
console.log (str1);
console.log (str2);
let result = str1.localeCompare(str2)
console.log (result);
let age =20
if (age <13) { console.log ("child")
    //  block of code to be executed if condition1 is true
  } else if (age>19) {console.log("adult")
    //  block of code to be executed if the condition1 is false and condition2 is true
  } else {console.log("teenager")
    //  block of code to be executed if the condition1 is false and condition2 is false
  }
  let score =60

  if (score < 60) {
    console.log("Grade: F");
} else if (score < 70) {
    console.log("Grade: D");
} else if (score < 80) {
    console.log("Grade: C");
} else if (score < 90) {
    console.log("Grade: B");
} else if (score <= 100) {
    console.log("Grade: A");
} 
let num = 23
if (num>0 && num%2==0){console.log ("The number is positive and even")}
else {console.log ("The number does not meet both conditions")}
let admin
let valid_subscription

function isValid(status){
    if(status=="admin" || status=="valid subscription"){
        console.log("access granted");
    }
    else{
        console.log("Access denied");
    }
}
isValid("admin");

let x;
for(x=1;x<=20;x++){
    if(x%3==0){
        continue;
    }
    console.log(x);
    
}

function day(getDay){
    switch(getDay){
        case 0:
            console.log("Sunday");
            break;
        case 1:
                console.log("Monday");
                break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break; 
        case 4:
             console.log("Thursday");
            break;
        case 5:
             console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
             break; 
             default:
                console.log("Invalid day");
        }
    }
    day(4);

    
    let y=1;
    let sum=0;
    function summation(n){
        while(y<=n){
            sum+=y;
            y++;
        }
        console.log(sum);
    }
    summation(4);
