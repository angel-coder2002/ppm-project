// if statment
/*let username = "Asha";
if(username === 'Asha');{
    console.log("Wecome Asha");
}

let amount = 1500;
if(amount >= 1000){
    console.log("you get a discount");
}

let temperature = 35;
if(temperature >30){
    console.log("it is hot");
}

let balance = 5000;
if(balance >= 1000){
    console.log("you can withdrow money");
}

let marks = 75;
if(marks >= 60){
    console.log("good marks");
}

let age = 20;
if(age >= 18){
    console.log("you can drive");
}

let password = "12345";
if(password === "12345"){
    console.log("Login successful");
}

let order = 600;
if(order >= 500){
    console.log("free delivery");
} */


// if else statement
// let ages = 20;
// if(ages >= 18){
//     console.log("Adult");
// }else{
//     console.log("Minor");
// }

// let num = -5;
// if(num >= 0){
//     console.log("Positive");
// }else{
//     console.log("Negitive");
// }

// let num = 10;
// if(num % 2 == 0){
//     console.log("even");
// }else{
//     console.log("odd");
// }

// let marks = 45;
// if(marks >= 40){
//     console.log("pass");
// }else{
//     console.log("Fail");
// }

// let age = 17;
// if(age >= 18){
//     console.log("Eligible to vote");
// }else{
//     console.log("Not eligible to vote");
// }

// ifelse statement
/* let mark = 30;
if(mark >= 90){
    console.log("grade A");
}else if(mark >= 75){
    console.log("grade B");
}else if(mark >= 65){
    console.log("grade C");
}else if(mark >= 45){
    console.log("garde D");
}else{
    console.log("fail");
}


//swicth statement
let num = "4";
switch (num){
   case "1":
    console.log("this is 1st number");
    breack;

    case "2":
    console.log("this is 2nd number");
    break;

    case "3":
    console.log("this is 3rd number");
    breack;

    default:
    console.log("this is default");
} */
 
// let lowerName="asha";
// console.log(lowerName.toUpperCase());

// let text="asha Dungdung";
// console.log(text.length);

// let email="asha@gmail.com";
// console.log(email.includes("@"));

// let course="i am learning HTML";
// let result = course.replace("HTML","JavaScript");
// console.log(result);

// let number=prompt("Enter numer");
// if(number % 2==0){
//     console.log("even number");
// }else{
//     console.log("odd numer");
// }


// Function practice

// function Biodata(){
//     let name="Asha";
//     age=22;
//     address="Sambalpur";
//     console.log("my name is " + name , age, address);
// }
// Biodata();

// function Avg(){
//     sum = (40,30,20);
//      if(sum / 3)
//     console.log("avrage number " + sum);
// }
// Avg();


// // 1. The Callback Functions (the workers)
// const add = (a, b) => a + b;
// const multiply = (a, b) => a * b;

// // 2. The Higher-Order Function (the manager/abstractor)
// // It accepts an 'operation' function as its third argument
// function calculate(num1, num2, operation) {
//   return operation(num1, num2); 
// }

// // 3. Execution
// console.log(calculate(5, 3, add));       // Output: 8
// console.log(calculate(5, 3, multiply));  // Output: 15



// // The Higher-Order Function
// function createMultiplier(factor) {
//   // It returns a brand new anonymous function
//   return function(number) {
//     return number * factor; // 'factor' is remembered via closure
//   };
// }

// // Generating specific functions
// const double = createMultiplier(2);
// const triple = createMultiplier(3);

// // Execution
// console.log(double(10)); // Output: 20
// console.log(triple(10)); // Output: 30

// const add=(a,b)=> a+b;
// console.log(add(5,6));

// DOBULE NUMBER
// function doubleNumber(n) {
//     return n * 2;
// }

// console.log(doubleNumber(5));

// // RECTANGLE AREA
// function rectangleArea(length, width) {
//     return length * width;
// }

// let area = rectangleArea(10, 5);

// console.log("Rectangle Area =", area);

// // FACTORIAL NUMBER
// function factorial(n) {
//     if (n === 0 || n === 1) {
//         return 1;
//     }

//     return n * factorial(n - 1);
// }

// console.log(factorial(5));

// for(let i= 1; i<=10; i++){
//     console.log(i);
// }

// for(let i= 1; i<=10; i+=2){
//     console.log(i);
// }

// 1. for(let i= 1; i<=10; i++){
//     if( i%2 == 0){
//     console.log(i);
        
//     }

// }

// 3. let sum=0;
// for(let i= 1; i<=5; i++){
//     sum = sum + i;
//     console.log(sum);
// }

//4. for(let i= 1; i<=10; i*=2){
//     console.log(i);
// }

// WHILE LOOP
//  let i = 1;
//      while (i <= 10) {
//        console.log(i);
//        i++;
// }

// //let i = 1;
//  while (i <= 10) {
//      if (i % 2 === 0) {
//         console.log(i);
//       }
//       i++;
// }

// BREAK
// for (let i = 1; i <= 10; i++) {
//   if (i === 6) {
//     break;
//   }

//   console.log(i);
// }

// // CONTINUE
// for (let i = 1; i <= 5; i++) {
//   if (i === 3) {
//     continue;
//   }

//   console.log(i);
// }

// // loop with array
// let char=["A","B","C","D"];
// for(let i=0; i< char.length;i++){
//     console.log(char[i]);
// }

// // FOR OF LOOP
// let chars=["A","B","C","D"];
// for(char of chars){
//     console.log(char);
// }

// // PRODUCTS OBJECTS
// let products=[
//     {
//         name:"laptop",
//         price:3000
//     },

//     {
//         name:"phone",
//         price:2000
//     },

// ]
// for (let product of products){
//     let name=product.name;
//     console.log(name);
// }

// // FOR IN LOOP    
// let Student={
//     name:"ravi",
//     age:20,
//     city:"BBSR"
// }

// for(let key in Student){
//    console.log(key,Student[key])
// }

// H.W
// let numbers = [6,7,8,10,20,15,18];
// for(let i=0; i < numbers.length; i++){
//     if(numbers[i] === 15){
//         console.log("15 is at index",i);
//     }
// }

// // FIND GREATER THAN 8
// let number = [6,7,8,10,20,15,18];
// for(let i=0; i < number.length; i++) {
//     if(number[i] > 8){
//         console.log(number[i]);
//     }
// }

// // COUNT NUMBERS IN AN ARRAY
// let num =  [6,7,8,10,20,15,18];
// let count = 0;
// for(let i=0; i < num.length; i++) {
//     count++;
// }
// console.log(count);

let age_a = 20;
let age_b = 30;
const name = "PPM Infotech";
console.log(`our company name is:  ${name} `);

let sum = age_a + age_b;
console.log("tha age of a & b is:", sum);

