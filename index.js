/*if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}
*/

const bar = document.querySelector("#bar");
const close = document.querySelector("#close");
const nav = document.getElementById("navbar");
const changeSuits = document.getElementById("change_btn_suits");
const changeShirts = document.getElementById("change_btn_shirts");
const suits = document.getElementById("suits");
const shirts = document.getElementById("shirts");
let MainImg = document.getElementById("MainImg");
let smallimg = document.getElementsByClassName("small-img");
let signUpBtn = document.querySelector("#newsletterBtn");
let alertBtn = document.querySelector(".alert");
let alertCloseBtn=document.querySelector(".closebtn")


    signUpBtn.addEventListener("click", () =>{
        alertBtn.classList.remove("activeSignUp");
    })

    alertCloseBtn.addEventListener("click", () =>{
        alertBtn.classList.add("activeSignUp");
    })



if (bar) {
    bar.addEventListener("click", () => {
        nav.classList.add("active");
    })
}

if (close) {
    close.addEventListener("click", () => {
        nav.classList.remove("active");
    })
}

if (changeSuits) {
    changeSuits.addEventListener("click", () => {
        suits.classList.remove("hidden");
        shirts.classList.add("hidden");
    })
}

if (changeShirts) {
    changeShirts.addEventListener("click", () => {
        suits.classList.add("hidden");
        shirts.classList.remove("hidden");
    })
}


/*
smallimg[0].onclick = function (){
    MainImg.src = smallimg[0].src;
};

smallimg[1].onclick = function (){
    MainImg.src = smallimg[1].src;
};

smallimg[2].onclick = function (){
    MainImg.src = smallimg[2].src;
};

smallimg[3].onclick = function (){
    MainImg.src = smallimg[3].src;
};

let newsletterBtn = document.querySelector("#newsletter");

newsletterBtn.onclick = function (){
    alert("Thank you for subscription!")
}

*/