let counter = 0;
let scoreBox = true;
let errorMessage = "OoOoOoOooops";

/* animating.css jquery for buttons */
$(document).ready(function(){
  $("button").hover(function(){
    $(this).addClass("animate__animated animate__pulse");
  })
});

/* Function to check if scoreBox should be displayed and then generating the counter */

function createCounter(){
  let counterMessage = `Score: ${counter}`;
  if (scoreBox = true){
    document.getElementById('score-box').innerHTML= counterMessage;
  } else {
    document.getElementById('score-box').innerHTML= errorMessage;
  };
};


/* First quiz box */
/* log to console to check if input is working on button */
function inputCheck(){
  const input =  document.getElementById('textbox').value.toLowerCase();
   return input == 'todd helton' ? console.log('True') : console.log("False");
 };

 /* Checks answer and adds to counter move to next quizbox */
  function answer(){
    
    const ansInput = document.getElementById('textbox').value.toLowerCase();
     if (ansInput !== 'todd helton') {
      document.getElementById('image').style.border= '2px solid red';
      } else {
        counter ++;
        document.getElementById('image').style.border= '2px solid green';
      }
      console.log(counter)
      createCounter();
  };

  function nextBox() {
    let status = true;

    status === true ? document.getElementById('quizbox-two').style.display= 'block' : null;
  }
  
/* hint */
  function move() {
    return window.location = "";
  };

/* Clear button for original answer indicator */
function clearButton() {
  document.getElementById('image').style.display = '2px solid #351c75';
  
};

/* Second quiz box */
function inputCheckTwo(){
  const inputTwo =  document.getElementById('textbox-two').value.toLowerCase();
   return inputTwo.replace(/[^a-zA-Z0-9 ]/g, '') == 'german marquez' ? console.log('True') : console.log("False");
   
 };

  function answerTwo(){
    const ansInputTwo = document.getElementById('textbox-two').value.toLowerCase();
      if (ansInputTwo.replace(/[^a-zA-Z0-9 ]/g, '') !== 'german marquez') { 
        document.getElementById('image-two').style.border= '2px solid red';
       } else {
        counter++;
        document.getElementById('image-two').style.border= '2px solid green';
       }
       console.log(counter)
       createCounter();
       
  };

  function thirdBox() {
      document.getElementById('quizbox-three').style.display= 'block';
  }
  

  function moveTwo() {
    return window.location = "";
  };

function buttonTwo() {
  document.getElementById('nobox-two').style.display = 'none';
  document.getElementById('yesbox-two').style.display = 'none';
};
  
/* Third quiz box */
function inputCheckThree(){
  const inputThree =  document.getElementById('textbox-three').value.toLowerCase();
   return inputThree.replace(/[^a-zA-Z0-9 ]/g, '') == 'troy tulowitzki' ? console.log('True') : console.log("False");
   
 };


 /* generates counter after checking third score */ 
  function answerThree(){
    const ansInputThree = document.getElementById('textbox-three').value.toLowerCase();
    
      if (ansInputThree.replace(/[^a-zA-Z0-9 ]/g, '') !== 'troy tulowitzki') {
        document.getElementById('image-three').style.border= "2px solid red";

      } else { 
         counter++
         document.getElementById('score-box').style.display= "block";
         document.getElementById('image-three').style.border= '2px solid green';
       }
       console.log(counter);
       createCounter();
       
  };
  
  

  function moveThree() {
    return window.location = "";
  };

function buttonThree() {
  document.getElementById('nobox-two').style.display = 'none';
  document.getElementById('yesbox-two').style.display = 'none';
};
