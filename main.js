let home=document.getElementById('home');
let products=document.getElementById('products');
let aboutus=document.getElementById('aboutus');
let contactus=document.getElementById('contactus');
let locations=document.getElementById('location');
let first = document.getElementsByClassName('home')[0];
let second = document.getElementsByClassName('products')[0];
let third = document.getElementsByClassName('aboutus')[0];
let four = document.getElementsByClassName('contactus')[0];
let five = document.getElementsByClassName('location')[0];




let index=0;

let classes=[first,second,third,four,five];

let mode;
let menu = document.querySelectorAll('.top ul li button');
menu[0].classList.add('active');
function modes(id) {
    mode = id;
    for (let i = 0; i < menu.length; i++) {
      
        menu[i].classList.remove('active');
        if (mode == menu[i].id) {
            menu[i].classList.add('active');
        }
    }

    for(let i=0;i<classes.length;i++){
      classes[i].style.display='none';
      if(id==classes[i].className)
      index=i;
    }
    classes[index].style.display='flex';
    index=0;
}
let sentenceContainer = document.getElementById('title');
let sentence = 'Winter Wear';

window.addEventListener('DOMContentLoaded', function() {
   
    var typingSpeed = 100; // Adjust typing speed (in milliseconds)
  
    function typeSentence(sentence, container) {
      var i = 0;
      var typingInterval = setInterval(function() {
        container.textContent += sentence.charAt(i);
        i++;
        if (i >= sentence.length) {
          clearInterval(typingInterval);
        }
      }, typingSpeed);
    }
    typeSentence(sentence, sentenceContainer);
    sentence=' Experience high-quality craftsmanship and durable materials in our clothing.';
    sentenceContainer=document.getElementById('text')
    setTimeout(function(){
        typeSentence(sentence, sentenceContainer);
    },2000);
    
  });

  let inputs=document.querySelectorAll('form input')
  let message=document.getElementById('message');
  let submit=document.getElementById('submit');

  function clearinputs(){
    setTimeout(function(){
      submit.disabled=true;
      submit.value='loading...'

      let loading=0;

      if(inputs[0].value===''){
        loading++;
      }
      console.log(loading);

      if( inputs[1].value==''){
        loading++;
      }
      console.log(loading);

      if( inputs[2].value===''){
        loading++;
      }
      console.log(loading);
      if(message.value==''){
        loading++;
      }
     
      if( inputs[0].value==''||inputs[1].value==null||inputs[2].value==''||message.value==''){
        submit.value=`${loading} inputs are empty`
        submit.style.width='200px'
              submit.style.width='200px'
              loading=0;
        
      }

    },100)
    
    setTimeout(function(){
      submit.disabled=false;
      submit.value='send';
      submit.style.width='100px'
    },2000);

    let form=document.querySelector('form');

    form.addEventListener('submit',function(event){
      setTimeout(function(){
        event.preventDefault();
        form.reset();
      },4000);

    
    })












  }

  
