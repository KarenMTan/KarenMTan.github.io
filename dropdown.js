$(document).ready(function(){

    let drpdwn_opt = document.querySelector(".drpdwn_opt")

    drpdwn_opt.onclick = function () {
        let x = document.getElementById("navigation");
        let y = document.getElementById("menu-bar")
        y.classList.toggle("transform");
    
        if (x.style.visibility === "visible") {
            x.style.height = "0"
            x.style.visibility = "hidden";
            x.style.opacity = 0;
        } else {
            x.style.height = "100%"
            x.style.visibility = "visible";
            x.style.opacity = 1;
        }
    } 

});