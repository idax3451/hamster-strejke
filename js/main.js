
/*
document.querySelector("#headCircle").addEventListener("mouseover", headHighlight);
document.querySelector("#headCircle").addEventListener("mouseout", headUnHighlight);
document.querySelector("#headCircle").addEventListener("click", headInfo);


function headHighlight() {
    console.log("headHighlight");
    document.querySelector("#headCircle").style.fill = #ffffff;
}

function headHighUnlight() {
    console.log("headHighUnlight");
    document.querySelector("#headCircle").style.fill = #000000;
}

function headInfo() {
    console.log("headInfo");
    document.querySelector(".info-text > h2").textContent = "Hovedet !";
document.querySelector(".info-text > article > p").textContent = "lorem ipsum"
}
*/

/*
document.querySelector("btn1").addEventListener("click", investigate);
document.querySelector("btn2").addEventListener("click", investigate2);
document.querySelector("btn3").addEventListener("click", investigate3);

function investigate() {
console.log("btn1");
document.querySelector("btn1").style.backgroundColor = "#f00";
}

function investigate() {
console.log("btn2");
document.querySelector("btn2").style.backgroundColor = "#f00";
}

function investigate() {
console.log("btn3");
document.querySelector("btn3").style.backgroundColor = "#f00";
}

Alternative solution
function investigate (){
console.log(this);
this.style.backgroundColor = "f00";
}
/*

/*
function headHighlight .....

function headHighlight (){
    console.log("headHighlight");
    this.style.fill = "#f00";
}
    /*



   /* Summery kode */

document.querySelector("sum").style.display = "none";

const submit = document.querySelector("submit_btn");
const street = document.querySelector("sumStreet");

submit.addEventListener("click", submitForm);

function submitForm() {
document.querySelector("sum").style.visibility = "visiable";
street.textContent = document.querySelector(#location-street).value;

// select - option
document.querySelector("sumNumber").textContent = document.querySelector("location-number").value;

// radiobuttons
document.querySelector("#sumAntal").textContent = document.querySelector('input[name="strejkehamster"]:checked').value;

// reset knap

document.querySelector("#reset_btn").addEventListener("click", reset);

function reset() {
    document.querySelector("#submit_btn").reset();
    document.querySelector("sum").style.display = "none";
}

   /* circles */
   document.querySelector("hamsterCircle").addEventListener("mouseover", highlight);
   document.querySelector("hamsterCircle").addEventListener("mouseout", unhighlight);

   function highlight() {
    console.log("mouseover");
    document.querySelector("hamsterCircle").style.opacity = 1;
}

function unhighlight() {
    console.log("mouseout");
   document.querySelector("hamsterCircle").style.opacity = 0; 
}

document.querySelector("mikrofonCircle").addEventListener("mouseover", highlight);
document.querySelector("mikrofonCircle").addEventListener("mouseout", unhighlight);

function highlight() {
 console.log("mouseover");
 document.querySelector("mikrofonCircle").style.opacity = 1;
}

function unhighlight() {
 console.log("mouseout");
document.querySelector("mikrofonCircle").style.opacity = 0; 
}

document.querySelector("ministerCircle").addEventListener("mouseover", highlight);
document.querySelector("ministerCircle").addEventListener("mouseout", unhighlight);

function highlight() {
 console.log("mouseover");
 document.querySelector("ministerCircle").style.opacity = 1;
}

function unhighlight() {
 console.log("mouseout");
document.querySelector("ministerCircle").style.opacity = 0; 
}


// range
/* name="politiskhamster" */

// file
/* name="hamsteravatar" */

// text
/* name="name" */
/* name="story" */

// checkboxe - har jeg ikke på mit site
/* const checkboxes = document.querySelectorAll('input[name="behavior"]:checked');
console.log(checkboxes.value);

const myArray = [];

checkboxes.forEach(lavListe);

function lav Liste(element){
myArray.push(element.value);
}

console.log(myArray);
document.querySelector("#sumBehaviour").textContent = myArray.join(", ");
 */



}