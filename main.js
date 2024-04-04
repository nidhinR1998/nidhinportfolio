document.addEventListener('DOMContentLoaded', function() {
    // Disable right-click
    document.addEventListener('contextmenu', function(event) {
        event.preventDefault(); // Prevent default right-click behavior
    });
    
    // Typed.js initialization
    var typed = new Typed(".text", {
        strings: ["Fullstack Developer", "Web Developer"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });
    
    // Other JavaScript code for your portfolio page
    // ...
});
