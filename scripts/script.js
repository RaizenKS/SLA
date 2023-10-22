const leftDoor = document.querySelector(".leftdoor");
const leftSide = document.querySelector(".leftside");
const altMode = document.querySelector("#btn-bw");
const imgElement = altMode.querySelector("img");
const mid = document.querySelector(".mid")
let timecan= true;

leftDoor.addEventListener("mousemove", function(){
leftDoor.style.display= "none";
leftSide.style.display="flex";
})

leftSide.addEventListener("mouseleave", function(){ 
    leftSide.style.display="none";
    leftDoor.style.display= "flex";
})

if(mid.style.animationName="darkmode"){

    if (mid.style.animationName === "darkmode") {
        
        altMode.addEventListener("click", function() {
            if (imgElement.alt === "Dark mode") {

                imgElement.src = "icon/sol.png";
                imgElement.alt = "Light mode";
                mid.style.animationDuration = "1s";
                mid.style.color = "white";
                mid.style.background = "black";
            } else {
                imgElement.src = "icon/lua.png";
                imgElement.alt = "Dark mode";
                mid.style.animationDuration = "1s"; 
                mid.style.color = "black";
                mid.style.background = "white";
            } 
        });
    
}

}






