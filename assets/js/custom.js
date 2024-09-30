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


