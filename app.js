Draggable.create("#dragme",{
    type:"x",
    bounds:".container"

});

function checkOverlaop(){
    let div1 = document.querySelector(".cir");
    let div2 = document.querySelector("#dragme");
    let rect1 = div1.getBoundingClientRect();
    let rect2 = div2.getBoundingClientRect();

    if(rect1.left < rect2.right){
        document.querySelector("#video1").style.opacity = 0;
    }
    else{
        document.querySelector("#video1").style.opacity = 1;
    }
}

window.addEventListener("mousemove",checkOverlaop);

