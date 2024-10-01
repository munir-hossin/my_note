/*
************************************* This note for click event **************************************
*************************************     & addEventListener     *************************************
*/

// let myElem = document.getElementById('demo');
// myElem.addEventListener('click', function() {
//    let color = myElem.style.backgroundColor;
//     if (color == 'grey') {
//         myElem.style.backgroundColor = 'red';
//     } else {
//         myElem.style.backgroundColor = 'grey';
//     }
    
// })



 /*
 ****************** This is for input & btn *******************
 */

// let myInput = document.querySelector('input');
// let myButton = document.querySelector('button');

// myButton.addEventListener('click', function(e) {
   

//   let tag = e.target;

//    let inputType = myInput.getAttribute('type');
   
//    if (inputType == 'text') {
//     myInput.setAttribute('type', 'password');
//     // myButton.textContent = 'Show';
//     tag.textContent = 'Show';

//    } else {
//     myInput.setAttribute('type', 'text');
//     // myButton.textContent = 'Hide';
//     tag.textContent = 'Hide';
//    }
 
// });



/*
******************** How to add & remove a class name from js to html *************************
*/

// let myElem = document.getElementById('demo');

// myElem.addEventListener('click', function() {
//    let className = myElem.classList;
    
//    let checkClassName = className.contains('blue');

// //    if(checkClassName == true) {
// //     myElem.classList.remove('blue');
// //     myElem.classList.add('green');
// //    } else {
// //     myElem.classList.add('blue');
// //     myElem.classList.remove('green');
// //    }
   
//     myElem.classList.toggle('blue');
//     myElem.classList.toggle('green');

// })



/*
(((((((((((((((((((((((((((((((((((((This is anis sirs class)))))))))))))))))))))))))))))))))))))
########################################### For learning jQuery ################################################################
************************************  These are My very important Note**************************************************************
*/


// ******************** How to check connecting fom js to html **************************
// alert('Hi Brother')
// ********************** How to Select an elem from html to js *************************
// **************************** by tagName, .className, id *******************************

// document.querySelector('h1').innerHTML = "Hi";
// $(".my-div h1").text("This is chang");
// $("#p1").html("<b> we are li & we are live in ul</b>")
// $("#p1").append(" we are li & we are live in ul")
// $("#p1").prepend(" we are li & we are live in ul")

// *******************how to crate an element ********************* from jQuery
// ************ & put that elem before or after another element **************

// let myParagraph = $("<p></p>").text("This is a paragraph 0")
// // $("#p1").before(myParagraph);
// // $("#p1").after(myParagraph);
// let myDiv = $("<h1></h1>").text("This is my new div");
// // $("#h1").before(myDiv);
// $("#h1").after(myDiv);

//*************************/ attributes manipulation ************************

// let myAttr = document.querySelector("a").getAttribute("href");
// console.log(myAttr);  // this by row js getting Attribute

// let myAttr = document.querySelector("a").setAttribute("href","https://www.youtube.com/");
//  console.log(myAttr)  // this by row js SetAttribute 
//************************* but jquery like under ***************************//

// $("a").attr("href");
// // $("a").removeAttr("href");
// $("a").attr("href", "https://www.youtube.com/"); //this is SetAttribute 

// ********************* Manipulating CSS *********************************
// ********************* How to add ClassName from style.css to js & How to design from jQuery to style ***********
// $("h1").css("color","red")
// $("h1").css("font-size","3rem")
// $("h1").css("font-style","italic")
// $("h1").css({"color":"green","font-size":"3rem"})  // this is using json file
// document.querySelector('h1').classList.add('style1'); //this is add or remove class by row js
// document.querySelector('.my-p').classList.add('style');//this is add class by row js
// $("h1").addClass("style1")
// $("h1").removeClass("style1")
// $("h1").addClass("style1 style2") //i can use many ClassName together just by spaces

// ******************** How to addEventListener by jQuery *********************
// document.querySelector("button").addEventListener("click", function() {
//     document.querySelector("h1").innerHTML = "you have clicked the button"
// })    // i have done this by row js 

// $("button").click(function() {
//     $("h1").text("you have click the button");
// })

// $("button").click(function() {
//     $("h1").toggleClass("style1"); // this is toggleClass
// })

// $(".myButton").click(function() {
//     var value = this.innerHTML;
//     $("h1").text(value + "is clicked")
// })

// $(".myButton").on("click",function() {    // in can use mouseover instate click
//     var value = this.innerHTML;
//     $("h1").text(value + "is clicked")
// })


//****************************************Log in Button Start *********************************
// $("#loginButton").click(function() {

//     var password1 = $("#pass1").val();
//     var password2 = $("#pass2").val();


//     if(password1 != "" && password2 != "") {
//         if( password1 == password2) {
//             alert("your login successful")
//         } else {
//             alert("your password is wrong")
//         }
//     } else {
//         alert("please Enter password otherwise i will beat you")
//     }

// })
//****************************************Log in Button End *********************************

//**************************************** Animation by jQuery Start  *********************************
// $("#btn").click(function() {

//     // $("#div1").show(2000);
//     // $("#div1").hide(2000).show(2000);
//     // $("#div1").toggle(2000);
//     // $("#div1").fadeOut(2000);
//     // $("#div1").fadeIn(2000);
//     // $("#div1").fadeToggle(2000);
//     // $("#div1").fadeTo(2000, 0.7);
//     // $("#div1").slideUp(2000).slideDown(1000);
//     //  $("#div1").slideToggle();
//     //  $("#div1").animate({opacity:"0.5"},2000);
//     //  $("#div1").animate({
//     //     height:"400px",
//     //     marginLeft:"400",
//     //     width:"500px"},2000);


// })
//**************************************** Animation by jQuery End *********************************






































/*
((((((((((((((((((((((((((((((((((((This is my teachers class note))))))))))))))))))))))))))))))))))))
*/

// **************** Class project-3.5------- How to bring data from server by js Start ************************

// learning_bringData()
// async function learning_bringData() {
   
//    try {
//     // let response = await fetch('https://course.divinecoder.com/food-categories');
//     let response = await fetch('https://api.restful-api.dev/objects');
//     let data = await response.json();
//     document.getElementById('category_list').innerHTML = '';

//     data.forEach(item => {
//         document.getElementById('category_list').innerHTML += `<button class="category_item list-unstyled bg-info p-2 mx-1 border-0">${item.name}</button>`;
//     });
    
//    } catch (error) {
//     console.log(error);
    
//    } 
    
// }

// **************** Class project-3.5------- How to bring data from server by js End **************************
// hello();
// async function hello() {
//     let response = await fetch('https://course.divinecoder.com/food-categories');
//     let data = await response.json();
    
//     console.log(data);
    
// }

// **************** Class project-3.5------- How to bring data from server by jQuery Start **************************

// $(document).ready(function() {
//     $("button").click(function() {
//         $.get("https://api.restful-api.dev/objects", function(callback) {
//             console.log(callback);
            
//         })
//     })
// })

// **************** Class project-3.5------- How to bring data from server by jQuery End **************************

//************************************************** Push &  post request with fetch in javascript Start********************** */

// pushInServer()
// async function pushInServer() {
//     let option = {
       
//         method: "POST",
//         headers: { "Content-type": "application/json" },
//         body: JSON.stringify( {
//             "name": "Apple MacBook Pro 16",
//             "data": {
//                "year": 2019,
//                "price": 1849.99,
//                "CPU model": "Intel Core i9",
//                "Hard disk size": "1 TB"
//             }
//         })
//     }

//     let res = await fetch("https://api.restful-api.dev/objects", option)
//     console.log(res);
    
// }

//************************************************** Push & post request with fetch in javascript End********************** */

//############################################## These are j jQuery methods ##################################
// .show
// .hide
// .toggle
// .slideUp
// .slideDown
// .slideToggle();
// .fadeIn();
// .fadeOut();
// .fadeToggle(); 
// .addClass();
// .removeClass();
// .toggleClass();


// Events;
// .click;

// Getter & setInterval; ##############################
// // .html();
// let myText = $('h1').text();
// let myHtml = $('h1').html(); //this dose not work
// let myVal = $('input').val();
// let myType = $('input').attr('type');

// $('h1').text('this is h1');
// $('h1').html('<h1>what is this</h1>'); //this dose not work
// $('input').val();
// $('input').attr('type', 'password');


// $('.show').click(function() {
//     $('.box').fadeToggle();
// })

// $(".show").on("click", function() {
//     $('.box').fadeToggle();
// })

// $("#myInput").on('focus', function() {
//     $("#myInput").val('This is focus');
// })

// $("#myInput").on('blur', function() {
//     let a = '#myInput'; 
//     $(a).val('This is blur');
// })

// $("#myInput").on('blur', function() {
//     $(this).val('This is blur');
// })


// $("#myInput").on('blur', function() {
//     let value = $('#myInput').val();

//     if(value == '') {
//         $("#myInput").val('This is blur');
//     }
// })

// ****************** input & button Hide & Show *******************************

// $('.my-btn').on('click', function() {
//     let btnText = $(this).text();
//     let inputText = $('input').attr('type');

//     if(inputText == 'password') {
//         $('input').attr('type', 'text');
//         $(this).text('Hide');
//     } else {
//         $('input').attr('type', 'password');
//         $(this).text('Show');
//     }
// })

// *********************** append ..... *********
// $('h1').append('<p>this is pa tag</p>');
// $('h1').prepend('<p>this is pa tag</p>');
// $('h1').after('<p>this is pa tag</p>');
// $('h1').before('<p>this is pa tag</p>');
// $('h1').remove();
// $('h1').empty();

//  jQuery Style ***************************
// $('h1').css('color', 'red')

// $('h1').css({ 
//     color: 'yellow',
//     backgroundColor: 'red',
    
// })

// width();
// height();
// innerWidth();
// innerHeight()

// ********************
// parent();
// parents();
// parentsUntil();


// // ############################ this is a slick slider ################################

// $(document).ready(function() {
//     $('.slider-container').slick({
//         autoplay: true,
//         autoplaySpeed: 2000,
//         arrows: true,
//         slidesToShow: 2,
//         dots: true,
//         prevArrow: '<button type="button" class="slick-prev"><i class="fa-solid fa-chevron-right"></i></button>',
//         nextArrow:'<button type="button" class="slick-next"><i class="fa-solid fa-chevron-left"></i></button>',
//     });
// })

// //  ################################ slick slider End ##############################



// CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC ClassNumber 22 CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC



//************** JavaScript Arrays ***********************/
// const cars = ["Saab", "Volvo", "BMW"];
// const myHome = ["Nine Star"]
// let myCar = ["Nme", "ldo", "Bmw"]
// console.log(myHome);

//*************** This is Hosting in js ************************/
// carName = "Volvo";
// var carName;         // hosting is acceptable in var
// console.log(carName);

// myName = "hello";
// let myName;            // this some wrong * can not read
// console.log(myName);

//*********************  const & let // ************ This is block scope

//############################ JavaScript Arrays ############################

// let arr = ["one", "Two", "Three", "Four", "mango",{
//     icanUse: "many type of thing in an array like number, string, true-false, & more", 
//     myName: "munir",
//     age: 40,
//     class: 11,
// }];
// console.log(arr);
// console.log(arr[4]);
// // document.write(arr);
// document.getElementsByTagName("p").innerHTML = "arr[4]";

// ########################## javaScript object #####################
// const obj = {
//     careName: 'BMW', // you shod write value of object in string like  "hello",
//     model: 500,
//     weight: "1000 kg",
//     start: function () {
//         console.log("car has been Started");      
//     }   
// }
// // console.log(obj.careName);
// console.log(obj.start()); // if yoe wont to value of function from obj you have to call the function in log

// // CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC ClassNumber 23 CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC
// *************************** Array & object *******************************
// let a = document.getElementById("test");
// let b = ["hello", 10, true, 100]
// // console.dir(a);
// console.log(b[1]);

// let student = {
//     firstName: "Munirul",
//     lastName: "Islam",
//     age: 30,
//     section: 3,
//     address: "Dhaka",
//     myArr: ["one", 200, true, undefined, null, "hello"]
// }
// console.log(student.myArr[5]);

// console.log(student.firstName + ' '+ student.lastName);

// // CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC ClassNumber 24 CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC
// ********************************** javascript Operators ************************
// Types of JavaScript Operators
// There are different types of JavaScript operators:
//   ***********************
// Arithmetic Operators
// Assignment Operators
// Comparison Operators
// String Operators
// Logical Operators
// Bitwise Operators
// Ternary Operators
// Type Operators

//################################## Arithmetic Operators ##############################
// let a = 20;
// let b = 4;

// output = a + b;
// output = a - b;
// output = a * b;
// output = a / b;      //  Division
// output = 2 ** 5;     //	Exponentiation (ES2016)
  // power of 2 is five  // this is calculate like this  2*2 =4 *2=8 *2=16 *2=32; total = 32;
// output = 10 % 3;          //Modulus (Remainder)
// output = 100;
// output ++;             //Increment                      
// output --;             //Decrement                 

// console.log(output);

// ******************* JavaScript Assignment **************************
// =	x = y	x = y  (2)+=	x += y	x = x + y       (3)-=	x -= y	x = x - y

// ********************** Logical Assignment Operators ***************************
// let a = 10;
// let b = 10;
// output = a == b && 20 == 20;     //output true
// output = a == b && 20 == 2;     //output false
// output = a == b || 20 == 0;     //output false
// output = a == b || 20 == 20;    //output true   
// output = !false;                // output true
// console.log(output);

// ********************* This a important calculate **************************** 
// let output;
// output = 10 * 10 / 2 + 20 - 5;   // output = 65 /=
// // first divide second= gun third= addition fourth= decrement
// console.log(output);

//#########################  JavaScript if, else, and else if ####################
// ************************ How to ge new data from js **************************

// day = new Date().getDay();
//     let today;
//     if(day == 0) {
//         today = "Sunday";
//     }
//     if(day == 1) {
//         today = "Monday";
//     }
//     if(day == 2) {
//         today = "Tuesday";
//     }
//     if(day == 3) {
//         today = "Wednesday";
//     }
//     if(day == 4) {
//         today = "Thursday";
//     }
//     if(day == 5) {
//         today = "Friday";
//     }
//     if(day == 6) {
//         today = "Saturday";
//     }

// console.log("Today is:",today);

// day = new Date().getDay();
// let today;
// switch (day) {
//     case 0:
//         today = "Sunday";
//         break;
//     case 1:
//         today = "Monday";    
//         break;
//         case 2:
//         today = "Tuesday";
//         break;
//         case 3:
//         today = "Wednesday"; 
//         break;
//         case 4:
//         today = "Thursday";   
//         break;
//         case 5:
//         today = "Friday";  
//         break;
//         case 6:
//         today = "Saturday"; 
//         break;               
//         default:" yoe are a wrong person"
//             break;
// }
// console.log("Today is:",today,"    made by Munir");

//****************************** Primitive vs & Non Primitive vs Class no 24 **************************************/

//****************************** The Conditional (Ternary) Operator Class no 25 **************************************/

// if(a == b ) {
//   console.log("yes");
  
// } else {
//   console.log("no");
// }

// let a = 10;
// let b = 0;
// let newOutput = a == b ? "yes" : "no";
// let newOutput = a == b && "yes";   // Short Circuiting (&& and ||) 
// let newOutput = a == b || "yes";    // if answer right_mile output= true **if not right output = "yes or that word"   
// let newOutput = a == b ?? "yes";  // output = true or false never=value "yes"
// console.log(newOutput);

// ************************* Truthy and Falsy Values **************************

 /*o**************** Truthy values
 1. String;
 2. number;
 3. object;
 4. array;
 5. true;

* o****************  Falsy values
1. false;
2. null;
3. undefined;
4. 0;
5. -0;
6. ''; 
*/

// let newOutput = !null;
// let newOutput = !undefined; //output true
// let newOutput = !394;       //output false
// console.log(newOutput);

// let product = {
//   productName: "mobile",
//   price: 30,
// }

// if(!product.productName ) {
//   console.log("Please check a product first");
  
// } else {
//   console.log("giv me product price now");
  
// }
// ########################### function ##########################
// function test() {
//   console.log("this is from function"); 
// }

// test();

// function test2 () {
//   let a = 20;    //local variable
// }

// test2();

//********************  Passing Arguments ************************ */
// function student(s_name, s_bangla, s_english) {
//   let name = s_name;
//   let bangla = s_bangla;
//   let english = s_english;

//   let total = bangla + english;
//   let output = (total / 2) >= 33 ? name + " is passed" : name + " is failed";

//   console.log(output);
  
// }

// student("Munir", 60, 30)
// student("zaed", 33, 30)

//************************************************* this calculator for practice *********************************************** */

function appendToDisplay(value) {
  document.getElementById('display').value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function calculateResult() {
  const display = document.getElementById('display');
  try {
      display.value = eval(display.value) || '';
  } catch {
      display.value = 'Error';
      setTimeout(clearDisplay, 1500); // Clear after 1.5 seconds
  }
}
//************************************************* this calculator for practice *********************************************** */
