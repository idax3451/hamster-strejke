/* løsning 2 */
//const switchtext2 = document.querySelector("#switchtext2");
//const switchSelect2 = document.querySelector("#switchSelect2");
//switchSelect2.addEventListener("change", changeMode2);
//function changeMode2() {
//if (CSS.href.includes(css / dark.css)) {
//css.href = "css/light.css";
//switchtext2.textContent = "Light Mode";
//} else {
//css.href = "css/dark.css";
//switchtext2.textContent = "Dark Mode";
//}
//}

/* løsning 3 */
const css = document.querySelector("#colormode");
const btn3 = document.querySelector("#switchBtn3");
btn3.addEventListener("click", changeMode3);
const switchtext3 = document.querySelector("#switchtext3");

function changeMode3() {
  if (css.href.includes("css/dark.css")) {
    css.href = "css/light.css";
    switchtext3.textContent = "";
  } else {
    css.href = "css/dark.css";
    switchtext3.textContent = "";
  }
}
