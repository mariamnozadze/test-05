var check = null;
var circle = document.getElementById("circleHover");

function Timer() {
  if (check == null) {
    var count = 10;

    check = setInterval(function () {
      count -= 1;
      document.getElementById("VR").textContent = count;
      document.getElementById("VRcircle").style = "background-color:grey;";
      if (count <= 0) clearInterval(check);
    }, 1000);
  }
}

function stop() {
  clearInterval(check);
  check = null;
  document.getElementById("VR").textContent = "VR";
  document.getElementById("VRcircle").style = "background-color:#0381c1;";
}
