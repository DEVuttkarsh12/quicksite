(function () {
  emailjs.init("YOUR_PUBLIC_KEY_HERE"); // Replace with your EmailJS public key
})();

document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this).then(
      function () {
        alert("Message Sent! I will contact you soon.");
        document.getElementById("contact-form").reset();
      },
      function (error) {
        alert("Failed to send message: " + error.text);
      }
    );
  });
