
(function(){


   let visible = true;

  document.addEventListener("keydown", function(event) {
    if (event.key === "g" || event.key === "G") {
      let guide = document.getElementById("guide")
      if (visible) {
        guide.classList.add("novis")
        guide.classList.remove("vis")
        visible = false;
      } else {
        guide.classList.remove("novis")
        guide.classList.add("vis")
        visible = true;
      }
    }
  });

  let currentElement = document.querySelector("span[data-color='red']")

  document.getElementById("range").value = 0 //reset slider to 0 otherwise it goes to 50. dumb, I know

  let changeActiveElement = function(color) {
    currentElement.classList.remove("slider-active");
    currentElement = document.querySelector(`span[data-color='${color}']`);
    currentElement.classList.remove("slider-inactive");
    currentElement.classList.add("slider-active");
  }

  document.getElementById("range").addEventListener("input", (e)=>{
    
    let val = e.target.value;
    let valRed = val - 0;
    let valOrange = val - 25;
    let valYellow = val - 50;
    let valGreen = val - 75;
    let valArr = [valRed, valOrange, valYellow, valGreen];



    if(valArr[0] > 0) {
      changeActiveElement("red");
    } 

    if(valArr[1] > 0) {
      changeActiveElement("orange")
    } 

    if(valArr[2] > 0) {
      changeActiveElement("yellow")
    } 

    if(valArr[3] > 0) {
      changeActiveElement("green")
    } 

  })




})()




