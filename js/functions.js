function copyText() {
  navigator.clipboard.writeText("alvinjoshua93@gmail.com")
    .then(() => {
      // Show the custom message
      const copyMessage = document.getElementById("copyMessage");
      copyMessage.style.display = "block";

      // Hide the message after a delay
      setTimeout(() => {
        copyMessage.style.display = "none";
      }, 2000);
    })
    .catch((err) => {
      console.error('Unable to copy text: ', err);
    });
}

function copyPhoneNumber() {
  navigator.clipboard.writeText("123456789")
    .then(() => {
      // Show the custom message
      const copyMessage = document.getElementById("copyMessage");
      copyMessage.textContent = "Phone number copied!";
      copyMessage.style.color = "#2ecc71"; // Green color
      copyMessage.style.display = "block";

      // Hide the message after a delay
      setTimeout(() => {
        copyMessage.style.display = "none";
      }, 2000);
    })
    .catch((err) => {
      console.error('Unable to copy phone number: ', err);
    });
}
