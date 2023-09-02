// main.js

document.addEventListener("DOMContentLoaded", function () {
    // Get the logout link element
    const logoutLink = document.querySelector("#logout-link");
  
    // Check if the logout link exists on the current page
    if (logoutLink) {
      // Add a click event listener to the logout link
      logoutLink.addEventListener("click", function (e) {
        e.preventDefault();
  
        // Display a confirmation dialog
        const isConfirmed = confirm("Are you sure you want to log out?");
  
        // If the user confirms, redirect to the logout route
        if (isConfirmed) {
          window.location.href = "/logout";
        }
      });
    }
  });
  