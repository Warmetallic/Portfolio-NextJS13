// custom.js

// Get the menu list element and the toggle button element
var menuList = document.getElementById("menu-list");
var menuToggle = document.getElementById("menu-toggle");

// Add a click event listener to the toggle button
menuToggle.addEventListener("click", function () {
  // Toggle the visibility of the menu list
  menuList.style.display = menuList.style.display === "none" ? "flex" : "none";
});
