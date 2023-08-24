
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


  function click(qy, fn) {
    return document.querySelector(qy).addEventListener("click", fn(e));
  }




  let currentElement = document.querySelector("span[data-color='red']")
  const rangeInput = document.getElementById("range")
  rangeInput.value = 0 //reset slider to 0 otherwise it goes to 50. dumb, I know
  rangeInput.dataset.color = "red";

  let changeActiveElement = function(color, e) {
    currentElement.classList.remove("slider-active");
    currentElement.classList.add("slider-inactive");
    currentElement = document.querySelector(`span[data-color='${color}']`);
    rangeInput.dataset.color=color;
    currentElement.classList.remove("slider-inactive");
    currentElement.classList.add("slider-active");
    // document.querySelector("#range[data-color='red']::-webkit-slider-thumb").style.transform=(`rotate(${e}deg)`)
  }

  document.getElementById("range").addEventListener("input", (e)=>{
    
    let deg = 45;
    const val = e.target.value;
    const valRed = val - 0;
    const valOrange = val - 25;
    const valYellow = val - 50;
    const valGreen = val - 75;
    const valArr = [valRed, valOrange, valYellow, valGreen];



    if(valArr[0] > 0) {
      changeActiveElement("red",val+deg);
    } 

    if(valArr[1] > 0) {
      changeActiveElement("orange", val+deg)
    } 

    if(valArr[2] > 0) {
      changeActiveElement("yellow", val+deg)
    } 

    if(valArr[3] > 0) {
      changeActiveElement("green",val+deg)
    } 

  })


  document.getElementById("range").addEventListener("input", (e)=>{
    const val = e.target.value;
    document.querySelector("#output").innerText  = val;
    // document.querySelector("#output").style["margin-left"]  = val + "%";
    // document.querySelector("#output").style["display"]  = "inline-block";
  })


  document.getElementById("button-1").addEventListener("click", (e)=>{
    e.preventDefault();
    document.getElementById("main-form").classList.add("pop-out")
    document.getElementById("second-form").classList.add("pop-in")

  });

  document.getElementById("random").addEventListener("click", (e)=>{
    const root = document.querySelector(':root');
    console.dir(root.style);
// // set css variable
      root.style.setProperty('--primary', 'blue');
  })

})()




