



let password = document.getElementById("password");
let eyeSlash = document.getElementById("eyeSlash");
let eyeOpen = document.getElementById("eyeOpen");
let password2 = document.getElementById("password2");
let eyeSlash2 = document.getElementById("eyeSlash2");
let eyeOpen2 = document.getElementById("eyeOpen2");
let cancel = document.getElementsByClassName("cancel");
let gallary = document.getElementById("gallary");
let body = document.getElementById("body");
let header = document.getElementById("header");
let buyHero = document.getElementById("buyHero");
let properties = document.getElementById("properties");
let footer = document.getElementById("footer");
let propertyContainer = document.getElementById("propertyContainer");
let propertyImage = document.querySelectorAll(".propertyMainContent .propertyContent img");
let prop = document.querySelectorAll(".smallGallery .smallGallary1 div img");


$(document).ready(function(){
  // toggle collapse //
  $nav = $('.nav');
  $toggleCollapse = $('.toggle-collapse');
  $toggleCollapse.click(function (){
    $nav.toggleClass('collapse');
})

    $(".owl-carousel").owlCarousel({
        items:1,
        loop:true,
        autoplay:true,
        autoplayTimeout:11000,
        autoplayHoverPause:true,
        animateOut: 'fadeOut',
        dot: false
    });
   

    // activating animate on scroll
  AOS.init();
  })
// $(document).ready(function(){
//     $(".smallGallary1").owlCarousel({
//         items:5,
//         loop:true,
//         autoplay:true,
//         autoplayTimeout:1000,
//         autoplayHoverPause:true,
//         // animateOut: 'fadeOut',
//         dot: false
//     });

//   })

function showPassword() {
    if (password.type === "password") {
      password.type = "text";
      eyeSlash.style.display = "none";
      eyeOpen.style.display = "block";
  } else{
    password.type = "password";
      eyeSlash.style.display = "block";
      eyeOpen.style.display = "none";
  }
}
function showPassword2() {
    if (password2.type === "password") {
      password2.type = "text";
      eyeSlash2.style.display = "none";
      eyeOpen2.style.display = "block";
  } else{
    password2.type = "password";
      eyeSlash2.style.display = "block";
      eyeOpen2.style.display = "none";
  }
}






propertyImage.forEach(img => {
    // let footerContent = document.getElementsByClassName("footerContent");
    img.addEventListener("click", ()=>{
      let bigImage = document.getElementById("bigImage")
      gallary.classList.remove("hide");
      header.classList.add("hide");
      propertyContainer.classList.add("hide");
      properties.classList.add("hide");
      properties.classList.remove("show");
      buyHero.classList.add("hide");
      footer.classList.add("hide");
      footer.classList.remove("show");
      // footer.style.display = "none"
      // footerContent.style.display = "none"
      gallary.classList.add("show");
      // body.classList.add("hide");
      bigImage.src = img.src;
      
      // console.log(img.src)
    })
})


function remove() {
  let body = document.getElementById("body");
    gallary.classList.add("hide");
    header.classList.remove("hide");
    propertyContainer.classList.remove("hide");
    buyHero.classList.remove("hide");
    footer.classList.remove("hide");
    gallary.classList.remove("show");
    // body.classList.remove("hide");
}









prop.forEach(pic => {
  pic.parentNode.addEventListener("click", ()=>{
    let imageContainer = document.querySelectorAll(".smallGallery .smallGallary1 div");
    imageContainer.forEach(container =>{
      container.addEventListener("click", ()=>{
        let bigImage = document.getElementById("bigImage");
         bigImage.src = pic.src;
      console.log(pic.src);
      })
    })
  })
})    



//   var owl = $('.owl-carousel');
// owl.owlCarousel({
//     items:4,
//     loop:true,
//     margin:10,
//     autoplay:true,
//     autoplayTimeout:1000,
//     autoplayHoverPause:true
// });
// $('.play').on('click',function(){
//     owl.trigger('play.owl.autoplay',[1000])
// })
// $('.stop').on('click',function(){
//     owl.trigger('stop.owl.autoplay')
// })

