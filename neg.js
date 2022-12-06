let counter = 0;


/* First quiz box */
function inputCheck(){
  const input =  document.getElementById('textbox').value.toLowerCase();
   return input == 'marcus semien' ? console.log('True') : console.log("False");
   
 };

  function answer(){
    
    const ansInput = document.getElementById('textbox').value.toLowerCase();
     if (ansInput == 'marcus semien') {
       document.getElementById('quizbox-two').style.display= 'block';
       counter++
       
      } 
      console.log(counter)
      
  };
  

  function move() {
    return window.location = "";
  };

function clearButton() {
  document.getElementById('nobox').style.display = 'none';
  document.getElementById('yesbox').style.display = 'none';
};

$(document).ready(function(){
  $("button").hover(function(){
    $(this).addClass("animate__animated animate__pulse");
  })
});

/* Second quiz box */
function inputCheckTwo(){
  const inputTwo =  document.getElementById('textbox-two').value.toLowerCase();
   return inputTwo.replace(/[^a-zA-Z0-9 ]/g, '') == 'derek jeter' ? console.log('True') : console.log("False");
   
 };

  function answerTwo(){
    const ansInputTwo = document.getElementById('textbox-two').value.toLowerCase();
      if (ansInputTwo.replace(/[^a-zA-Z0-9 ]/g, '') == 'derek jeter') { 
        document.getElementById('quizbox-three').style.display = 'block';
         counter++
         
       }
       console.log(counter)
       
  };
  

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
   return inputThree.replace(/[^a-zA-Z0-9 ]/g, '') == 'larry walker' ? console.log('True') : console.log("False");
   
 };

  function answerThree(){
    const ansInputThree = document.getElementById('textbox-three').value.toLowerCase();
    
      if (ansInputThree.replace(/[^a-zA-Z0-9 ]/g, '') == 'larry walker') { 
         counter++
         document.getElementById('score-box').style.display= "block";
       }
       let counterMessage = ` Let's go! Score: ${counter} `;
       console.log(counter)
       document.getElementById('score').innerHTML= counterMessage;
  };
  
  

  function moveThree() {
    return window.location = "";
  };

function buttonThree() {
  document.getElementById('nobox-two').style.display = 'none';
  document.getElementById('yesbox-two').style.display = 'none';
};
