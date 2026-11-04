// Select the form and result section
const form = document.getElementById("__________");
const result = document.getElementById("__________");

// Listen for form submission
form.addEventListener("__________", function(event) {
    event.__________(); // Stops page refresh

    // Get values from the inputs
    const name = document.getElementById("__________").__________;
    const email = document.getElementById("__________").__________;
    const message = document.getElementById("__________").__________;

    // Display the info back to the user
    result.innerHTML = `
      <h3>__________</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>
    `;
});S