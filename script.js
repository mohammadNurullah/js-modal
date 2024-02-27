/*
 * Title: Modal window using vanila js dom
 * Description: This js file has all the js dom necessary to control the Modal window
 * Author: Mohammad Nurullah
 * Date: 15-08-21
 *
 */

"use strict";

const modal = document.querySelector(".modal");
const btnCloseModal = document.querySelector(".close-modal");
const overly = document.querySelector(".overly");
const btnOpenModal = document.querySelectorAll(".show-modal");

// when click open modal button
const openModal = function () {
  console.log("Button clicked");

  modal.classList.remove("hidden");
  overly.classList.remove("hidden");
};

// when click close modal button
const closeModal = function () {
  modal.classList.add("hidden");
  overly.classList.add("hidden");
};

//multiple button select using vanila for loop
for (let i = 0; i < btnOpenModal.length; i++)
  //calling open modal
  btnOpenModal[i].addEventListener("click", openModal);

//clling close modal
btnCloseModal.addEventListener("click", closeModal);
overly.addEventListener("click", closeModal);

//  document.addEventListener('keydown', function (event) {

//         // console.log(e.key);
//         if(event.key === 'Escape')
//         console.log('Escape was prassed');

//  });
