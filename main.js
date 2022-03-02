const body = document.querySelector("body");
const lightswitches = document.querySelectorAll(".light-switch");

lightswitches.forEach(function(lightswitch) {
    lightswitch.addEventListener("click", function (e) {e.preventDefault();

        body.classList.toggle("light-off");
    });
    

});

