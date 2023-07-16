"use strict";
if (typeof localStorage.getItem("number") !== "string") {
  localStorage.setItem("number", 0);

  console.log(
    `This variable is string and the var is: ${localStorage.getItem("number")}`
  );
}
if (typeof localStorage.getItem("thevar") !== "string") {
  localStorage.setItem("thevar", 1000);

  console.log(
    `This variable is string and the var is: ${localStorage.getItem("thevar")}`
  );
}

const a = document.getElementById("text");
a.value = localStorage.getItem("thevar");
let thenumber = Number(localStorage.getItem("number"));
const form = document.querySelector("form");

const btn = document.querySelector("#btn");
const myFunction = () => {

    thenumber = Number(localStorage.getItem("number"));
  // form.addEventListener("click", (e)=>e.preventDefault);
  thenumber++;
  localStorage.setItem("number", thenumber);
  console.log(localStorage.getItem("number"));
  console.log(a.value);

  localStorage.setItem("thevar", a.value);

  console.log(localStorage.getItem("thevar"));
  if (thenumber >= 10) {
    document.querySelector(".content").innerHTML = `<p>Game over!</p>
        <p>Do you wanna restart: </p>
        <button id="restart_btn">Restart<button/>
        `;
    document.querySelector("#restart_btn").addEventListener("click", () => {
      document.querySelector(
        ".content"
      ).innerHTML = `<form onsubmit="myFunction()">
        <label for="text">
            Please put input: 
        </label>
        <input type="text" name="text-input" id="text"></h4>
        <input type="submit" value="Gửi" id="btn">
        </form>`;
      localStorage.setItem("number", 0);
    });
  }
};

/* const myFunction = () => {
    


    let myName = localStorage.getItem("number");
    myName++;
    localStorage.setItem("number", myName);
    console.log(localStorage.getItem("number"));
} */
