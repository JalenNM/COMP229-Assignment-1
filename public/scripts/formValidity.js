/* validateForm.js - Jalen Mendonca - 301098614 - 10/08/2020 */

function validateForm() {
    var x = document.forms["contactForm"]["name"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }