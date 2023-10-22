const leftDoor = document.querySelector(".leftdoor");
const leftSide = document.querySelector(".leftside");

leftDoor.addEventListener("mousemove", function(){
leftDoor.style.display= "none";
leftSide.style.display="flex";
})

leftSide.addEventListener("mouseleave", function(){ 
    leftSide.style.display="none";
    leftDoor.style.display= "flex";
    })
