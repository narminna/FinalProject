document.addEventListener('DOMContentLoaded', function () {
    const sortDropdown = document.getElementById('sortDropdown');
    const dropdownMenu = document.getElementById('dropdownMenu');
    const selectedOption = document.getElementById('selectedOption');
  
    sortDropdown.addEventListener('click', function () {
      dropdownMenu.classList.toggle('hidden');
    });
  
    document.querySelectorAll('#dropdownMenu .dropdown-item').forEach(item => {
      item.addEventListener('click', function (event) {
        event.preventDefault();
        selectedOption.textContent = event.target.textContent;
        dropdownMenu.classList.add('hidden');
      });
    });
});
