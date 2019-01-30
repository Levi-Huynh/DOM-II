// Your code goes here

//Home Nav turns red on click
let NavAnchor = document.querySelectorAll('a');
NavAnchor[0].addEventListener('click', e => {
    e.currentTarget.style.color='red'
});



//PREVENT DEFAULT: stop nav button about us from refreshing page 
NavAnchor[1].addEventListener('click', e=> {
    //console.log('nav button prevented from refreshing page');
    e.preventDefault();
});



//Logo Header Fun Bus turns green when mouse moves on it
let logoHeading = document.querySelector('.logo-heading');
logoHeading.addEventListener('mouseenter', e => {
        e.currentTarget.style.color='green'
});

//"welcome to fun bus" header turns blue when wheel on mouse used
let h2 = document.querySelectorAll('h2');
h2[0].addEventListener('wheel', e => {
        e.currentTarget.style.color='blue'
});

//Lets Go div class text content turns pink with mouse down
let textContentDivs = document.querySelector('.text-content');
textContentDivs.addEventListener('mousedown', e => {
        e.currentTarget.style.backgroundColor='lightpink';
        
})


//Lets go header bg turns light blue when mouse is released over it
// STOP PROPOGATION: also stops events from bubbling (parent event from bubbling into child event since this header is nested within class: 'text-content')
h2[1].addEventListener('dblclick', e=> {
        e.currentTarget.style.backgroundColor='lightblue';
        e.stopPropagation();
        });


 let button = document.querySelectorAll('.btn');
 button[0].addEventListener('mouseleave', e=> {
        e.currentTarget.style.transform="rotate(7deg)";
 }) ;      

button[1].addEventListener('mouseover', e => {
        e.currentTarget.style.visibility='hidden';
});

button[2].addEventListener('contextmenu', e =>{
        e.currentTarget.style.borderColor='red';
});

h2[2].addEventListener('auxclick', e => {
    e.currentTarget.style.fontStyle="bold";
})