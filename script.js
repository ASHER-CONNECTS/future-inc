// Initialize EmailJS
(function () {
  emailjs.init("96U1EnA_8LsSvgwqN"); // e.g., "En123ABC456"
})();

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const successMessage = document.getElementById("success-message");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    emailjs
      .send("service_u9lsmgp", "template_kpdwzwf", {
        from_name: name,
        reply_to: email,
        message: message,
      })
      .then(
        function () {
          successMessage.style.display = "block";
          form.reset();
          setTimeout(() => {
            successMessage.style.display = "none";
          }, 5000);
        },
        function (error) {
          alert("Failed to send message. Please try again later.");
          console.error("EmailJS Error:", error);
        }
      );
  });
});
