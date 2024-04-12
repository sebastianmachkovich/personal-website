// Toggle icon navbar 
let menuIcon = document.querySelector("#menu-icon"); 
let navbar = document.querySelector(".navbar"); 

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x'); 
  navbar.classList.toggle('active'); 
} 

// scroll sections 
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a"); 

window.onscroll = () => { 
  sections.forEach(section => {
    let top = window.scrollY;
    let offset = section.offsetTop - 100;
    let height = section.offsetHeight;
    let id = section.getAttribute("id");

    if (top >= offset && top < offset + height) {
      // active navbar links
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document.querySelector("header nav a[href*=" + id + "]").classList.add("active");
      });
    }
  }); 

  // sticky navbar on scroll script
  let header = document.querySelector("header"); 
  
  header.classList.toggle("sticky", window.scrollY > 100); 

  // remove toggle icon and navbar when click navbar links (scroll)
  menuIcon.classList.remove('bx-x'); 
  navbar.classList.remove('active'); 
} 

// Link contact form to email 
const form = document.getElementById("form"); 
const fullName = document.getElementById("name");
const email = document.getElementById("email"); 
const phone = document.getElementById("phone"); 
const subject = document.getElementById("subject"); 
const message = document.getElementById("message"); 

function sendEmail() {
  const bodyMessage = `Full Name: ${fullName.value} <br> Email: ${email.value} <br> Phone: ${phone.value} <br> Subject: ${subject.value} <br> Message: ${message.value}`; 

  Email.send({
    SecureToken : "34793859-40ee-4e14-a09b-14fdc9bc5245", 
    To : 'sebastian.machkovich@gmail.com', 
    From : "sebastian.machkovich@gmail.com", 
    Subject : subject.value, 
    Body : bodyMessage 
}).then(
  message => {
    if (message === "OK") {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success"
      }); 
  } 
}); 
} 

form.addEventListener("submit", (e) => { 
  e.preventDefault(); 

  sendEmail(); 

  form.reset(); 
  return false; 
}); 