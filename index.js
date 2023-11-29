const sections = document.querySelectorAll(".section");
const secControll = document.querySelectorAll(".controlls");
console.log(secControll);
const secbtn = document.querySelectorAll(".control");
console.log(secbtn);
const allSections = document.querySelector(".main-content");

function sectionToggle() {
  
  //for button clicks
  for (let i = 0; i < secbtn.length; i++) {
    secbtn[i].addEventListener("click", function () {
      let cbtns = document.querySelectorAll(".active-btn");
      cbtns.forEach((btn) => btn.classList.remove("active-btn"));
      this.classList.add("active-btn");
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
