function clickTab(event,tabName){
  let tab=document.querySelectorAll(".tabs");
  tab.forEach(btn => {
    btn.classList.remove("active");
  });

  event.target.classList.add("active");

  let skill=document.querySelectorAll(".skill-con");
  skill.forEach(skill => {
    skill.classList.remove("active");
  });
  document.getElementById(tabName).classList.add("active");
}

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});


