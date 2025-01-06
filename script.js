
// Add event listeners to the menu items
const menuItems = document.querySelectorAll('.navbar .menu li a');

menuItems.forEach(item => {
    item.addEventListener('click', function() {
        // Remove active class from all items
        menuItems.forEach(link => link.classList.remove('active'));
        
        // Add active class to the clicked item
        this.classList.add('active');
    });
});


window.onscroll = function() {
    var navbar = document.querySelector(".navbar");
    if (window.scrollY > 20) { // You can adjust this value as per your requirement
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
};





// ///////////////////////////////////////////////

$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });


// typing text animation script
var typed = new Typed(".typing", {
    strings: ["YouTuber", "Frontend Developer", "Student", "Designer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});








});

const tabs = document.querySelectorAll('[data-target'),
tabContent = document.querySelectorAll('[data-content]');

tabs.forEach(tab =>{
    tab.addEventListener('click' , ()=>{
         const target = document.querySelector(tab.dataset.target)
         tabContent.forEach(tabcontent =>{
            tabcontent.classList.remove('skill-active')
        })
        target.classList.add('skill-active')

        tabs.forEach(tab =>{
            tab.classList.remove('skill-active')
        })
        tab.classList.add('skill-active')
    })
});


//PROJECT
document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab');
    const items = document.querySelectorAll('.item');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            tab.classList.add('active');

            const category = tab.dataset.category;

            // Filter items
            items.forEach(item => {
                if (category === 'all' || item.dataset.category === category) {
                    item.style.opacity = '0';
                    setTimeout(() => {
                        item.style.display = 'block';
                        setTimeout(() => {
                            item.style.opacity = '1';
                        }, 50);
                    }, 300);
                } else {
                    item.style.opacity = '0';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
});


const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.className = savedTheme;
    themeToggle.checked = savedTheme === 'dark-mode';
}

// Set initial theme if no preference is saved
if (!savedTheme) {
    body.className = 'light-mode';
    themeToggle.checked = false;
}

// Toggle theme function
themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
        body.className = 'dark-mode';
        localStorage.setItem('theme', 'dark-mode');
    } else {
        body.className = 'light-mode';
        localStorage.setItem('theme', 'light-mode');
    }
});

























// const inputElement = document.querySelector('.input');
// const bodyElment = document.querySelector('body');

// // Get Local Data
// inputElement.checked = JSON.parse(localStorage.getItem('mode'));
// updateToggle();

// function updateToggle() {
//     if (inputElement.checked) {
//         bodyElment.classList.add("dark-mode");
//         bodyElment.classList.remove("light-mode");
//     } else {
//         bodyElment.classList.add("light-mode");
//         bodyElment.classList.remove("dark-mode");
//     }
// }

// inputElement.addEventListener("input", () => {
//     updateToggle();
//     updateToggelLS();
// });

// // Save Mode to LocalStorage
// function updateToggelLS() {
//     localStorage.setItem('mode', JSON.stringify(inputElement.checked));
// }

