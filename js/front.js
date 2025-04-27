/* dialog knap */

//function setupArticle(article) {
//const openBtn = article.querySelector(".read-more");
//const dialog = article.querySelector("dialog");
//const closeBtn = article.querySelector(".close-dialog");
//openBtn.addEventListener("click", openDialog);
//function openDialog() {
//ddialog.showModal();
//}
//closeBtn.addEventListener("click", function () {
//dialog.close();
//});
//}

//document.querySelector("#article-open-btn1").addEventListener("click", openDialog1);
//function openDialog1() {
//document.querySelector(".dialog-1").showModal();
//}

const openBtn = document.querySelector("#article-open-btn1");

openBtn.addEventListener("click", openDialog);

function openDialog() {
  document.querySelector(".dialog-1").showModal();
}

const openBtn2 = document.querySelector("#article-open-btn2");

openBtn2.addEventListener("click", openDialog2);

function openDialog2() {
  document.querySelector(".dialog-2").showModal();
}

const openBtn3 = document.querySelector("#article-open-btn3");

openBtn3.addEventListener("click", openDialog3);

function openDialog3() {
  document.querySelector(".dialog-3").showModal();
}

/* Panorama */

document.querySelector("#pan").classList.add("pan_animation");
document.querySelector("#pan").classList.add("stop");

document.querySelector("#pan").addEventListener("mouseover", startPanorama);
document.querySelector("#pan").addEventListener("mouseout", stopPanorama);

function startPanorama() {
  this.classList.remove("stop");
}
function stopPanorama() {
  this.classList.add("stop");
}
