let footerbody=document.createElement('div');
footerbody.classList.add('footer');

let imgbody=document.createElement('div');
imgbody.classList.add('imgbody');
let logoi=document.createElement('img');
logoi.classList.add('logoi')
logoi.src='/photos/logo.png';
imgbody.appendChild(logoi);
footerbody.appendChild(imgbody);


let timeBody=document.createElement('div');
timeBody.classList.add('timebody');

let clockimg=document.createElement('img');
clockimg.classList.add='clockimg';
clockimg.src='/photos/clock (1).png';

timeBody.appendChild(clockimg);

let p4=document.createElement('p');
p4.textContent='open time 9:00 am';
timeBody.appendChild(p4);

let p5=document.createElement('p');
p5.textContent='closed time 8:00 pm';
timeBody.appendChild(p5);

let p6=document.createElement('p');
p6.textContent='From MON to SAT';
timeBody.appendChild(p6);

footerbody.appendChild(timeBody);


let deliverybody=document.createElement('div');
deliverybody.classList.add('deliverybody');
let img2=document.createElement('img');
img2.classList.add('deliveryimg')
img2.src='/photos/truck.png';
deliverybody.appendChild(img2);

let p1=document.createElement('p');
p1.textContent='Delivery service within Beirut and its environs';

let p2=document.createElement('p');
p2.textContent='cost:3$';

let p3=document.createElement('p');
p3.textContent='follow us:';

deliverybody.appendChild(p1);
deliverybody.appendChild(p2);
deliverybody.appendChild(p3);

let iconsbody=document.createElement('div');
iconsbody.classList.add('iconsbody');



let icon1 = document.createElement('img');
icon1.src='/photos/facebook.png';
let icon2 = document.createElement('img');
icon2.src='/photos/instagram.png';
let icon3 = document.createElement('img');
icon3.src='/photos/whatsapp.png';

iconsbody.appendChild(icon1);
iconsbody.appendChild(icon2);
iconsbody.appendChild(icon3);

deliverybody.appendChild(iconsbody)


footerbody.appendChild(deliverybody);
document.body.appendChild(footerbody);


