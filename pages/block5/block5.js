// Массив данных
let shakek = [
    {   
        image: "./img/shakek1.svg",
        des: "Overview",
        id: 1
    },
    {  
        image: "./img/shakek2.svg",
        des: "Classic",
        id: 2
    },
    {  
        image: "./img/shakek3.svg",
        des: "Cheap",
        id: 3
    },
    {   
        image: "./img/shakek4.svg",
        des: "Memoire",
        id: 4
    },
    {  
        image: "./img/shakek5.svg",
        des: "Platinum",
        id: 5
    },
    {  
        image: "./img/shakek6.svg",
        des: "Offers",
        id: 6
    },
    {   
        image: "./img/shakek7.svg",
        des: "News",
        id: 7
    }
];

// Выбираем контейнер для карточек
let shakeks = document.querySelector(".cardsshakek");

// Добавляем карточки в контейнер
shakeks.innerHTML = shakek.map((item) => {
    return `
        <div class="shakek">
            <img src="${item.image}" alt="${item.des}">
            <p>${item.des}</p>
        </div>
    `;
}).join(''); // Преобразуем массив в строку


let shakek2 = [
    {   
        image: "./svg/shakeksvg1.svg",
        des: "All",
        id: 1
    },
    {  
        image: "./svg/shakeksvg2.svg",
        des: "Rose gold",
        id: 2
    },
    {  
        image: "./svg/shakeksvg3.svg",
        des: "Gold",
        id: 3
    },
    {   
        image: "./svg/shakeksvg4.svg",
        des: "Platinum",
        id: 4
    },
    {  
        image: "./svg/shakeksvg4.svg",
        des: "White gold",
        id: 5
    },
    {  
        image: "./svg/shakeksvg4.svg",
        des: "Tantalum",
        id: 6
    },
    {  
        image: "./svg/shakeksvg4.svg",
        des: "Palladium",
        id: 7
    },
    {  
        image: "./svg/shakeksvg5.svg",
        des: "Silver",
        id: 8
    },
    {  
        image: "./svg/shakeksvg6.svg",
        des: "Rose gold",
        id: 9
    },
    {   
        image: "./svg/shakeksvg7.svg",
        des: "Signature Gold",
        id: 10
    }
];

// Выбираем контейнер для карточек
let shakeks2 = document.querySelector(".cardsshakek2");

// Добавляем карточки в контейнер
shakeks2.innerHTML = shakek2.map((item) => {
    return `
        <div class="cardsshakek2">
            <div class="shakek2">
                <img src="${item.image}" alt="${item.des}">
                <p>${item.des}</p>
            </div>
        </div>
    `;
}).join(''); // Преобразуем массив в строку


// -----------------

let surot = [
    {   
        image: "./svg/surot1.svg",
        title: "123GOLD",
        des: "Gold 585 | 0,100 ct. | tw, si <br> € 365,-",
        id: 1
    },
    {  
        image: "./svg/surot2.svg",
        title: "123GOLD",
        des: "Gold 585 | 0,100 ct. | tw, si <br> € 365,-",
        id: 2
    },
    {  
        image: "./svg/surot3.svg",
        title: "123GOLD",
        des: "Gold 585 | 0,100 ct. | tw, si <br> € 365,-",
        id: 3
    },
    {   
        image: "./svg/surot4.svg",
        title: "123GOLD",
        des: "Gold 585 | 0,100 ct. | tw, si <br> € 365,-",
        id: 4
    },
    {  
        image: "./svg/surot5.svg",
        title: "123GOLD",
        des: "Gold 585 | 0,100 ct. | tw, si <br> € 365,-",
        id: 5
    },
    {  
        image: "./svg/surot2.svg",
        title: "123GOLD",
        des: "Gold 585 | 0,100 ct. | tw, si <br> € 365,-",
        id: 6
    },
    {  
        image: "./svg/surot2.svg",
        title: "123GOLD",
        des: "Gold 585 | 0,100 ct. | tw, si <br> € 365,-",
        id: 7
    },
    {  
        image: "./svg/surot1.svg",
        title: "123GOLD",
        des: "Gold 585 | 0,100 ct. | tw, si <br> € 365,-",
        id: 8
    },
    {  
        image: "./svg/surot4.svg",
        title: "123GOLD",
        des: "Gold 585 | 0,100 ct. | tw, si <br> € 365,-",
        id: 9
    },
    {   
        image: "./svg/surot5.svg",
        title: "123GOLD",
        des: "Gold 585 | 0,100 ct. | tw, si <br> € 365,-",
        id: 10
    },
    {   
        image: "./svg/surot1.svg",
        title: "123GOLD",
        des: "Gold 585 | 0,100 ct. | tw, si <br> € 365,-",
        id: 11
    },
    {   
        image: "./svg/surot2.svg",
        title: "123GOLD",
        des: "Gold 585 | 0,100 ct. | tw, si <br> € 365,-",
        id: 12
    },
    {   
        image: "./svg/surot4.svg",
        title: "123GOLD",
        des: "Gold 585 | 0,100 ct. | tw, si <br> € 365,-",
        id: 13
    },
    {   
        image: "./svg/surot4.svg",
        title: "123GOLD",
        des: "Gold 585 | 0,100 ct. | tw, si <br> € 365,-",
        id: 14
    },
    {   
        image: "./svg/surot5.svg",
        title: "123GOLD",
        des: "Gold 585 | 0,100 ct. | tw, si <br> € 365,-",
        id: 15
    },
    {   
        image: "./svg/surot2.svg",
        title: "123GOLD",
        des: "Gold 585 | 0,100 ct. | tw, si <br> € 365,-",
        id: 16
    },
    {   
        image: "./svg/surot2.svg",
        title: "123GOLD",
        des: "Gold 585 | 0,100 ct. | tw, si <br> € 365,-",
        id: 17
    },
    {   
        image: "./svg/surot1.svg",
        title: "123GOLD",
        des: "Gold 585 | 0,100 ct. | tw, si <br> € 365,-",
        id: 18
    },
    {   
        image: "./svg/surot4.svg",
        title: "123GOLD",
        des: "Gold 585 | 0,100 ct. | tw, si <br> € 365,-",
        id: 19
    },
    {   
        image: "./svg/surot5.svg",
        title: "123GOLD",
        des: "Gold 585 | 0,100 ct. | tw, si <br> € 365,-",
        id: 20
    },
    {   
        image: "./svg/surot1.svg",
        title: "123GOLD",
        des: "Gold 585 | 0,100 ct. | tw, si <br> € 365,-",
        id: 21
    },
    {   
        image: "./svg/surot2.svg",
        title: "123GOLD",
        des: "Gold 585 | 0,100 ct. | tw, si <br> € 365,-",
        id: 22
    },
    {   
        image: "./svg/surot4.svg",
        title: "123GOLD",
        des: "Gold 585 | 0,100 ct. | tw, si <br> € 365,-",
        id: 23
    },
    {   
        image: "./svg/surot4.svg",
        title: "123GOLD",
        des: "Gold 585 | 0,100 ct. | tw, si <br> € 365,-",
        id: 24
    },
    {   
        image: "./svg/surot5.svg",
        title: "123GOLD",
        des: "Gold 585 | 0,100 ct. | tw, si <br> € 365,-",
        id: 25
    },
    {   
        image: "./svg/surot2.svg",
        title: "123GOLD",
        des: "Gold 585 | 0,100 ct. | tw, si <br> € 365,-",
        id: 26
    },
    {   
        image: "./svg/surot2.svg",
        title: "123GOLD",
        des: "Gold 585 | 0,100 ct. | tw, si <br> € 365,-",
        id: 27
    },
    {   
        image: "./svg/surot1.svg",
        title: "123GOLD",
        des: "Gold 585 | 0,100 ct. | tw, si <br> € 365,-",
        id: 28
    },
    {   
        image: "./svg/surot4.svg",
        title: "123GOLD",
        des: "Gold 585 | 0,100 ct. | tw, si <br> € 365,-",
        id: 29
    },
    {   
        image: "./svg/surot5.svg",
        title: "123GOLD",
        des: "Gold 585 | 0,100 ct. | tw, si <br> € 365,-",
        id: 30
    },
];

let surotsContainer = document.querySelector(".card");  // Убедитесь, что это правильный контейнер в вашем HTML

if (surotsContainer) {
    // Генерируем HTML для карточек и вставляем в контейнер
    surotsContainer.innerHTML = surot.map((item) => {
        return `
           <div class="surot">
                <img src="${item.image}" alt="${item.des}">
                <h1>${item.title}</h1>
                <p>${item.des}</p>
            </div>
        `;
    }).join('');
} 
