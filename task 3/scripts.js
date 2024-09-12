// scripts.js

// Toggle Mobile Menu
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuButton = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    mobileMenuButton.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuButton.classList.toggle('active');
    });
});

// Smooth Scrolling for Anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Enroll in Course
document.querySelectorAll('.enroll-btn').forEach(button => {
    button.addEventListener('click', function (e) {
        e.preventDefault();
        const courseName = this.previousElementSibling.previousElementSibling.textContent; // Get course name
        addToDashboard(courseName);
    });
});

function addToDashboard(courseName) {
    const courseList = document.getElementById('course-list');
    const listItem = document.createElement('li');
    listItem.textContent = courseName;
    courseList.appendChild(listItem);
}
