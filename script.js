function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
}

function validateForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  const formStatus = document.getElementById("formStatus");

  if (name === "" || email === "" || message === "") {
    formStatus.textContent = "Please fill in all fields.";
    formStatus.style.color = "red";
    return false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    formStatus.textContent = "Please enter a valid email address.";
    formStatus.style.color = "red";
    return false;
  }

  formStatus.textContent = "Thank you for your message! We will get back to you soon.";
  formStatus.style.color = "green";

  document.getElementById("contactForm").reset(); // Reset form after submission
  return false; // Prevent form from submitting to server
}
