

function inputCheck(){
  const input =  document.getElementById('textbox').value.toLowerCase();
   return input == 'mickey mantle' ? console.log('True') : console.log("False");
   
 };

  function answer(){
    const ansInput = document.getElementById('textbox').value.toLowerCase();
      return ansInput == 'mickey mantle' ? document.getElementById('yesbox').style.display= 'block' : document.getElementById('nobox').style.display= 'block';
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


function inputCheckTwo(){
  const inputTwo =  document.getElementById('textbox-two').value.toLowerCase();
   return inputTwo.replace(/[^a-zA-Z0-9 ]/g, '') == 'jacob degrom' ? console.log('True') : console.log("False");
   
 };

  function answerTwo(){
    const ansInputTwo = document.getElementById('textbox-two').value.toLowerCase();
      return ansInputTwo.replace(/[^a-zA-Z0-9 ]/g, '') == 'jacob degrom' ? document.getElementById('yesbox-two').style.display= 'block' : document.getElementById('nobox-two').style.display= 'block';
  };
  

  function moveTwo() {
    return window.location = "";
  };

function buttonTwo() {
  document.getElementById('nobox-two').style.display = 'none';
  document.getElementById('yesbox-two').style.display = 'none';
};
  
