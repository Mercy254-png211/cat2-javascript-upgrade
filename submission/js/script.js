
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
   let wishlistForm = document.querySelector("#wishlistForm");
   let wishlistInput = document.querySelector("#wishlistinput");
   let wishlistItems = document.querySelector("#wishlistItems");

   wishlistForm.addEventListener("submit", function(event) {
       event.preventDefault();
       if(wishlistInput.value !== ""){
           let li = document.createElement("li");
           let button = document.createElement("button");
           li.textContent = wishlistInput.value;
           button.textContent = "Delete";

           button.addEventListener("click", function() {
               li.remove();
           });

           li.appendChild(button);
           wishlistItems.appendChild(li);
           wishlistInput.value = "";
       }
   });
   const form = document.getElementById("contactForm");
   const response = document.getElementById("formResponse");

   form.addEventListener("submit", function(event) {
         event.preventDefault();
        
         const name = document.getElementById("customerName").value;
         const email = document.getElementById("customerEmail").value;
         const message = document.getElementById("customerMessage").value;

         if(name + email + message === ""){
            response.textContent = "Please fill in all fields before submitting the form.";
            response.style.color = "red";

            return;
         }
         response.textContent = "Thank you for your message! We will get back to you soon.";
         response.style.color = "green";
   });

   //local storage
   const customerName = document.getElementById("customerName");
   
   if(localStorage.getItem("customerName")) {
       customerName.value = localStorage.getItem("customerName");
   }
   customerName.addEventListener("input", function () {
    localStorage.setItem("customerName", customerName.value);
   });

   //classlist toggle
   const banner = document.getElementById("banner");
   const bannerText = document.getElementById("bannerText");

    banner.addEventListener("click", function() {
        bannerText.classList.toggle("hidden");
    });

