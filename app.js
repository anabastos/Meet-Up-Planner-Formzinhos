var elem = document.getElementById('additionalInfo');
document.getElementById('additionalInfoC').onchange = function() {
    elem.style.display = this.checked ? 'block' : 'none';
};



function createDisplay() {
  var elem = document.getElementsByClassName("form-control");
  var names = [];
  for (var i = 0; i < elem.length; ++i) {
    if (typeof elem[i].value !== "undefined") {
      names.push(elem[i].value);
    }
  }
  names.forEach(Indexar);
  demoP = document.getElementById("display");

  function Indexar(item) {
    demoP.innerHTML = demoP.innerHTML + item + "<br />";
  }
}


