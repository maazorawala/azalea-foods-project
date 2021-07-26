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

/**google map custom api  */

function initMap(){
    map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 19.301883359233383, lng: 73.05304812925645},
    zoom: 18,
    mapId: '98d0aef9b804fb11',
    
}); 
    const markers = [
        [
            "Azalea Foods and spices",
            19.301883359233383,
            73.05304812925645,
            "./placeholder.svg",
            50,
            31,
        ]
    ];
    let i;
    for(i=0; i<markers.length; i++){
        const currMarker = markers[i];

        
const marker = new google.maps.Marker({
    position: {lat: currMarker[1], lng: currMarker[2]},
    map,
    title: currMarker[0],
    icon:{
        url:currMarker[3],
        scaledSize:new google.maps.Size(currMarker[4],currMarker[5]),
    }
});

    const infowindow = new google.maps.InfoWindow({
    content: currMarker[0],
});
marker.addListener("click", () => {
    infowindow.open({
        anchor: marker,
        map,
        shouldFocus: false,
    });
});
    }
}//19.301883359233383, 73.05304812925645
/**google map custom api  */