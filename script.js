function breakTheText(){
    var h1 = document.querySelector(".name");
    var h1Text = h1.textContent;
    var splittedText = h1Text.split("");
    
    
    var clutter = "";
    var halfValue = Math.floor(splittedText.length/2);

    splittedText.forEach(function(elem,idx){
        if(idx < halfValue){
            clutter += `<span class="a">${elem}</span>`;
        }else{
            clutter += `<span class="b">${elem}</span>`
        }
        // clutter = clutter + `<span class=>${elem}</span>` 
    });
    
    h1.innerHTML = clutter;
    
}
breakTheText();


gsap.from('.name .a',{
    y:50,
    opacity:0,
    duration:0.6,
    delay:0.5,
    stagger:0.15
})
gsap.from('.name .b',{
    y:50,
    opacity:0,
    duration:0.6,
    delay:0.5,
    stagger:-0.15
})
Shery.mouseFollower();
// Shery.imageMasker(".image-container-inner" /* Element to target.*/, {
//     mouseFollower: true,
//     text: "View",
//     ease: "cubic-bezier(0.23, 1, 0.320, 1)",
//     duration: .8,
// });


// make  image magnet
Shery.makeMagnet(".center-image" /* Element to target.*/, {
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });

//  liquad shaking 
  Shery.imageEffect(".center-image", {
    style: 2, //Select Style
    // debug: true, // Debug Panel
    config: {
      /* Config made from debug panel */
    },
    preset: "./presets/wigglewobble.json",
  });



//   Liquad effect 
//   Shery.imageEffect(".cemnter-image", {
//     style: 1 /*OR 5 for different variant */,
//     debug: true,
//   });




// gsap.from('.name span',{
//     y:50,
//     opacity:0,
//     duration:.8,
//     delay:.7,
//     stagger:-0.15
// })

// gsap.from('.name1',{
//     x:-700,
//     duration:2,
//     perspective: 400 
// })

// gsap.from('.name2',{
//     x:800,
//     duration:2,
//     perspective: 400 
// })

