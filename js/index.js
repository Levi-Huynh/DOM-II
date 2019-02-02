// Your code goes here

//Home Nav turns red on click
let NavAnchors = document.querySelectorAll('a');
// NavAnchor[0].addEventListener('click', e => {
//     NavAnchor[0].style.color='red'
// });



class Anchors {

        constructor(NavAnchor) {
                this.NavAnchor = NavAnchor;
        
                this.NavAnchor.addEventListener('click', this.ChangeStyle.bind(this));
        }

       ChangeStyle() {

               this.NavAnchor.style.transform='rotate(90deg)';
               this.NavAnchor.style.transitionDuration='500ms';
               this.NavAnchor.style.color='teal';
       }

}

NavAnchors.forEach(NavAnchor => {
        return new Anchors(NavAnchor);
});




//PREVENT DEFAULT: stop nav button about us from refreshing page 
NavAnchors[1].addEventListener('click', e=> {
    //console.log('nav button prevented from refreshing page');
    e.preventDefault();
});



//Logo Header Fun Bus turns green when mouse moves on it
let logoHeading = document.querySelector('.logo-heading');
logoHeading.addEventListener('mouseenter', e => {
        // logoHeading.style.color='green'
        logoHeading.style.animation='bounce 2s 4';
});

//"welcome to fun bus" header turns blue when wheel on mouse used
let h2 = document.querySelectorAll('h2');
// h2[0].addEventListener('wheel', e => {
//        h2[0].style.color='blue'
// });

class H2headers {
        constructor(header2) {
                this.header2 = header2;
                this.header2.addEventListener('dblclick', this.h2Animation.bind(this));
                
        }

        h2Animation() {
                this.header2.style.animation="bounceIn 2s 3";
        }
}

h2.forEach(header2 => {
        return new H2headers(header2);
});

//Lets Go div class text content turns pink with mouse down
let textContentDivs = document.querySelector('.text-content');
textContentDivs.addEventListener('dblclick', e => {
        textContentDivs.style.backgroundColor='lightpink';
        
})


//Lets go header bg turns green when mouse is released over it
// STOP PROPOGATION: also stops events from bubbling (parent event from bubbling into child event since this header is nested within class: 'text-content')
h2[1].addEventListener('mousedown', e=> {
        h2[1].style.backgroundColor='green';
        e.stopPropagation();
        });


 let button = document.querySelectorAll('.btn');
 button[0].addEventListener('mouseleave', e=> {
        button[0].style.transform="rotate(7deg)";
 }) ;      

button[1].addEventListener('mouseover', e => {
        button[1].style.visibility='hidden';
});

button[2].addEventListener('contextmenu', e =>{
       button[2].style.borderColor='red';
});


let bottomImg = document.querySelector('.content-destination img');
bottomImg.addEventListener('click', e=> {
        bottomImg.src='img/squirel.jpg';
});

let Images = document.querySelectorAll('img');

class Image {
        constructor(image) {
         this.image = image;
         this.image.addEventListener('dblclick', this.ChangeImg.bind(this));    
        }

        ChangeImg(){
                this.image.src='img/giphy.webp';
        }
}

Images.forEach(image => {
        return new Image(image);
} );

// let body = document.querySelector('.body');
// body.addEventListener('click', e=> {
//       body.style.backgroundColor= 'coral';
// })

  
//   body.addEventListener('wheel', e=> {
//         body.style.backgroundColor= 'transparent';
//   })

 
// window.addEventListener("scroll", () => {
//         const intro = document.querySelector(".intro p");
//         intro.style.color =
//           "rgb(" + random(0, 255) + "," + random(0, 255) + "," + random(0, 255) + ")";
//       });


  