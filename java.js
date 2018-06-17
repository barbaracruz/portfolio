var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 20) {
    greeting = "Boa Noite";
}
else if (hourNow > 12 ) {
    greeting = "Boa tarde";
}
else if (hourNow > 7) {
    greeting = "Bom dia";
}
else {
    greeting = "Bom descanso";
}

document.addEventListener("DOMContentLoaded", function(event) { 
  document.getElementById("saudacao").innerHTML = greeting;
});
