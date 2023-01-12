let counter = 0;
let scoreBox = true;
let errorMessage = "OoOoOoOooops";

let keyOne = 'JOSH BELL';
let keyTwo = 'YU DARVISH';
let keyThree = 'MIKE CLEVINGER';

let avOne = './images/hintone.png';
let avTwo = './images/hinttwo.png';
let avThree = './images/hintthree.png';

/* animating.css jquery for buttons */
$(document).ready(function(){
  $("button").hover(function(){
    $(this).addClass("animate__animated animate__pulse");
  })
});

$(document).ready(function(){
  $(".avatar-one").hover(function(){
    $(this).addClass("animate__animated animate__tada");
  })
});

$(document).ready(function(){
  $(".avatar-two").hover(function(){
    $(this).addClass("animate__animated animate__tada");
  })
});

$(document).ready(function(){
  $(".avatar-three").hover(function(){
    $(this).addClass("animate__animated animate__tada");
  })
});

/* Jquery for enlarging avatar when clicked */

$(document).ready(function(){
  $(".avatar-one-img").click(function(){
    $(this).css("transform", "scale(1.5)")
  })
})

$(document).ready(function(){
  $(".avatar-two-img").click(function(){
    $(this).css("transform", "scale(1.5)")
  })
})

$(document).ready(function(){
  $(".avatar-three-img").click(function(){
    $(this).css("transform", "scale(1.5)")
  })
})

/* Function to change src of hint boxes  */
/*let hintOne = document.getElementById('avatar-one-id');*/


function hintOne(){
  document.getElementById('avatar-one-id').src = avOne;
  
}

function hintTwo(){
  document.getElementById('avatar-two-id').src = avTwo;
}

function hintThree(){
  document.getElementById('avatar-three-id').src = avThree;
}



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
  const input =  document.getElementById('textbox').value.toUpperCase();
   return input == keyOne ? console.log('True') : console.log("False");
 };

 /* If failed answer this reveals the palyers name*/
 
 function failedAnswerOne() {
  document.getElementById('failed-answer-one').innerHTML= `${keyOne}`;
};

function failedAnswerTwo() {
  document.getElementById('failed-answer-two').innerHTML= `${keyTwo}`;
};

function failedAnswerThree() {
  document.getElementById('failed-answer-three').innerHTML= `${keyThree}`;
};

 /* Checks answer and adds to counter move to next quizbox */



  function answer(){
    
    const ansInput = document.getElementById('textbox').value.toUpperCase();
     if (ansInput !== keyOne) {
      document.getElementById('image').style.border= '4px solid red';
      failedAnswerOne();
      } else {
        counter = counter + 1;
        document.getElementById('image').style.border= '4px solid green';
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
  const inputTwo =  document.getElementById('textbox-two').value.toUpperCase();
   return inputTwo.replace(/[^a-zA-Z0-9 ]/g, '') == keyTwo ? console.log('True') : console.log("False");
   
 };

  function answerTwo(){
    const ansInputTwo = document.getElementById('textbox-two').value.toUpperCase();
      if (ansInputTwo.replace(/[^a-zA-Z0-9 ]/g, '') !== keyTwo) { 
        document.getElementById('image-two').style.border= '4px solid red';
        failedAnswerTwo();

       } else {
        counter = counter + 1;
        document.getElementById('image-two').style.border= '4px solid green';
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
  const inputThree =  document.getElementById('textbox-three').value.toUpperCase();
   return inputThree.replace(/[^a-zA-Z0-9 ]/g, '') == keyThree ? console.log('True') : console.log("False");
   
 };


 /* generates counter after checking third score */ 
/*function charge(){
  let audio = "./images/charge.mp3"
  counter === 3 ? audio.play() : audio.play();
}*/
  function answerThree(){
    const ansInputThree = document.getElementById('textbox-three').value.toUpperCase();
    
      if (ansInputThree.replace(/[^a-zA-Z0-9 ]/g, '') !== keyThree) {
        document.getElementById('image-three').style.border= "4px solid red";
        failedAnswerThree();

      } else { 
        counter = counter + 1;
         document.getElementById('score-box').style.display= "block";
         document.getElementById('image-three').style.border= '4px solid green';
         
       }
       console.log(counter);
       createCounter();
  };
  
