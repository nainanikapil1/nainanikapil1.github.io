function changeColor(event) {
  var children = event.currentTarget.parentElement.children;
  for (var i = 0; i < children.length; i++) {
    children[i].style.background = "#efefef";
    children[i].style.color = "grey";
  }
  event.currentTarget.style.background = "limegreen";
  event.currentTarget.style.color = "white";
}
function changeSlider(event) {
  var element = event.currentTarget.nextElementSibling;
  element.innerHTML = "Distance " + event.currentTarget.value + ' km';
}









