var nextButton, prevButton;

function changeURL(y){
  window.location.assign(y);
};

window.addEventListener("keydown", function(event) {
  if (event.defaultPrevented){
    return;
  }
  switch(event.key){
    case "ArrowLeft":
      changeURL(prevButton);
      break;
    case "ArrowRight":
      changeURL(nextButton);
      break;
    default:
      return;
  }
  event.preventDefault();
}, true);

window.onload = function(){
  console.log("test");
  var allLinks = document.querySelectorAll("A");
  for (var i=0;i<allLinks.length;i++){
    var imgButton = allLinks[i].childNodes;
    if (imgButton.length = 1) {
      if (imgButton[0].getAttribute("src").includes("/back.jpg")) {
        prevButton = allLinks[i].getAttribute("href");
      } else if (imgButton[0].getAttribute("src").includes("/next.jpg")) {
        nextButton = allLinks[i].getAttribute("href");
      } else {
        break;
      };
    } else {
      break;
    };
};