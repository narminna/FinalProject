document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.fa-user').addEventListener('click', function() {
        window.location.href = 'login.html';
    });

    document.querySelectorAll('.top-bar a')[0].addEventListener('click', function() {
        window.location.href = 'main.html';
    });

    document.querySelectorAll('.top-bar a')[1].addEventListener('click', function() {
        window.location.href = 'about.html';
    });
});
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.top-bar a')[3].addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'main.html#contact';
    });
});