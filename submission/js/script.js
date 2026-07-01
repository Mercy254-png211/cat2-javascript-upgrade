
const products = [
    {
        name: "Cashew nuts",
        price: "Ksh 220",
        image: "images/Cashew nuts.jpeg"
    },
    {
        name: "Macadamia nuts",
        price: "Ksh 200",
        image: "images/Macadamia nuts.jpeg"
    },
    {
        name: "Mixed nuts 1",
        price: "Ksh 250",
        image: "images/Mixed nuts 1.jpeg"
    },
      
    {
        name: " Peanuts",
        price: "Ksh 150",
        image: "images/Peanuts.jpeg"
    }
];
const productGrid = document.getElementById("productGrid");
products.forEach(product =>{
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    productCard.innerHTML = 
        "<img src='" +product.image + "' alt='" +product.name + "' width='200'>" +
        "<h3>" +product.name + "</h3>" +
        "<p>" +product.price + "</p>";
    
    productGrid.appendChild(productCard);   
});





