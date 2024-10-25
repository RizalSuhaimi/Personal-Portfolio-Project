document.getElementById("contactForm").onsubmit = function(event) {
    event.preventDefault();
    alert("This is still in development. Your message was not sent");
};

const dropdownToggle = document.getElementById("dropdown-toggle");
const dropdownContent = document.getElementById("dropdown-content");

// Add click event to toggle the dropdown
dropdownToggle.addEventListener("click", event => {
    event.preventDefault(); // Prevent default anchor behaviour

    // Toggle the "show" class to either display or hide the dropdown
    dropdownContent.classList.toggle("show");
});

// Close the dropdown if clicked outside
window.addEventListener("click", event => {
    if (!event.target.closest("#dropdown-toggle")) {
        if (dropdownContent.classList.contains("show")) {
            dropdownContent.classList.remove("show");
        }
    }
});