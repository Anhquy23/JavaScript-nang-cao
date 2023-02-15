//----------Selecting elements----------

console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));


//----------Creating and inserting elements----------

const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'We use cookied for improved functionality and analytics.';
message.innerHTML ='We use cookied for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';
// header.prepend(message);
header.append(message);
// header.append(message.cloneNode(true));
// header.before(message);
// header.after(message);


//----------Delete elements----------

document.querySelector('.btn--close-cookie')
        .addEventListener('click', function(){
            message.remove();
            message.parentElement.removeChild(message);
        })

//---------- DOM Traversing----------

const h1 = document.querySelector('h1');

// Going downwards: child
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);
h1.firstElementChild.getElementsByClassName.color = 'black';
h1.lastElementChild.getElementsByClassName.color = 'orange';

// Going upwwards: parents
console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest('header').style.backgroundColor = 'red';
h1.closest('h1').style.backgroundColor = 'blue';

// Going sideways: siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);




