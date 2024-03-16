let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item');
    let lastItem = items[items.length - 1];
    let slide = document.querySelector('.slide');
    slide.insertBefore(lastItem, slide.firstChild);
});

function handleDropdown(dropdown) {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li');
    const selected = dropdown.querySelector('.selected');

    select.addEventListener('click', () => {
        select.classList.toggle('select-clicked');
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');
    });

    options.forEach(option => {
        option.addEventListener('click', () => {
            selected.textContent = option.textContent;
            select.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate');
            menu.classList.remove('menu-open');
            options.forEach(opt => {
                opt.classList.remove('active');
            });

            option.classList.add('active');
        });
    });
}
function funPage() {
    window.location.href = 'fun.html';
}

document.querySelectorAll('.top-bar a')[1].addEventListener('click', function () {
    window.location.href = '/Home/About'; // Navigate to the About action in HomeController
});

document.querySelector('.fa-user').addEventListener('click', function () {
    window.location.href = '/Home/Login'; // Navigate to the Login action in HomeController
});


document.querySelectorAll('.top-bar a')[0].addEventListener('click', function() {
    window.location.href = 'Main.html';
});
document.querySelectorAll('.top-bar a')[1].addEventListener('click', function() {
    window.location.href = 'About.html';
});
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.top-bar a')[3].addEventListener('click', function(event) {
        event.preventDefault();
        const contactSection = document.getElementById('contact');
        contactSection.scrollIntoView({ behavior: 'smooth' });
    });
});