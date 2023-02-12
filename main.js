function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
  classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/pK0pIY9GC/model.json', modelReady);
}

function modelReady(){
  classifier.classify(gotResults);
}
var dog = 0;
var cat = 0;
var parrot = 0;
var elephant = 0;
var owl = 0;


function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;


    document.getElementById("result_label").innerHTML = 'Detected voice is of  - '+ results[0].label;
    document.getElementById("result_count").innerHTML = 'Detected Dog - '+dog+ ' Detected Cat - '+cat+' Detected Elephant - '+elephant+' Detected Owl - '+owl+' Detected African Grey Parrot - '+parrot;
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("result_count").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

    img = document.getElementById('animal_image');

    if (results[0].label == "doggo") {
      img.src = 'bark.gif';
      dog = dog+1;
    } else if (results[0].label == "cat") {
      img.src = 'meow.gif';
      cat = cat + 1;
    } else if (results[0].label == "elephant") {
        img.src = 'elephant1.gif';
        elephant = elephant + 1;
      } else if (results[0].label == "African grey parrot") {
        img.src = 'parrot.gif';
        parrot = parrot + 1;
      } else if (results[0].label == "owl") {
        img.src = 'owl.gif';
        owl = owl + 1;
      } else{
      img.src = 'listen.gif';
    }
  }
}
