// document.getElementById(id)
// document.getElementById(id)
// document.getElementByTagName(name)
// document.getElementsByClassName(name)
// document.querySelectorAll

// const elm = document.getElementById("first");
// const elm = document.getElementsByClassName("first");

// const elm = document.querySelector("#first");
// const elm = document.querySelector(".first");
// const elm = document.querySelector(".info1");
// const elm = document.querySelectorAll(".info1");
// const elm = document.querySelectorAll("a");

// const val = elm.innerText;

// const elm = document.getElementById("display");
// elm.innerText = "Hello this is my JS text";

// elm.innerHTML = "<h2> This is the text from JS </h2>";

// document.write("To add anything at the end of the document");

// const elm = document.querySelector("a");
// elm.setAttribute("style", "color:green");

// const val = elm.getAttribute("href");
// elm.style.color = "red";
// elm.style.fontSize = "3rem";
// elm.style.textDecoration = "none";
// elm.style.display = "none"; //"block"
// const val = elm.innerHTML;
// console.log(val);
// console.log(elm);

const elm = document.querySelector(".message");
elm.style.border = "3px solid red";
elm.style.padding = "1rem";

// const changeText = () => {
//   //   alert("hello");
//   elm.innerText = "CLick again to change text";
// };

// elm.addEventListener("click", changeText);

elm.addEventListener("click", () => {
  //   alert("hello");
  elm.innerText = "Click again to change text";

  elm.classList.toggle("success");
});
