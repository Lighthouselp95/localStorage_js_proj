"use strict"
if (typeof localStorage.getItem("number") !== "string") {
    localStorage.setItem("number", 0);
    
    console.log(`This variable is string and the var is: ${localStorage.getItem("number")}`);
}
if (typeof localStorage.getItem("thevar") !== "string") {
    localStorage.setItem("thevar", 1000);
   
    console.log(`This variable is string and the var is: ${localStorage.getItem("thevar")}`);
}

const a = document.getElementById("text");
    a.value = localStorage.getItem("thevar");

const myFunction = () => {

let thenumber = Number(localStorage.getItem("number"));
const form = document.querySelector("form");

const btn = document.querySelector("#btn");

    // form.addEventListener("click", (e)=>e.preventDefault);
    thenumber++;
    localStorage.setItem("number", thenumber);
    console.log(localStorage.getItem("number"));
    console.log(a.value);
    localStorage.setItem("thevar", a.value);
    
    console.log(localStorage.getItem("thevar"));
};
/* const myFunction = () => {
    


    let myName = localStorage.getItem("number");
    myName++;
    localStorage.setItem("number", myName);
    console.log(localStorage.getItem("number"));
} */
