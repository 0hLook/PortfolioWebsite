// Project buttons menu
document.querySelectorAll('.tabButton').forEach(button => {
  button.addEventListener('click', () => {

    document.querySelectorAll('.tabButton').forEach(btn => btn.classList.remove('active'));

    button.classList.add('active');

    document.querySelectorAll('.tabContent').forEach(content => content.classList.remove('active'));

    const tabId = button.getAttribute('data-tab');
    document.getElementById(tabId).classList.add('active');
  });
})

// Animation for projects and experience
document.addEventListener("DOMContentLoaded", () => {
  const tabButtons = document.querySelectorAll(".tabButton");
  const tabContents = document.querySelectorAll(".tabContent");

  tabButtons.forEach(button => {
      button.addEventListener("click", () => {
          const targetTab = button.getAttribute("data-tab");

          // Remove active class from buttons and add it to the clicked button
          tabButtons.forEach(btn => btn.classList.remove("active"));
          button.classList.add("active");

          // Reset animations
          tabContents.forEach(content => {
              content.classList.remove("active");
              const items = content.querySelectorAll(".educationBox");
              items.forEach(item => item.style.opacity = "0"); // Reset opacity
          });

          // Shows the target tab content and triggers the fade-in
          const activeContent = document.getElementById(targetTab);
          activeContent.classList.add("active");

          // Trigger the animation for each item in the active tab
          const items = activeContent.querySelectorAll(".educationBox");
          items.forEach((item, index) => {
              setTimeout(() => {
                  item.style.opacity = "1"; // Gradually make items visible
              }, index * 20); // Staggered delay for each item
          });
      });
  });
});


// Fade in effect
document.addEventListener("DOMContentLoaded", function () {
  const fadeInElements = document.querySelectorAll(".fade-in");

  function checkVisibility() {
      fadeInElements.forEach((element) => {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.85 && rect.bottom >= 0) {
              element.classList.add("visible");
          }
      });
  }

  window.addEventListener("scroll", checkVisibility);
  checkVisibility(); 
});


function SendMail() {
  const contactForm = document.querySelector("#contactForm");
  const submitButton = document.querySelector(".btn-submit");
  const nameInput = document.querySelector("#name");
  const emailInput = document.querySelector("#email");
  const msgInput = document.querySelector("#message");

  const pkey = "kptRX_mwi5uwl6lCE";
  const skey = "service_yhi2fra";
  const tkey = "template_hj0nnd7";

  emailjs.init(pkey);

  contactForm.addEventListener("submit", e => {
    event.preventDefault();

    submitButton.innerText = "Waiting...";

    const inputFields = {
      name: nameInput.value,
      email: emailInput.value,
      message: msgInput.value
    }

    emailjs.send(skey, tkey, inputFields)
      .then(() => {
        submitButton.innerText = "Message Sent!";

        nameInput.value = "";
        emailInput.value = "";
        msgInput.value = "";
      }, (error) => {
          submitButton.innerText = "Something Went Wrong";
      });
  });

}

function toggleMenu() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('show');
}


/*
function sendMail() {
  let params = {
    name : document.getElementById("name").value,
    email : document.getElementById("email").value,
    message : document.getElementById("message").value,
  }

  event.preventDefault();
  emailjs.send("service_yhi2fra","template_hj0nnd7",params).then(alert("Email Sent!"))
}
*/





