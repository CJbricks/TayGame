let counter = 0;

/* animating.css jquery for buttons */
$(document).ready(function(){
  $("button").hover(function(){
    $(this).addClass("animate__animated animate__pulse");
  })
});


/* First quiz box */
/* log to console to check if input is working on button */
function inputCheck(){
  const input =  document.getElementById('textbox').value.toLowerCase();
   return input == 'christian yelich' ? console.log('True') : console.log("False");
   
 };

 /* Checks answer and adds to counter move to next quizbox */
  function answer(){
    
    const ansInput = document.getElementById('textbox').value.toLowerCase();
     if (ansInput !== 'christian yelich') {
      document.getElementById('image').style.border= '2px solid red';
      } else {
        counter ++;
      }
      console.log(counter)
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
   return inputTwo.replace(/[^a-zA-Z0-9 ]/g, '') == 'jackie robinson' ? console.log('True') : console.log("False");
   
 };

  function answerTwo(){
    const ansInputTwo = document.getElementById('textbox-two').value.toLowerCase();
      if (ansInputTwo.replace(/[^a-zA-Z0-9 ]/g, '') !== 'jackie robinson') { 
        document.getElementById('image-two').style.border= '2px solid red';
       } else {
        counter++;
       }
       console.log(counter)
       
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
   return inputThree.replace(/[^a-zA-Z0-9 ]/g, '') == 'randal grichuk' ? console.log('True') : console.log("False");
   
 };

  function answerThree(){
    const ansInputThree = document.getElementById('textbox-three').value.toLowerCase();
    
      if (ansInputThree.replace(/[^a-zA-Z0-9 ]/g, '') !== 'randal grichuk') {
        document.getElementById('image-three').style.border= "2px solid red";

      } else { 
         counter++
         document.getElementById('score-box').style.display= "block";
       }
       let counterMessage = `Score: ${counter}`;
       console.log(counter);
       document.getElementById('score-box').innerHTML= counterMessage;
  };
  
  

  function moveThree() {
    return window.location = "";
  };

function buttonThree() {
  document.getElementById('nobox-two').style.display = 'none';
  document.getElementById('yesbox-two').style.display = 'none';
};
