// let products=[
//     {
//         title: "BESTSELLER",
//         image: "./svg/oz.svg",
//         des: "Trendy models of our experts, for the love of your life selected",
//         price: 4000,
//         id:1
//     },
//     {
//         title: "SOLITAIRE",
//         image: "./svg/imag2.svg",
//         des: "Trendy models of our experts, for the love of your life selected",
//         price: 2000,
//         id:2
//     },
//     {
//         title: "PLATINUM",
//         image: "./svg/tree.svg",
//         des: "Trendy models of our experts, for the love of your life selected",
//         price: 5000,
//         id:3
//     },
//     {
//         title: "CHEAP",
//         image: "./svg/foor.svg",
//         des: "Trendy models of our experts, for the love of your life selected",
//         price: 17000,
//         id:4
//     },
  
// ]
// let category=document.querySelector(".cotygory")

// category.innerHTML =products.map((item) =>{
//     return `
//      <div class="cotygory">
//                 <div class="BESTSELLER">
//                 <a href="./pages/DiscoverNow/btn.html">
//                     <img src="${item.image}" alt="">
//                     </a>
//                     <p>${item.title}</p>
                    
//                     <div>Trendy models of our experts, for the love of your life selected</div>
//                         <button onclick="addToKard('${item.id}')">Discover now</button>
//                 </div>
//             </div>
// `
// }).join("")

// let kardArray =[]
// let count = document.querySelector(".count")
// let modalProduct =  document.querySelector(".modal-product")

// function updateProduct () {

//     modalProduct.innerHTML =kardArray.map((item) => {
//         return `
//      <div class="modal-main"> 
//                                 <div>
//                                     <h4>${item.title}</h4>
//                                     <p>${item.price}</p>
//                                 </div>
//                                 <img src="${item.image}" alt="">
//                             </div>
//         `
//     }).join("")
// }

// function updateCount (){
//     count.innerHTML = kardArray.length
// }
 
// function addToKard (id) {
//     let findProduct = products.find((x) => x.id ==id)
//     if(findProduct) {
//        kardArray.push(findProduct)
//        updateCount()
//        updateProduct()
//     }
// }
// let kard =document.querySelector("#kard")
// let closeButton=document.getElementById("close")
// let modal =document.querySelector(".modal")

// let modalBtn = document.querySelector(".modal-btn");

// function closeModal() {
//     modal.style.display = "none";
// }

// function clearkard() {
//     cartArray = [];
//     updateCount();
//     updateProduct();
// }

// // Назначаем оба обработчика
// modalBtn.addEventListener("click", closeModal);

// modalBtn.addEventListener("click", clearkard);



// function openModal () {
//     modal.style.display="block"
// }

// kard.onclick = openModal

// function closeModal () {
//     modal.style.display= "none";
// }
// closeButton.onclick = closeModal;





let products = [
    {
        title: "BESTSELLER",
        image: "./svg/oz.svg",
        des: "Trendy models of our experts, for the love of your life selected",
        price: 4000,
        id: 1
    },
    {
        title: "SOLITAIRE",
        image: "./svg/imag2.svg",
        des: "Trendy models of our experts, for the love of your life selected",
        price: 2000,
        id: 2
    },
    {
        title: "PLATINUM",
        image: "./svg/tree.svg",
        des: "Trendy models of our experts, for the love of your life selected",
        price: 5000,
        id: 3
    },
    {
        title: "CHEAP",
        image: "./svg/foor.svg",
        des: "Trendy models of our experts, for the love of your life selected",
        price: 17000,
        id: 4
    },
];

let category = document.querySelector(".cotygory");

category.innerHTML = products.map((item) => {
    return `
     <div class="cotygory">
        <div class="BESTSELLER">
            <a href="./pages/DiscoverNow/btn.html">
                <img src="${item.image}" alt="">
            </a>
            <p>${item.title}</p>
            <div>Trendy models of our experts, for the love of your life selected</div>
            <button onclick="addToKard('${item.id}')">Discover now</button>
        </div>
     </div>
    `;
}).join("");

let kardArray = [];
let count = document.querySelector(".count");
let modalProduct = document.querySelector(".modal-product");

// Обновление продуктов в корзине
function updateProduct() {
    modalProduct.innerHTML = kardArray.map((item) => {
        return `
            <div class="modal-main"> 
                <div>
                    <h4>${item.title}</h4>
                    <p>${item.price}</p>
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
    let findProduct = products.find((x) => x.id == id);
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

