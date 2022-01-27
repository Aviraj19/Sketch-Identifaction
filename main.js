function preload() {
classifier=ml5.imageClassifier('DoodleNet');
}
function setup() {
    canvas=createCanvas(500,500);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifycanvas);
    synth=window.speechSynthesis;
}
function draw() {
    strokeWeight(13)
    stroke("black")
    if (mouseIsPressed) {
        line(pmouseX,pmouseY,mouseX,mouseY)
    }
}
function classifycanvas() {
    classifier.classify(canvas,gotresult)
}
function gotresult(error,results) {
   if (error) {
       console.log(error)
   }
   else {
       console.log(results)
       document.getElementById("label").innerHTML="label : "+results[0].label;
       document.getElementById("confidence").innerHTML="confidence : "+Math.round(results[0].confidence*100)+"%";
       utter = new SpeechSynthesisUtterance(results[0].label)
        synth.speak(utter)
   }
}
function clearcanvas() {
    background("white");
}