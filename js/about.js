document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.fa-user').addEventListener('click', function() {
        window.location.href = 'login.html';
    });


});
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.top-bar a')[3].addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'main.html#contact';
    });
});