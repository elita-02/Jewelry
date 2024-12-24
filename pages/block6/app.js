let cards=[
    {
        title: "BESTSELLER",
        image: "./svg/k.svg",
        des: "Trendy models of our experts, for the love of your life selected",
        price: 4000,
        id:1
    },
    {
        title: "SOLITAIRE",
        image: "./svg/t.svg",
        des: "Trendy models of our experts, for the love of your life selected",
        price: 2000,
        id:2
    },
    {
        title: "PLATINUM",
        image: "./svg/u.svg",
        des: "Trendy models of our experts, for the love of your life selected",
        price: 5000,
        id:3
    },
    {
        title: "CHEAP",
        image: "./svg/fo.svg",
        des: "Trendy models of our experts, for the love of your life selected",
        price: 17000,
        id:4
    },
  
]
let category=document.querySelector(".cotygory")

category.innerHTML = cards.map((item) =>{
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
`
}).join("")


let products=[
    {
        image: "./svg/bir.svg",
        des: "Ring size",
        id:1
    },
    {
        image: "./svg/e.svg",
        des: "Engraving",
        id:2
    },
    {
        image: "./svg/uu.svg",
        des: "Alloys",
        id:3
    },
    {
        image: "./svg/to.svg",
        des: "Care tips",
        id:4
    }, 
]
let bar = document.querySelector(".bar")
 bar.innerHTML = products.map((item) => {
    return`
       <div class="bar">
                            <div class="kar">
                                <img src="${item.image}" alt="">
                                <p>${item.des}</p>
                            </div>
                        </div>

    `
 });