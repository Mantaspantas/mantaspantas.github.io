
function first() {
    let x = document.getElementById("bessemer");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  function second() {
    let x = document.getElementById("eadsbridge");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  function third() {
    let x = document.getElementById("pullman");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function firstContr() {
    let x = document.getElementById("university");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  function secondContr() {
    let x = document.getElementById("library");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  function thirdContr() {
    let x = document.getElementById("park");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  window.onload = function() {
    document.getElementById("bessemer").style.display = 'none';
    document.getElementById("eadsbridge").style.display = 'none';
    document.getElementById("pullman").style.display = 'none';
    document.getElementById("university").style.display = 'none';
    document.getElementById("library").style.display = 'none';
    document.getElementById("park").style.display = 'none';
  };
  