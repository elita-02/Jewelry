let cards=[
    {
        title: "CARAT WEIGHT",
        image: "./svg/tre.svg",
        des: "The weight of a diamond is expressed in carats",
        id:1
    },
    {
        title: "CUT – CUT",
        image: "./svg/tre2.svg",
        des: "The cut is the most important criterion of a diamond",
        id:2
    },
    {
        title: "COLOUR – COLOR",
        image: "./svg/tre3.svg",
        des: "The white/colorless a diamond is, the more valuable it is",
        id:3
    },
    {
        title: "CLARITY – PURITY",
        image: "./svg/tre4.svg",
        des: "This unit determines the purity of a diamond",
        id:4
    },
]
let category=document.querySelector(".cotygory")

category.innerHTML = cards.map((item) =>{
    return `
           <div class="cotygory">
                    <div class="CARAT">
                        <a href="../Diamonds/svg/tre.svg">
                            <img src="${item.image}" alt="">
                        </a>
                        <p>${item.title}</p>
                        <div>${item.des}</div>
                            <button onclick="addToKard('${item.id}')">Discover now</button>
                    </div>
                    </div>
`
}).join("")




let kardArray = [];
let count = document.querySelector(".count");
let modalProduct = document.querySelector(".modal-product");

// Обновление продуктов в корзине
function updateProduct() {
    modalProduct.innerHTML = kardArray.map((item) => {
        return `
              <div class="modal-main"> 
                                 <div>
                                    <p>${item.title}</p>
                                     <div>${item.des}</div>
                                        </div>
                                        <img src="${item.image}" alt="">
                                    </div>
        `;
    }).join("");
}

// Обновление счётчика товаров в корзине
function updateCount () {
    count.innerHTML = kardArray.length
}

// Добавление товара в корзину
function addToKard (id) {
    let findProduct = cards.find((x) => x.id == id);
    if (findProduct) {
        kardArray.push(findProduct);
        updateCount();
        updateProduct();
    }
}

let kard = document.querySelector("#kard");
let modal = document.querySelector(".modal");

let closeBtn = document.getElementById("close");
let modalBtn = document.querySelector(".modal-btn");


function openModal() {
    modal.style.display = "block";
}

kard.onclick = openModal;

function closeModal() {
    modal.style.display = "none";
}
modalBtn.onclick = closeModal;

function clearKard () {
    kardArray = [] 
    updateCount() 
    updateProduct() 
}
modalBtn.onclick = clearKard;


function closeModal() {
    modal.style.display = "none";
}

function closeModal() {
    modal.style.display = "none";
}
closeBtn.onclick = closeModal;
// modalBtn.onclick-closeModal;

