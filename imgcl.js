let mobilenet;
let drila;
function modelReady(){
    console.log('I guess the model is ready'); 
    mobilenet.predict(drila, gotResults);
}
function imgReady(){
    image(drila,0,0,width,height);
   
}
function gotResults(error, results)
{
    if(error){
        console.error(error);
    }else{
        console.log(results);
        let label= results[0].className;
        fill(0);
        textSize(64);
        text(label,10,height-50);
    }
}
function setup(){
    createCanvas(640,480);
    drila=createImg('images/Drila1.jpg',imgReady);
    drila.hide();
    background(0); 

    mobilenet= ml5.imageClassifier('MobileNet', modelReady);
}