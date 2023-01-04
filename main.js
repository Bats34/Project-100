var SpeechRecognition=window.webkitSpeechRecognition;
recognition=new SpeechRecognition();

function start() {
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event);
    Content=event.results[0][0].transcript;

    console.log(Content);
    if( Content=="selfie") {

        speak();
    }
  

  
}
function speak() {
    var synth=window.speechSynthesis;
    data="Taking your selfie in 5 seconds.";
    Utterthis=new SpeechSynthesisUtterance(data);
    synth.speak(Utterthis);
    Webcam.attach(camera);
    setTimeout(function(){
        img_id="selfie1";
take_selfie();
save();
speak_data="Taking your selfie in five seconds";
var Utterthis=new SpeechSynthesisUtterance(speak_data);
synth.speak(Utterthis);

    },5000);

    setTimeout(function(){
        img_id="selfie2";
take_selfie();
save();
speak_data="Taking your selfie in ten seconds";
var Utterthis=new SpeechSynthesisUtterance(speak_data);
synth.speak(Utterthis);

    },10000);

    setTimeout(function(){
        img_id="selfie3";
take_selfie();
save();
speak_data="Taking your selfie in fiveteen seconds";
var Utterthis=new SpeechSynthesisUtterance(speak_data);
synth.speak(Utterthis);

    },15000);
    
}

camera=document.getElementById("camera");
Webcam.set({
    width:360,
    height:250,
    image_format:"jpeg",
    jpeg_quality:90

});
function take_selfie() {
    Webcam.snap(function(data_uri){
          if(img_id=="selfie1") {
        document.getElementById("result1").innerHTML='<img id="selfie1"src="'+data_uri+'"/>';  
    }
     if (img_id=="selfie2") {
        document.getElementById("result2").innerHTML='<img id="selfie2"src="'+data_uri+'"/>'; 

    } 
    if (img_id=="selfie3") {
        document.getElementById("result3").innerHTML='<img id="selfie3"src="'+data_uri+'"/>'; 

}});
}