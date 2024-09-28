/*
************************************* This note for click event **************************************
*************************************     & addEventListener     *************************************
*/



// let myElem = document.getElementById('one');

// myElem.addEventListener('click', function() {
//    let color = myElem.style.backgroundColor;
//    if(color == 'grey') {
//     myElem.style.backgroundColor = 'red';
//    } else {
//     myElem.style.backgroundColor = 'grey';
//    }
// })


// let myElem = document.getElementById('one');

// myElem.addEventListener('click', function() {
//     let color = myElem.style.backgroundColor;
//     if(color == 'grey') {
//         myElem.style.backgroundColor = 'green';
//     } else {
//         myElem.style.backgroundColor = 'grey';
//     }
// })















let myElem = document.getElementById('demo');

myElem.addEventListener('click', function() {
   let color = myElem.style.backgroundColor;
    if (color == 'grey') {
        myElem.style.backgroundColor = 'red';
    } else {
        myElem.style.backgroundColor = 'grey';
    }
    
})

let myInput = document.querySelector('input');
let myButton = document.querySelector('button');

myButton.addEventListener('click', function(e) {
   

  let tag = e.target;

   let inputType = myInput.getAttribute('type');
   
   if (inputType == 'text') {
    myInput.setAttribute('type', 'password');
    // myButton.textContent = 'Show';
    tag.textContent = 'Show';

   } else {
    myInput.setAttribute('type', 'text');
    // myButton.textContent = 'Hide';
    tag.textContent = 'Hide';
   }
 
});

