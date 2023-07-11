let sentenceContainer = document.getElementById('title');
let sentence = 'Winter Wear';
let ahome=document.getElementById('ahome');
ahome.style.color='#555A54';
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
  sentence = ' Experience high-quality craftsmanship and durable materials in our clothing.';
  sentenceContainer = document.getElementById('text');
  setTimeout(function(){
      typeSentence(sentence, sentenceContainer);
  },1800);
  
});

let gimg1 = document.getElementById('img1');
let gimg2 = document.getElementById('img2');
let gimg3 = document.getElementById('img3');

let i = 0;

let src1 = ['photos/c1.jpg', 'photos/c3.jpg', 'photos/c4.jpg'];
let src2 = ['photos/c5.jpg', 'photos/c6.jpg', 'photos/c7.jpg'];
let src3 = ['photos/c2.jpg', 'photos/c8.jpg', 'photos/c9.jpg'];


setTimeout(function(){

    setTimeout(function(){
      gimg3.style.opacity = '0';
    },0)
    setTimeout(function(){
      gimg2.style.opacity = '0';
    },300)
    setTimeout(function(){
      gimg1.style.opacity = '0';
    },600)

},3600);







setInterval(function() {
  if (i == 0) {

    setTimeout(function(){
      gimg1.src = src2[0];
      gimg2.src = src2[1];
      gimg3.src = src2[2];
    }, 0);

    setTimeout(function(){
      setTimeout(function(){
        gimg1.style.opacity = '1';
      },0)
      setTimeout(function(){
        gimg2.style.opacity = '1';
      },200)
      setTimeout(function(){
        gimg3.style.opacity = '1';
      },400)

    },0);



    setTimeout(function(){
      setTimeout(function(){
        gimg3.style.opacity = '0';
      },0)
      setTimeout(function(){
        gimg2.style.opacity = '0';
      },200)
      setTimeout(function(){
        gimg1.style.opacity = '0';
      },400)

    }, 3600);
    i = 1;
  }
  else if(i == 1) {
    setTimeout(function(){
      gimg1.src = src3[0];
      gimg2.src = src3[1];
      gimg3.src = src3[2];
    }, 0);

    setTimeout(function(){
      setTimeout(function(){
        gimg1.style.opacity = '1';
      },0)
      setTimeout(function(){
        gimg2.style.opacity = '1';
      },200)
      setTimeout(function(){
        gimg3.style.opacity = '1';
      },400)
    },0);



    setTimeout(function(){
      setTimeout(function(){
        gimg3.style.opacity = '0';
      },0)
      setTimeout(function(){
        gimg2.style.opacity = '0';
      },200)
      setTimeout(function(){
        gimg1.style.opacity = '0';
      },400)
    }, 3600);

    i = 2;
  }
  else if(i == 2) {
    setTimeout(function(){
      gimg1.src = src1[0];
      gimg2.src = src1[1];
      gimg3.src = src1[2];
    }, 0);
    setTimeout(function(){
      setTimeout(function(){
        gimg1.style.opacity = '1';
      },0)
      setTimeout(function(){
        gimg2.style.opacity = '1';
      },200)
      setTimeout(function(){
        gimg3.style.opacity = '1';
      },400)
    },0);

    setTimeout(function(){
      setTimeout(function(){
        gimg3.style.opacity = '0';
      },0)
      setTimeout(function(){
        gimg2.style.opacity = '0';
      },200)
      setTimeout(function(){
        gimg1.style.opacity = '0';
      },400)
    }, 3600);
    i = 0;
  }
}, 5000);




