//get all the images from current page
//store the images in a variable array

var elementsInsideBody = [...document.body.getElementsByTagName('*')];
// This makes an array of everything inside the body tag
const elementsInsideMain = [...document.body.getElementsByTagName('main')];
console.log(elementsInsideMain)

//a function that loops through every single item
function findAndReplace(){
  
  
  elementsInsideBody.forEach(element =>{
    element.childNodes.forEach(child =>{
      if(child.nodeType === 3){
        replaceText(child);
      }
    });

  });
};

function replaceBG(){
    elementsInsideMain.forEach(element=>{
        element.childNodes.forEach(child=>{
            if(child.nodeType===1){
                console.log('HERE!!')
                child.style.opacity = "0.75"
            }
        })
    })

}

function replaceText (node) {

  let value = node.nodeValue;
  value = value.replace(/Codesmith/gi, 'BestBootcampEver')
  value = value.replace(/JavaScript/gi, 'Python');
  
  //   value = value.replace(/Codesmith/gi, 'BestBootcampEver');
  node.nodeValue = value;
}

window.onload = findAndReplace();
var count = 0;

document.addEventListener('click', function(){
  replaceBG();
  if(count<=0){
    const startSong = playAudio();
    startSong(count);
    count++;
    console.log(count);
  }
})

function playAudio(){
  var audio = document.createElement("AUDIO")
  document.body.appendChild(audio);
  audio.src = chrome.extension.getURL("media/weWillRockYou2.mp3");
  console.log(audio);
  return function (count){
    if(count<=1){
      audio.play();
    }
  }
}
document.body.addEventListener("click", function () {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);

  var a = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  var c = Math.floor(Math.random() * 256);


  
  var bgColor1 = "rgb(" + x + "," + y + "," + z + ")";
  var bgColor2 = "rgb(" + a + "," + b + "," + c + ")";
    console.log(bgColor1);

  document.body.style.backgroundImage = `linear-gradient(to top right, ${bgColor1}, ${bgColor2})`;

  
  
  

})
// document.body.appendChild(click);