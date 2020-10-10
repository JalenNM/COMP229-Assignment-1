/* app.js - Jalen Mendonca - 301098614 - 10/08/2020 */

// IIFI -- Immediately Invoked Function Expression
(function(){

    function start(){
        console.log("App started...");
    }

    window.addEventListener("load", start);
    
})();

/* validateForm.js - Jalen Mendonca - 301098614 - 10/08/2020 */

function validateForm() {
    var x = document.forms["contactForm"]["name"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }