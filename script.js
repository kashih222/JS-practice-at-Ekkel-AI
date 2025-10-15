// #typeof
// console.log(typeof 1);
// console.log(typeof 1.2);
// console.log(typeof true);
// console.log(typeof "kashaf");
// console.log(typeof NaN);
// console.log(typeof null);
// console.log(typeof undefined);





// let colors = ["red","green","blue"];

// colors.shift();
// console.log("shift remove the item from start",colors);

// colors.unshift("yellow");
// console.log("unshift add the item on start",colors);

// colors.push("purple")
// console.log("push add the item on end",colors);

// colors.pop();
// console.log("pop remove the item  from end",colors);



// console.log( "2" +  1);
// console.log( "2" -  1);
// console.log( true +  1);
// console.log( NaN +  5);
// console.log(true + false);



// #ternary Operator
//  let score = 51;
//  let grade = score > 50 ? "Pass" : "Fail";
//  console.log(grade);


//  let str = "42";
//  let num = +str;
//  console.log(num); 



// #Grading Sysytem
// let marks = 10;
// if (marks > 100) {
//     console.log("Invalid marks")
// } else if (marks >= 80) {
//     console.log("A+");
// } else if (marks >= 80) {
//     console.log("A");
// } else if (marks >= 70) {
//     console.log("B");
// } else if (marks >= 60) {
//     console.log("C");
// } else if (marks >= 50) {
//     console.log("D");
// } else if (marks >= 40) {
//     console.log("E");
// } else {
//     console.log("F");
// }



// #grading using switchcse
// let mark =69;
// switch (true) {
//     case mark>=90:
//         console.log("Grade A+");
//         break;
//     case mark>=80:
//         console.log("Grade A");
//         break;
//     case mark>=70:
//         console.log("Grade B");
//         break;
//     case mark>=60:
//         console.log("Grade C");
//         break;
//     case mark>=50:
//         console.log("Grade D");
//         break;
//     case mark>=40:
//         console.log("Grade E");
//         break;
//     default:
//         console.log("F");
//         break;
// }



// #Sum Calculations
// let tshirt = 10;
// let socks = 8;
// let dinnerplate = 80;
// let sum = tshirt + socks + dinnerplate;
// console.log(sum);



//   let soup = 10;
//   let burgers = 8 * 3;
//   let icecream = 5;
//   let sumOfTottalCost = soup + burgers + icecream;
//   console.log(sumOfTottalCost);
// // Now my 2new Friend are here to meet me and place the same order
// let TottalBill = sumOfTottalCost*3;
// console.log(TottalBill);



// let Toaster = 18.50;
// let Shirts = 7.50;
// let sum = Toaster + Shirts;
// console.log("My Totall Bill",sum);

// let tax = sum*0.1
// console.log("with 10% Tax",tax);

// let DoubleTax = sum * 0.2
// console.log("20% Tax =",DoubleTax);



// let myName = "Muhammmad Kashaf";
// let fatherName = "Abdul Ghaffar"
// let myName1 = 'Muhammamd Kashaf';
// let myName2 = `Muhammad Kashaf`;
// console.log("with double Quots",myName);
// console.log("with single Quots",myName1);
// console.log("with backtic Quots",myName2);
// console.log(`Full Name ${myName + " " + fatherName}`);



// let coffee = 5;
// let bagel = 3;
// let sum = coffee + bagel;
// console.log(`total cost: ${sum} `);
// alert(`Total Bill: ${sum}`)



// #Amazone Calculation
// let BasketBall = 20.95*2; //41.9
// let ShippingFee = 4.99*2; //9.98
// let TShirt = 7.99*2; // 15.98
// let sum = BasketBall+ShippingFee+TShirt;
// let TenPercent = sum*0.1;
// let TotalAmount = TenPercent+sum;



// console.log(`Items (4): $${BasketBall+TShirt}`);
// console.log(`Shipping & Handling: $${ShippingFee}`)
// console.log(`Total Before Tax: $${sum}`);
// console.log(`Estemating tax (10%): $${Math.round(TotalAmount)}`);



// // #Grading thriugh function
// function checkgrade(marks) {
//     if (marks >= 90 && marks <=100) {
//       console.log("Grade A+");  
//     }else if (marks >=80 && marks<=89) {
//         console.log("Grade A");
//     }else if (marks >=70 && marks <=79){
//         console.log("Grade B");
//     }else if (marks >=60 && marks <=69){
//         console.log("Grade c");
//     }else if (marks >=50 && marks <=59){
//         console.log("Grade D");
//     }else if (marks >=40 && marks <=49){
//         console.log("Grade E");
//     }else{
//         console.log("Grade F");
//     }
// }
// console.log(checkgrade(100));



// // Write a program to check whether a number is positive, negative, or zero.
// function CheckNumber (number) {
//     if (number > 0) {
//         console.log("Number is Positive");
//     }else if(number < 0){
//         console.log("Number Is Negitive");

//     }else{
//         console.log("Number is zero");
//     }
// }
// console.log(CheckNumber(20));



// // Take a number and check if it is even or odd.
// function CheckEvenOdd(number) {
//     if (number% 2===0) {
//         console.log("Number is Even");
//     }else{
//         console.log("Number id Odd");
//     }
// }
// console.log(CheckEvenOdd(70));



// // Write a program that checks if a person is eligible to vote (age ≥ 18).
// let age = prompt("Enter You Age:")
// if (age >= 18) {
//     console.log("You Can Vote");
// } else {
//     console.log("You are to younger yet");
// }



// // Take two numbers and print the greater one.
// let num1 = prompt("Enter 1st Number :");
// let num2 = prompt("Enter 2nd Number :");

// if (num1 > num2) {
//     console.log(num1 + " is Grater " + num2);
// }else if (num2 > num1){
//     console.log(num2 + " is Greater " + num1);
// }else{
//     console.log("Both Number are equal");
// }



// // #Ternary Operaots
// let num1 = 290;
// let num2 = 133;
// num1 > num2 ? console.log("num1 is greater then num2") : console.log("num2 is greater then num1");



// #print numbers from 1 to 100 a for loop
// for (let i = 0; i < 11; i++) {
//     console.log(i);  
// }



// // #Print  Number from 10 to 1
// let i = 10 
// do {
//     console.log(i);
//     i--
// } while (i>0);



// // # Print even numbers from 1 to 20]
// for (let i = 0; i < 21; i++) {
//     if (i% 2===0) {
//         console.log(i);
//     } 
// }



// // # Print even numbers from 1 to 20]
// for (let i = 0; i < 21; i++) {
//     if (i% 2===1) {
//         console.log(i);
//     } 
// }



// // #Table of 5
// for (let i = 1; i < 11; i++) {
//     console.log("5 *" ,i,"=", i*5 ,);   
// }



// // #find the sum of number from 1 to 100 using a loop
// let sum = 0;
// for (let i = 0; i < 101; i++) {
//     sum += i;   
// }
// console.log(sum);



// // #print all numbers that are divisible by 3 between 1 to 50
// for (let i = 0; i < 51; i++) {
//     if(i% 3===0){
//         console.log(i)
//     }  
// }




// let count = 0
// for (let i = 0; i < 51; i++) {
//     if(i% 2===1){
        
//         count++;
//     }
// }
// console.log(count);




// // #write a function that take two values and return the sum
// function print(a,b) {
//     console.log(a+b);
// }
// print(10,19);





// // #Create a function that takes a name as a parameter and prints “Hello, [name]!”.
// function PrintName(name) {
//     console.log("hello",name);
// }
// PrintName("Muhammad Kashaf");




// // #Write a function to check if a given number is even or odd.
// function checkNumber(num) {
//     if(num% 2===0){
//         console.log("Number is even",num)
//     }else{
//         console.log("Number id odd",num);
//     }
// }
// checkNumber(19);




// // #Create a function that returns the square of a given number.
// function squre(number) {
//     console.log(number**2);
// }
// squre(8);




// // #Write a function that takes three numbers and returns the largest.
// function largest(num1,num2,num3){
//     if (num1>=num2 && num1>=num3) return console.log(num1," is largest");
//     if (num2>=num1 && num2>=num3 ) return console.log(num2," is largest");
//     if (num3>=num2 && num3>=num1) return console.log(num3," is largest");
// }
// largest(100,150,50)




// // #Create an array of 5 numbers and print each number using a for loop.
// let arr = [10,30,25,98,102,3,29]
// arr.forEach(
//     function repeat(val) {
//         console.log(val);
//     }
// )




// // #Find the length of an array
// arr=[4,7,9,1,12,1,11,20]
// console.log(arr.length);




// // #Add a new element to the end and the beginning of an array.
// let arr = [50,40,60,30,70,20,80,13,19,10]
// arr.unshift(1);
// console.log(arr);



// // #Remove the last and first elements from an array.
// let arr = [50,40,60,30,70,20,80,13,19,10];
// arr.shift();
// arr.pop();
// console.log(arr);



// // #Access and print the first and last elements of an array.
// let arr = [50,40,60,30,70,20,80,13,19,10];
// let first = arr[0];
// let last = arr[arr.length -1]
// console.log(first);
// console.log(last);



// // #Check if a specific value exists in an array (use .includes() or a loop).
// let arr = [50,40,60,30,70,20,80,13,19,10];
// console.log(arr.includes((20)));



// // #Reverse an array using .reverse().
// let arr = [50,40,60,30,70,20,80,13,19,10];
// let newarr = arr.reverse();
// console.log(newarr);



// // #Sort an array of numbers in ascending order.
//  let arr = [1 , 8 , 10 , 5 , 3 , 9 , 4 , 7 , 2];
//  arr.sort(function(a,b){
//     return b - a;
//  });
//  console.log(arr);



// // #Join all array elements into a string (use .join()).
// let fruits = ["apple", "bnana", "mango", "cherry" ];
// let result = fruits.join();
// console.log(result);




// // #Convert a string into an array (use .split()).
// let str = "helloWorld"
// let ans = str.split("");
// console.log(ans);
// let rev = ans.reverse();
// console.log(rev);



// // #Find the maximum and minimum numbers in an array (without using Math.max / Math.min).
// let arr=[ 10, 30, 8, 3, 29, 14]
// let max = arr[0];
// let min = arr[0];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i];
//     }
//     if (arr[i] < min) {
//         min = arr[i];
//     }   
// }
// console.log(max,"Maximum Number");
// console.log(min,"Minimum Number");


// // #Print the even number on this array
// let arr = [12, 17, 21, 10, 81, 100];
// function Checker() {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i]% 2==0) {
//             console.log(arr[i]);
//         }
//     }
// }
// Checker();



// // #Calculate the sum of all elements in an array.
// let count = [10, 20,9, 11, 25]
// let newcount = count.forEach(
//     function sum(val) {
//         console.log(val + val);
//         }
// );





// let word = "ili";
// function checkPalindrome() {
//     let myReverseVal = word.toString().split("").reverse().join("");
//     let myStringValue = word.toString();
//     console.log(myStringValue);
//     console.log( myReverseVal);
//     if(myReverseVal == myStringValue){
//         console.log("This Word is palindrome");
//     }else{
//         console.log("This word is not a plaindrome word");
//     }
// }
// checkPalindrome();



// =====================================================================================>
// =====================================================================================>

// // #DOM Manipulation
// let h1 =document.querySelector("h1");
// h1.innerText = "i am changes throgh DOM Manipulation";
// console.dir(h1);

// let p = document.querySelector("p");
// p.innerHTML="<h2>changes lorem to heading 2</h2>";

// let a = document.querySelector("a");
// a.href="https://github.com/kashih222";
// console.dir(a);


// let h3 = document.createElement("h3");
// h3.innerText="Hi am Created by js";
// console.log(h3);
// document.querySelector("body").prepend(h3);


// //h1 already selected above so i cannt redeclared.
// //add a class using js and add styling on this class
// h1.classList.toggle("heading");
// //using this we can remove the class.
// // h1.classList.remove("heading")



// //#Practice Questions on Dom Manipoulation.


// // //#Change text content & Change the style using JS.
// let mesg = document.getElementById("msg");
// mesg.innerText = ("Hello, Dom!");
// mesg.style.color = "red";
// mesg.style.backgroundColor= "pink";



// //#Add a class
// let ptag = document.querySelector("p");
// ptag.classList.add("pera-style");



// // #Create & append element
// let h1 = document.createElement("h1");
// h1.innerText="i am example of append child"
// console.dir(h1);
// document.body.appendChild(h1);



// // #add the class through js on the even nth child item under the ul
// let itemlist = document.querySelectorAll("ul li:nth-child(2n)")
// itemlist.forEach(li => {
//     li.classList.add("highlight")
// })
// console.dir(itemlist);
