const dropdowns = document.querySelectorAll('.dropdown');
const currencyDropdowns = document.querySelectorAll('.currency');
function handleDropdown(dropdown) {
    const selector = dropdown.que
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
dropdowns.forEach(dropdown => {
    handleDropdown(dropdown);
});

currencyDropdowns.forEach(currencyDropdown => {
    handleDropdown(currencyDropdown);
});

let products ={
    data:[{
        productName: "CaffeIn",
        category: "Fun",
        image: "/images/img1.jpg"
    },
    {
        productName: "BeerBasha",
        category: "Aethetic",
        image: "/images/img2.jpg"
    },
    {
        productName: "BarflySocialHub",
        category: "Coffeeshop",
        image: "/images/img3.jpg"
    },
    {
        productName: "ArteDiCafe",
        category: "Handcraft",
        image: "/images/img4.jpg"
    },
    {
        productName: "Urban",
        category: "Aethetic",
        image: "/images/img5.jpg"
    },
    {
        productName: "Unbar",
        category: "Aethetic",
        image: "/images/img6.jpg"
    },
    {
        productName: "fencing",
        category: "Sport",
        image: "/images/img7.jpg"
    },
    {
        productName: "PortalGames",
        category: "Fun",
        image: "/images/img8.jpg"
    },
    {
        productName: "UlduzPaintballclub",
        category: "Creative",
        image: "/images/img9.jpg"
    },
    {
        productName: "Paranormal",
        category: "Fun",
        image: "/images/img10.jpg"
    },
    {
        productName: "Phobia",
        category: "Fun",
        image: "/images/img11.webp"
    },
    {
        productName: "Carting",
        category: "Sport",
        image: "/images/img12.webp"
    },
    {
        productName: "Farhouse",
        category: "Art",
        image: "/images/img13.jpg"
    },    
    ],
};

for(let i of products.data){
    let card = document.createElement("div");

    card.classList.add("card", i.category,"hide");

    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");

    let image = document.createElement("img");
    image.setAttribute("src", i.image);

    imgContainer.appendChild(image);
    card.appendChild(imgContainer);

    let container = document.createElement("div");
    container.classList.add("container");

    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    card.appendChild(container);
    document.getElementById("products").appendChild(card)
}

function filterProduct(value) {
    let buttons = document.querySelectorAll(".btn");
    buttons.forEach((button) => {
        if (value.toUpperCase() === button.innerText.toUpperCase()) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }
    });
    let elements = document.querySelectorAll(".card");

    elements.forEach((element) => {
        if(value == "all"){
            element.classList.remove("hide");
        }
        else{
            if(element.classList.contains(value)) {
                element.classList.remove("hide")
            }else{
                element.classList.add("hide");
            }
        }
    });
}

function searchProducts() {
    let searchInput = document.getElementById("search-input").value.toUpperCase();
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");

    elements.forEach((element, index) => {
        let productName = element.innerText.toUpperCase();
        if (productName.startsWith(searchInput)) {
            cards[index].classList.remove("hide");
        } else {
            cards[index].classList.add("hide");
        }
    });
}
document.getElementById("search").addEventListener("click", () => {
    searchProducts();
});
document.getElementById("search-input").addEventListener("keypress", (event) => {
    if (event.key === 'Enter') {
        searchProducts();
    }
})
window.onload = () => {
    filterProduct("all");
};
document.querySelector('.fa-user').addEventListener('click', function() {
    window.location.href = 'login.html';
});
document.querySelectorAll('.top-bar a')[0].addEventListener('click', function() {
    window.location.href = 'main.html';
});
document.querySelectorAll('.top-bar a')[1].addEventListener('click', function() {
    window.location.href = 'about.html';
});
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.top-bar a')[3].addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'main.html#contact';
    });
});