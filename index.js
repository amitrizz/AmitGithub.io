document.addEventListener("scroll", () => {
    const header = document.getElementById("header");
    if (window.scrollY > 0) {
        header.style.backgroundColor = "#222"; // Change background when scrolling
    } else {
        header.style.backgroundColor = "#333"; // Default background
    }
});


const scriptURL = "https://script.google.com/macros/s/AKfycbyvm3FusSJ-o8GcWTXjEql-ju_igaQy6rQVETl6HPdrFmJCvw9_7fU6fG-wJKW-bKA6/exec";

const form = document.forms["submit-to-google-sheet"];
const msg=document.getElementById('msg');


form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML="Message Sent Sucessfully";
      setTimeout(function(){
          msg.innerHTML="";
      },5000);
    })
    form.reset()
    .catch((error) => console.error("Error!", error.message));
});


var tablinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-content");
function openTab(tabname) {
  for (tabcontent of tabContents) {
    tabcontent.classList.remove("active-tab");
  }
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}


var sidemenu = document.getElementById("sidemenu");
function openmenu() {
  sidemenu.style.right = "0";
}
function closemenu() {
  sidemenu.style.right = "-200px";
}