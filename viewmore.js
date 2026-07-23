

const id = localStorage.getItem("id");

async function getProducts() {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    const product = await response.json();
    display(product);
}

function display(product){
    let details = document.getElementById("product");
    console.log(product);
    details.innerHTML = `
    <div class = "box">
        <div class="leftbox">
            <img src="${product.thumbnail}"/>
        </div>

        <div class="rightbox">
            <h1>${product.title}</h1>
            <p> <span class="productTitle">Brand:</span> ${product.brand} </p>
            <p><span class= "productTitle">Category:</span>${product.category}</p>
            <span class= "productTitle"></span>
             <p><span class="productTitle">Price:</span>${(product.price*96.54).toFixed()}INR</p>
              <p><span class="productTitle">Rating: </span> ${"⭐".repeat(product.rating.toFixed())}</p>
           <p> <span class="productTitle"> Warranty Information:</span> ${product.warrantyInformation} </p>
            <p id="para"> <span class="productTitle">Description:</span> ${product.description}</p>
             <button onclick="addToCart(${product.id})">Add To Cart</button>
             <button>Add To WishList</button>



            
        </div>
    </div>

    `;
  let reviews = document.getElementById("reviews");
    product.reviews.forEach((ele) => {
    console.log(ele);
    reviews.innerHTML += `
    <div class="reviewCard">
    <div class="reviewHead">
    <h2>${ele.reviewerName}</h2>
    <p>${"⭐".repeat(ele.rating)}</p>
    </div>
    <div>
    <p>${ele.comment}</p>
    </div>
    </div>
    `;
    });
    reviews.innerHTML += `
    <input id="newReview" type='text'/>
    <button> Submit Feedback </button>
    `;
}
getProducts();