let products=[
    {
        title:"1.ARTCLE | SET-NR: S-1235-2 | PRICE: 983,00 EUR",
        image: "./svg/kumush.svg",
        but: "Order Now",
        but: "Delete article",
        articleNo: "S-11J7PI-WWW5-22KG1Z",
        des: "Gold-585/-, assy-and-white. approx.0,135  ct. tw si fine white  with small inclusions",
        par: "Name:",
        par:"Price:",
        par:"Size:",
        art:"Artcle 1",
        art:"983.00 EUR",
        art:"54",
        id:1
    }, 
    {
        title:"1.ARTCLE | SET-NR: S-1235-2 | PRICE: 983,00 EUR",
        image: "./svg/kumush.svg",
        but: "Order Now",
        but: "Delete article",
        articleNo: "S-11J7PI-WWW5-22KG1Z",
        des: "Gold-585/-, assy-and-white. approx.0,135  ct. tw si fine white  with small inclusions",
        par: "Name:",
        par:"Price:",
        par:"Size:",
        art:"Artcle 1",
        art:"983.00 EUR",
        art:"54",
        id:2
    }, 
    {
        title:"1.ARTCLE | SET-NR: S-1235-2 | PRICE: 983,00 EUR",
        image: "./svg/kumush.svg",
        but: "Order Now",
        but: "Delete article",
        articleNo: "S-11J7PI-WWW5-22KG1Z",
        des: "Gold-585/-, assy-and-white. approx.0,135  ct. tw si fine white  with small inclusions",
        par: "Name:",
        par:"Price:",
        par:"Size:",
        art:"Artcle 1",
        art:"983.00 EUR",
        art:"54",
        id:3
    }, 
    {
        title:"1.ARTCLE | SET-NR: S-1235-2 | PRICE: 983,00 EUR",
        image: "./svg/kumush.svg",
        but: "Order Now",
        but: "Delete article",
        articleNo: "S-11J7PI-WWW5-22KG1Z",
        des: "Gold-585/-, assy-and-white. approx.0,135  ct. tw si fine white  with small inclusions",
        par: "Name:",
        par:"Price:",
        par:"Size:",
        art:"Artcle 1",
        art:"983.00 EUR",
        art:"54",
        id:4
    }, 
    {
        title:"1.ARTCLE | SET-NR: S-1235-2 | PRICE: 983,00 EUR",
        image: "./svg/kumush.svg",
        but: "Order Now",
        but: "Delete article",
        articleNo: "S-11J7PI-WWW5-22KG1Z",
        des: "Gold-585/-, assy-and-white. approx.0,135  ct. tw si fine white  with small inclusions",
        par: "Name:",
        par:"Price:",
        par:"Size:",
        art:"Artcle 1",
        art:"983.00 EUR",
        art:"54",
        id:5
    }, 
    {
        title:"1.ARTCLE | SET-NR: S-1235-2 | PRICE: 983,00 EUR",
        image: "./svg/kumush.svg",
        but: "Order Now",
        but: "Delete article",
        articleNo: "S-11J7PI-WWW5-22KG1Z",
        des: "Gold-585/-, assy-and-white. approx.0,135  ct. tw si fine white  with small inclusions",
        par: "Name:",
        par:"Price:",
        par:"Size:",
        art:"Artcle 1",
        art:"983.00 EUR",
        art:"54",
        id:6
    }, 
]
let categories = document.querySelector("#cards")
categories.innerHTML = products.map((item) =>{
    // const newElement = document.createElement('div')
    return`<div class="car">
                    <div class="tekt">
                        <h5>1. ARTICLE | SET-NR: S-1235-2 | PRICE: 983,00 EUR
                        </h5>
                    </div>
                    <div class="ca">
                        <div class="left">
                            <img src="${item.image}" alt="">
                            <div class="btn">
                                <button>Order Now</button>
                                <button>Delete article</button>
                            </div>
                        </div>
                        <div class="top">
                            <div class="right">
                                <h5>Article-No.:</h5>
                                <p>S-11J7PI-WWW5-22KG1Z</p>
                               <div class="gold">
                                <h5>Description</h5>
                                <p>Gold-585/-, assy-and-white. approx.0,135  ct. tw si fine white  with small inclusions</p>
                               </div>
                            </div>
                            <div class="price">
                                <div>
                                    <p>Name:</p> 
                                    <p>Price:</p>
                                    <p>Size:</p>
                                </div>
                                <div class="par">
                                    <p>Artcle 1</p>
                                    <p>983.00 EUR</p>
                                    <p>54</p>        
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`
});