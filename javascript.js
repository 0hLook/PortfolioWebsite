document.querySelectorAll('.tab-button').forEach(button => {
  button.addEventListener('click', () => {
    // Remove active class from all buttons
    document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));

    // Add active class to the clicked button
    button.classList.add('active');

    // Hide all content sections
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

    // Show the corresponding content
    const tabId = button.getAttribute('data-tab');
    document.getElementById(tabId).classList.add('active');
  });
})

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





