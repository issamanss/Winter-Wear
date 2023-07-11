let headerBody = document.createElement('div');
headerBody.classList.add('header')
let logo = document.createElement('p');
logo.classList.add('logo')
logo.innerText='MANSOUR';

let navicon=document.createElement('img');
navicon.src='/photos/menu.png';
navicon.style.height='30px'
navicon.style.width='30px';
navicon.style.marginRight='20px'
navicon.style.display='none';
navicon.style.cursor='pointer';

let respnav=document.createElement('div');
respnav.id='respnav';
let respnavLinksBody=document.createElement('div');
respnavLinksBody.classList.add('respnavs-links-body')
let a1=document.createElement('a');
a1.innerText='HOME';
let a2=document.createElement('a');
a2.innerText='PRODUCTS';
let a3=document.createElement('a');
a3.innerText='CONTACT';
respnavLinksBody.appendChild(a1);
respnavLinksBody.appendChild(a2);
respnavLinksBody.appendChild(a3);
let closeNavIcon=document.createElement('img');
closeNavIcon.src='/photos/close.png';
closeNavIcon.id='closeicon';
respnav.appendChild(respnavLinksBody)
respnavLinksBody.appendChild(closeNavIcon);
document.body.appendChild(respnav)




let ul = document.createElement('ul');

let li1 = document.createElement('li');
li1.innerHTML = ' <a id="ahome" href="/HOME.html">Home</a>';
ul.appendChild(li1);

let li2 = document.createElement('li');
li2.innerHTML = ' <a id="aproducts" href="/products.html">Products</a>';
ul.appendChild(li2);

let li3 = document.createElement('li');
li3.innerHTML = ' <a id="acontact" href="contact us.html">Contact</a>';
ul.appendChild(li3);

headerBody.appendChild(logo);
headerBody.appendChild(ul);
headerBody.appendChild(navicon);
document.body.appendChild(headerBody);

function setElementDisplay() {
  
    if (document.documentElement.clientWidth <= 768) {
      ul.style.display = 'none';
      navicon.style.display='block'
    } else {
      ul.style.display = 'flex';
      navicon.style.display='none'
    }
  }

  respnav.style.display='none';
  
  window.addEventListener("resize", setElementDisplay);
  
  // Call the setElementDisplay() function initially
  setElementDisplay();
  navicon.addEventListener('click',function(){
    respnav.style.display='block';
    setTimeout(function(){
      respnav.style.opacity='1';
    },100)
  });

  closeNavIcon.addEventListener('click',function(){
    respnav.style.opacity='0'
    setTimeout(function(){
      respnav.style.display='none';
    },1000)
   
  });

  respnav.addEventListener('click',function(event){

    if(event.target!=respnavLinksBody){
      respnav.style.opacity='0'
    setTimeout(function(){
      respnav.style.display='none';
    },1000)
    }
    
  });