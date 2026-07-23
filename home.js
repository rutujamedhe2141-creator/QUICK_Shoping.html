
let products = [];
let allProducts = [];


async function fetchProduct() {
 let response=await fetch("https://dummyjson.com/products");
 let data=await response.json();
  allProducts=[];
 allProducts = data.products; 

 displayProducts(allProducts);
}

function displayProducts(products){
    const container=document.getElementById("root");
    container.innerHTML="";
    console.log(products);

    products.forEach((ele)=>{
        container.innerHTML+=`
        <div class="card">
            <div class="img_container">
                <img src="${ele.thumbnail}"/>
            </div>
             <div class="main_Container">
        <h1>${ele.title.slice(0,20).concat("...")}</h1>
        <p>category:${ele.category}</p>
        <p>price:${(ele.price*96.54).toFixed()}</p>
        <p>rating: ${"⭐".repeat(ele.rating.toFixed())}</p>
        <div class="viewContainer"><a href="./viewmore.html" onclick="getproduct(${ele.id})">View more...</a></div>
        </div>

        </div>
        `;
    });
}

fetchProduct();


let sea = document.querySelector('[name="SearchProduct"]');

sea.addEventListener("input", (eve) => {
    let value = eve.target.value.toLowerCase();

    let filterProduct = allProducts.filter((pro) => {
        return pro.title.toLowerCase().includes(value);
    });

    displayProducts(filterProduct);
});

let pop=document.getElementById("popUp");
let btn=document.getElementById("btn");
btn.addEventListener("click",()=>{
pop.remove();
});
function getproduct(id){
    localStorage.setItem("id",id);
}