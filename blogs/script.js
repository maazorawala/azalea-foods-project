'use strict'
/**Loader function */
document.onreadystatechange = () =>{
    if(document.readyState != "complete"){
        document.querySelector("#load").style.visibility="visible";
        document.body.style.visibility="hidden";
    }
    else{
        document.querySelector("#load").style.visibility="hidden"
        document.body.style.visibility="visible";
    }
}   
/**Loader function */

/**opening and closing sidenav */

    const mysideNav = document.querySelector('.mysideNav');
    const navLinks = document.querySelector('.nav-links');
    const navbar = document.querySelector(".navbar");
let openNav = function () {
    document.getElementById("sideNav").style.width = "100vw";
    document.querySelector('.nav-links').style.display='block';
    document.getElementById("sideNav").style.top="0vw";
}

const closeNav = function() { 
    document.getElementById("sideNav").style.paddingTop = "0vw"; 
    document.getElementById("sideNav").style.width = "100vw";
    document.getElementById("sideNav").style.top="-250vw";
    document.getElementById("sideNav").style.transition="1s";
}

const openBtn = document.querySelector(".openmodal");
const openBtn2 = document.querySelector('.openmodal2');
const openBtn3 = document.querySelector('.openmodal3');

const closeBtn = document.querySelector(".close-modal");
const closeBtn2 = document.querySelector(".close-modal-2");
const closeBtn3 = document.querySelector(".close-modal-3");


const modal = document.querySelector(".modal-1");
const modal2 = document.querySelector('.modal-2');
const modal3 = document.querySelector('.modal-3');

const overlay = document.querySelector(".overlay");

const openModal = () =>{
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
const openModal2 = () => {
    modal2.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
const openModal3 = () =>{
    modal3.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
const closeModal = () =>{
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
const closeModal2 = () =>{
    modal2.classList.add('hidden');
    overlay.classList.add('hidden');
}
const closeModal3 = () =>{
    modal3.classList.add('hidden');
    overlay.classList.add('hidden');
}

openBtn.addEventListener('click', openModal);
openBtn2.addEventListener('click', openModal2);
openBtn3.addEventListener('click', openModal3);

closeBtn.addEventListener('click', closeModal);
closeBtn2.addEventListener('click', closeModal2);
closeBtn3.addEventListener('click', closeModal3);

document.addEventListener('keydown', function(a){
    if(a.key === "Escape" && !modal.classList.contains("hidden")){
        closeModal();
    }
});
document.addEventListener('keydown', function(b){
    if(b.key === "Escape" && !modal2.classList.contains("hidden")){
        closeModal2();
    }
});
document.addEventListener('keydown', function(c){
    if(c.key === "Escape" && !modal3.classList.contains("hidden")){
        closeModal3();
    }
});