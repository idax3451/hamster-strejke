/* Summery kode */

// document.querySelector("sum").style.display = "none";

const submit = document.querySelector("#submit_btn");
const street = document.querySelector("#sumStreet");

submit.addEventListener("click", submitForm);

function submitForm() {
  //   document.querySelector("#sum").style.visibility = "visiable";
  street.textContent = document.querySelector("#location-street").value;

  // select - option
  document.querySelector("#sumNumber").textContent = document.querySelector("location-number").value;

  // radiobuttons
  document.querySelector("#sumAntal").textContent = document.querySelector('input[name="strejkehamster"]:checked').value;
}
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

/* dialog */

// Version 2: with 3 sets of functions to make 3 breaking news work
// **********************************************
// const openBtn1 = document.querySelector(".news_card:first-of-type .read-more");
// const closeBtn1 = document.querySelector(".news_card:first-of-type dialog button");
// const dialog1 = document.querySelector(".news_card:first-of-type dialog");
// openBtn1.addEventListener("click", openDialog1);
// closeBtn1.addEventListener("click", closeDialog1);

// function openDialog1() {
// dialog1.showModal();
// }
// function closeDialog1() {
// dialog1.close();
// }

// const openBtn2 = document.querySelector(".news_card:nth-child(2) .read-more");
// const closeBtn2 = document.querySelector(".news_card:nth-child(2) dialog button");
// const dialog2 = document.querySelector(".news_card:nth-child(2) dialog");
// openBtn2.addEventListener("click", openDialog2);
// closeBtn2.addEventListener("click", closeDialog2);

// function closeDialog(dialog) {
// dialog.close();
// function openDialog2() {
// dialog2.showModal();
// }
// function closeDialog2() {
// dialog2.close();
// }
// }
// const openBtn3 = document.querySelector(".news_card:nth-child(3) .read-more");
// const closeBtn3 = document.querySelector(".news_card:nth-child(3) dialog button");
// const dialog3 = document.querySelector(".news_card:nth-child(3) dialog");
// openBtn3.addEventListener("click", openDialog3);
// closeBtn3.addEventListener("click", closeDialog3);

// function setupArticle(article) {
// const openBtn = article.querySelector(".read-more");
// const dialog = article.querySelector("dialog");
// const closeBtn = dialog.querySelector(".close-dialog");

// function openDialog3() {
//  dialog3.showModal();
//  }

//  function closeDialog3() {
//    dialog3.close();
//  }
// }
// **********************************************

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
