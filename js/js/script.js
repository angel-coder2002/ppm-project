/*console.log("asha");
console.log("20")

let a=3;
let b=4;
let sum=a+b;
let sub=a-b;
let mul=a*b;
let div=a/b;
console.log("this is sum:",sum);
console.log("this is sub:",sub);
console.log("this is mul:",mul);
console.log("this is div:",div);

let price=200;
let quantity=3;
let discount=50;

let totalCost=price*quantity-discount;
console.log("calculate total cost:",totalCost);
console.log("thank you for your purchase");


let x="a";
let y="A";
let z=x>y;
console.log(z);
*/

/*
let year ="jan";
switch(year){
   case"jan":
   console.log("this is 1st month");
   break;
   case"feb":
   console.log("this is 2nd month");
   break;
   case"dec":
   console.log("this is last month");
   break;
   default:
    console.log("no month");
   
}

let age = 55;
let isMember = false;

if(isMember && (age<12 || age>65)){
    console.log("Free Entry");
}else if(isMember && (age<12 || age>65) ){
    console.log(" 20% Discount");
}else{
    console.log("full price");
} */

// let input = 0;
// let status;
// if(!input){
//     status = "invalid input";
// }else{
//     status = "valid input";
// }
// console.log(status);


// const user = { profile: { age:50} };
// const guest = null;

// const status1 = user?.profile?.age <=18 ? "Adult" : "Minor";
// console.log(status1);

// const status2 = guest?.profile?.age >=18 ? "Adult" : "Minor";
// console.log(status2);


// const name = "";
// const defaultName = "4";

// console.log(name || defaultName);
// console.log(name && defaultName);

// let score = 8;
// score ||= 10; 
// console.log(score);

// // logical operater
// const x = 5;
// const y = "5";

// console.log(x == y && x !== y);
// console.log(x === y || x == y);
// console.log(!(x <= 5));


// ====== LOOPS ========
// for(let i=1; i<=5; i++){
//     console.log(i);
// }

// WHILE LOOP
// while(condition){
//     //code
// }

// let i=1;
// while(i <=5){
//     console.log(i);
//     i++;
// }

// // BREAK
// for(let i=1; i<=5; i++){
//     if(i == 3) {
//         break;
//     }
//     console.log(i);
// }

// // CONTINUE
// for(let i = 1; i<=5; i++){
//     if(i == 3) {
//         continue;
//     }
//     console.log(i);
// }

// // DO WHILE LOOP
// let i= 1;
// do{
//     console.log(i);
//     i++;
// }while(i<=5);

// // LOOP WITH ARRAY
// let char = ["a","b","c","d"];
// for(let i=0;i<char.length;i++){
//     console.log(char[i]);
// } 

// // FOR OF 

// let chars = ["a","b","c","d"];
// for(char of chars){
//     console.log(char);
// } 

// // FOR IN
// let student ={
//     name:"ravi",
//     age:22,
//     city:"bbsr"
// }
// for(let key in student){
//     // console.log(key,student[key]);
//     console.log(key);
// }


// ==== METHODE ===
//  const calculator ={
//     add:function(a,b){
//     return a+b;
//     },

//     sub:function(a,b){
//     return a-b;
//     },

//     mul:function(a,b){
//     return a*b;
//     },

//     mod:function(a,b){
//     return a%b;
//     }
// }

// // console.log(function,calculator.add(4,2));
// console.log(calculator);


// ===== THIS KEY WORD =====
// const student ={
//     name:"Rahul",
//     age:20,

//     show : function() {
//         console.log(this.name);
//         console.log(this.age);
//     }
// };
// student.show();

// const d = new Date("2004-04-15");
// console.log(d.getdate);


// /====== SETINTERVAL ========

// const intervalId = setInterval(()=>{
//     console.log("this message appers every 2-second");
// },2000);
// setTimeout(()=>{
//     clearInterval("interval has been cleard after the 10 second");
// },1000);


// let count = 1;

// let number = setInterval(() =>{
//     console.log(count);
//     count ++ ;

//     if(count > 10){
//         clearInterval(number);
//     }
// },2000);

// const student =[
//     {
//         name: "aman",
//         mark:40,
    
//     },

//     {
//         name:"rani",
//         mark:50,
//     }
// ]
// student.forEach((element ,index) => {
//     console.log(`${element.name}:${element.mark}`);
// });

// === MAP METHOD ===
// let name = ["ram","syam","gita","sita","mita"];
// let upperName = name.map(function(name){
//     return name.toUpperCase();
// });

// console.log(upperName);

// === FILTER() ===
// 1. let number =[1,2,3,4,5];
// let even= number.filter((e) =>{
//     return e % 2 === 0;
// });
// console.log(even);

/*
2. const fruits =["Apple","Banana","Mango","Avocado"];
let f = fruits.filter((element) => {
    return element.startsWith("A");
});
console.log(f); 

3.
let number =[1,2,3,4,5];
let even= number.filter((e) =>{ 
    return e % 2 !== 0;
});
console.log(even);

4.
// let ages = [12, 18, 25, 16, 30, 15, 22];

// let result = ages.filter(age => {
//     return age >= 18;
// });

// console.log(result); */

/* 5.
let names = ["Asha", "Priya", "Ram", "Rahul", "Riya"];

let res = names.filter(name => name.length > 4);

console.log(res);


let numbers = [10, 12, 15, 22, 25, 31, 40];

let result = numbers.filter(num => {
    return num % 5 == 0 ;
});

console.log(result); 
*/


// === 12-10-26 ===
// map method
// let names = ["asha", "priya", "riya"];

// let result = names.map(function(names) {
//     return names.toUpperCase();
// });

// console.log(result);

/*
// PRACTICE
// VARIABLE 1.
let name = "ppm";
console.log(name);

// const
const names ="ppm infotech";
console.log(`company name is: ${names}`);

// VAR
var sname="asha";
var age =22;
console.log(sname);
console.log(age);

// DATA TYPES
// 1.NUMBER
let sage=22;
console.log(sage);

// 2.BOOLEAN(return true /false)
let a = 5;
let b = 10;
console.log(a>b);
console.log(a<b);

// 3.STRING
let Sname="asha";
let city="Sambalpur";
console.log(Sname);
console.log(city);

// STRING CONCATENATION
let firstName="Asha";
let lastName="Dungdung";
console.log(firstName + " " + lastName);

// 4.UNDEFIND(Variable declare but no value)
let myAge;
console.log(myAge);
console.log("typeof myAge");

// 5.NULL(Internally empty / no value)
let Age=null;
console.log(Age);

// 6.BIGINT(store very large whole number)/ n at the bigint literal
let c= 10n;
let d= 20n;
console.log(c+d);

// OPERATOR
let e=3;
let f=4;
let sum=e+f;
let sub=e-f;
let mul=e*f;
let div=e/f;
console.log("this is sum:",sum);
console.log("this is sub:",sub);
console.log("this is mul:",mul);
console.log("this is div:",div);

// 2
let price=500;
let quantity=3;
let discount=50;

let totalCost=price*quantity-discount;
console.log("calculate total cost:",totalCost);
console.log("thank you for your purchase");


// CONDITIONAL STATEMENT
let amount = 1500;
if(amount >= 1000){
    console.log("you get a discount");
}

// 2
let temperature = 35;
if(temperature >30){
    console.log("it is hot");
}

// 3
let balance = 5000;
if(balance >= 1000){
    console.log("you can withdrow money");
}

// 4
let mark =75;

if(mark >= 90){
    console.log("grade A");
}else if(mark >=80){
    console.log("grade B");
}else if(mark >=60){
    console.log("grade C");
}else{
    console.log("grade D");
}

// 5
let num = 20;

if(num > 10){
    console.log("Greater");
}else{
    console.log("Smaller");
}

// 6
let nage=17;
let hieght = 5;
let weight = 45;

if(nage >= 18){
    console.log("Eligible for nage");
}else if(hieght >=5.4){
    console.log("eleigible for hieght");
}else if(weight >=45){
    console.log("eligible for weight");
}else if(nage < 18){
    console.log(" not eligible for nage");
}else if(hieght < 5.4){
    console.log(" Not eligible for hieght");
}else if(weight < 45){
    console.log(" Not eligible for weight");
}else{
    console.log("Sorry you are not eligible");
}

// Switch Statement
let day = 2;

switch (day) {
    case 1:
    console.log("monday");
    break;

    case 2:
    console.log("tuesday");
    break;

    case 3:
    console.log("friday");
    break;

    default:
    console.log("invalid");
}

// FOR LOOP
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// 2
for (let i = 2; i <= 10; i += 2) {
    console.log(i);
}

// 3
for (let i = 1; i <= 3; i++) {
    console.log(i * 5);
} */


/*
// === 13-10-26 ===
for(let i=0; i<=3;i++){
    console.log(i*4);
}


for (let i = 1; i <= 5; i++) {
    let pattern = " ";

    for (let j = 1; j <= i; j++) {
        pattern += " * ";
    }

    console.log(pattern);
}

for (let i = 1; i <= 4; i++) {
    let pattern = " ";
    for (let j = 1; j <= i; j++) {
        pattern += j;
    }
    console.log(pattern);
}

for(let i =1; i<=4; i++){
    let parttern =" ";
    for(let j = 4; j >= i; j--){
       parttern += " * ";
    }
    console.log(parttern);
} 

for (let i = 1; i <= 4; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
        pattern += i;
    }
    console.log(pattern);
}

let number = [10,25,30,45,60]
let result = number.filter(num => {
    return num > 30;
} );
console.log(result);


let a = 10;
let b = 20;

let temp = a;
a = b;
b = temp;

console.log(a);
console.log(b);
*/

let [a = 10, b = 20] = [5];

console.log(a);
console.log(b);


let [c = 10, d = 20] = [100, 200];

console.log(c);
console.log(d);