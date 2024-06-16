// script.js

function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.intro, .jobs-container, .contact').forEach(section => {
        section.style.display = 'none';
    });
    
    // Show the clicked section
    document.getElementById(sectionId).style.display = 'block';
}
