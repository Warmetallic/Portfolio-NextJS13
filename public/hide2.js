// custom.js

// Get the menu list element and the toggle button element
var menuList2 = document.getElementById("menu-list2");
var menuToggle2 = document.getElementById("menu-toggle2");

// Add a click event listener to the toggle button
menuToggle2.addEventListener("click", function () {
  // Toggle the visibility of the menu list
  menuList2.style.display =
    menuList2.style.display === "none" ? "flex" : "none";
});
