// Get HTML elements
const signupForm = document.getElementById("signup-form");
const emailInput = document.getElementById("email");
const errorMessage = document.getElementById("error-message");
const signupCard = document.getElementById("signup-card");
const successMessage = document.getElementById("success-message");
const userEmail = document.getElementById("user-email");
const dismissButton = document.getElementById("dismiss-button");

// Email validation function
function isValidEmail(email) {
  if (!email.includes("@")) {
    return false;
  } else if (!email.includes(".")) {
    return false;
  } else {
    return true;
  }
}

// Show error
function showError(message) {
  errorMessage.textContent = message;
  errorMessage.classList.remove("hidden");
}

// Remove error
function removeError() {
  errorMessage.textContent = "";
  errorMessage.classList.add("hidden");
}

// Validate email while typing
emailInput.addEventListener("input", () => {
  const email = emailInput.value.trim();

  if (isValidEmail(email)) {
    removeError();
  }
});

// Submit form
signupForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = emailInput.value.trim();

  // Check if email is empty
  if (email === "") {
    showError("Email address is required");
    emailInput.focus();
    return;
  }

  // Check if email is invalid
  if (!isValidEmail(email)) {
    showError("Valid email required");
    emailInput.focus();
    return;
  }

  removeError();

  // Display submitted email
  userEmail.textContent = email;

  // Hide sign-up card
  signupCard.classList.add("hidden");

  // Show success message
  successMessage.classList.remove("hidden");
  successMessage.classList.add("flex");

  dismissButton.focus();
});

// Dismiss success message
dismissButton.addEventListener("click", () => {
  // Hide success message
  successMessage.classList.add("hidden");
  successMessage.classList.remove("flex");

  // Show sign-up card again
  signupCard.classList.remove("hidden");

  // Reset form
  signupForm.reset();

  // Remove previous errors
  removeError();

  emailInput.focus();
});
