const sections = document.querySelectorAll(".section");
const secControll = document.querySelectorAll(".controlls");
console.log(secControll);
const secbtn = document.querySelectorAll(".control");
console.log(secbtn);
const allSections = document.querySelector(".main-content");
const con5 = document.querySelector(".fa-address-book");
console.log(con5);
const body = document.querySelector(".main-content");
const theme = document.querySelector(".fa-themeisle");
let state = "inactive";
const headertext = document.querySelector(".right");
const abouttext = document.querySelector(".left-about");
const smalltext = document.querySelectorAll(".small-text");
const tophead = document.querySelector(".h2");
const topTim = document.querySelectorAll(".thim");
const bg_text = document.querySelectorAll(".bg-text");
const blog = document.querySelectorAll(".blog");
console.log(smalltext);


// Theme setting
theme.addEventListener('click', function(e){
if(state === "inactive"){
  body.style.backgroundColor = "white";
   headertext.style.color = "#101320";
   abouttext.style.color = "#101320";

  for (let i = 0; i < smalltext.length; i++) {
    smalltext[i].style.color = "#101320";
  }
  for (let i = 0; i < topTim.length; i++) {
    topTim[i].style.color = " #27ae60";
  }
   for (let i = 0; i < bg_text.length; i++) {
     bg_text[i].style.color = " rgba(13, 13, 15, 0.2)";
   }
   
  for (let i = 0; i < blog.length; i++) {
    blog[i].style.border = " 2px solid #101320";
  }
    state = "active";
}
else if(state === "active")
{
 body.style.backgroundColor = "#101320";
  headertext.style.color = "white";
    abouttext.style.color = "white";
  for (let i = 0; i < smalltext.length; i++) {
    smalltext[i].style.color = "#ADBECD";
  }
   for (let i = 0; i < topTim.length; i++) {
     topTim[i].style.color = "white";
   }
   
   for (let i = 0; i < bg_text.length; i++) {
     bg_text[i].style.color = "#2A2E35";
   }

   
  for (let i = 0; i < blog.length; i++) {
    blog[i].style.border = " 2px solid #454e56";
  }
 state = "inactive";
}
});



// con5.addEventListener("click", function (e) {
//   body.classList.add("back");
// });
for (let i = 0; i < secbtn.length; i++) {
  secbtn[i].addEventListener("click", function (e) {
    console.log("Button clicked:", e.target);
    if (e.target === con5) {
      console.log("Adding 'back' class to body");
      body.classList.add("back");
      console.log("done");
    } else {
      console.log("Removing 'back' class from body");
      body.classList.remove("back");
      console.log("Undone");
    }
  });
}

function sectionToggle() {
  //for button clicks
  for (let i = 0; i < secbtn.length; i++) {
    secbtn[i].addEventListener("click", function (e) {
      let cbtns = document.querySelectorAll(".active-btn");
      cbtns.forEach((btn) => btn.classList.remove("active-btn"));
      this.classList.add("active-btn");

      // if(e.target = secbtn[5])
      //  body.classList.add("back");
      // else
      //   body.classList.add("back");
    });
  }

  // Targeting all in main-content
  document.addEventListener("click", function (e) {
    const id = e.target.closest(".control")?.dataset.id;
    //if id is true, which is always true, (ie, if there is an id, (the only id usd is the active) we remove the active class from the section
    if (id) {
      //loop and remove active claslist from all section buttons
      secControll.forEach((btn) => {
        btn.classList.remove("active");
      });
      //add active classlist to target button
      e.target.closest(".control").classList.add("active");

      //Loop through and remove active frm the sections
      sections.forEach((section) => section.classList.remove("active"));

      //target the section agian by passing the actual id. this id matches the target
      let element = document.getElementById(id);
      element.classList.add("active");
    }
  });
}
sectionToggle();
console.log("hi");
