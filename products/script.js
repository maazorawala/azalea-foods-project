/**opening and closing sidenav */

    const mysideNav = document.querySelector('.mysideNav');
    const navLinks = document.querySelector('.nav-links');
    const navbar = document.querySelector(".navbar")
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

/**opening and closing sidenav */
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