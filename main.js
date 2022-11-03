//Today we won’t define the preload() function as the preload() function is used to load
//images or assets that will be used on the canvas, but in our real time Image
//Identification web app, we don’t need any external images.



//So now let’s define a setup function and inside that write code for creating canvas.
function setup() {
  canvas = createCanvas(300, 300);//creating Canvas for Width and Height as 300px
  canvas.center();//Then get the canvas in the center of the page
  video = createCapture(VIDEO);
  
  //createCapture() is the function that helps to access the webcam.
//And we have to pass the video inside the createCapture() function.
// video--This variable will hold the live preview of the webcam

  
video.hide();//to hide all the components of the p5 library.
  classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/v_sl95BzE/model.json',modelLoaded);
  //classifier is a variable which will store the images of the trained model
  // imageClassifier is a predefined function of ml5.js that is used to js that is used to js that is used to
//trigger the ml5.js image classification function.
}

function modelLoaded() {//define model loaded function
    console.log('Model Loaded!');
}

function draw() {//to display the Webcam in the canvas
  //So we will put the code of executing the ml5.js inside the draw() function which will result in - real time Image Identification
  image(video, 0, 0, 300, 300);
  classifier.classify(video, gotResult);
  //We will call the predefined function of ml5.js i.e., classify() which is used to compare webcam live view with the model images.


}

function gotResult(error, results) {//This gotResult function holds the result of the comparison,has two parameters inside it
  //one is error and second is results.

  if (error) {
    console.error(error);
  } else {
    console.log(results);
    document.getElementById("result_object_name").innerHTML = results[0].label;
    //Result will be displayed as array[0] with object name and accuracy.
    document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);//show accuracy value till 3 decimal places.
  }
}
