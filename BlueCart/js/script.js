// BlueCart - simple JavaScript
const products = [
  {id:1,name:"Atomic Habits",cat:"Books",price:499,img:"https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=600&q=80",icon:"📖",desc:"A popular book about building better habits."},
  {id:2,name:"The Alchemist",cat:"Books",price:399,img:"https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80",icon:"📕",desc:"An inspiring story about following your dreams."},
  {id:3,name:"Clean Code",cat:"Books",price:699,img:"https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=600&q=80",icon:"📘",desc:"A useful programming book for developers."},
  {id:4,name:"Rich Dad Poor Dad",cat:"Books",price:450,img:"https://images.unsplash.com/photo-1511108690759-009324a90311?auto=format&fit=crop&w=600&q=80",icon:"📗",desc:"A simple book about money and financial thinking."},
  {id:5,name:"Smart Laptop",cat:"Electronics",price:55999,img:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=600&q=80",icon:"💻",desc:"Fast laptop for study, work and entertainment."},
  {id:6,name:"Wireless Headset",cat:"Electronics",price:1299,img:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",icon:"🎧",desc:"Comfortable wireless headset with clear sound."},
  {id:7,name:"Smart Watch",cat:"Electronics",price:2499,img:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80",icon:"⌚",desc:"Track time, steps and daily activity."},
  {id:8,name:"Bluetooth Speaker",cat:"Electronics",price:1799,img:"https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=600&q=80",icon:"🔊",desc:"Portable speaker with rich sound."},
  {id:9,name:"Study Chair",cat:"Furniture",price:3499,img:"https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=600&q=80",icon:"🪑",desc:"Comfortable chair for study and office work."},
  {id:10,name:"Wooden Table",cat:"Furniture",price:6999,img:"https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&w=600&q=80",icon:"🪵",desc:"Simple wooden table for your home."},
  {id:11,name:"Bookshelf",cat:"Furniture",price:4999,img:"https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&w=600&q=80",icon:"🗄️",desc:"Compact bookshelf for books and decoration."},
  {id:12,name:"Sofa",cat:"Furniture",price:15999,img:"https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80",icon:"🛋️",desc:"Soft and comfortable sofa for your living room."},
  {id:13,name:"Non-Stick Pan",cat:"Kitchen",price:999,img:"https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=600&q=80",icon:"🍳",desc:"Easy-to-clean pan for everyday cooking."},
  {id:14,name:"Mixer Grinder",cat:"Kitchen",price:3299,img:"https://images.unsplash.com/photo-1570222094114-d054a817e56b?auto=format&fit=crop&w=600&q=80",icon:"🥤",desc:"Useful mixer grinder for daily kitchen needs."},
  {id:15,name:"Dinner Set",cat:"Kitchen",price:1499,img:"https://images.unsplash.com/photo-1603199506016-b9a594b593c0?auto=format&fit=crop&w=600&q=80",icon:"🍽️",desc:"Simple dinner set for family meals."},
  {id:16,name:"Electric Kettle",cat:"Kitchen",price:1199,img:"https://images.unsplash.com/photo-1574781330855-d0db8cc6a79c?auto=format&fit=crop&w=600&q=80",icon:"🫖",desc:"Quickly boil water for tea and coffee."}
];

function protectPage(){
  if(localStorage.getItem("bluecartLoggedIn") !== "true"){
    window.location.href = "register.html";
  }
}

function registerUser(){
  const name = document.getElementById("regName").value.trim();
  const email = document.getElementById("regEmail").value.trim();
  const password = document.getElementById("regPassword").value;
  localStorage.setItem("bluecartUser", JSON.stringify({name,email,password}));
  alert("Registration successful! Please login.");
  window.location.href = "login.html";
}

function loginUser(){
  const user = JSON.parse(localStorage.getItem("bluecartUser") || "null");
  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value;
  const msg = document.getElementById("loginMsg");
  if(user && user.email === email && user.password === password){
    localStorage.setItem("bluecartLoggedIn","true");
    window.location.href = "index.html";
  }else{
    msg.textContent = "Invalid email or password. Please register first.";
  }
}

function logout(){
  localStorage.removeItem("bluecartLoggedIn");
  window.location.href = "login.html";
}

function updateCartCount(){
  const cart = JSON.parse(localStorage.getItem("bluecartCart") || "[]");
  const count = document.getElementById("cartCount");
  if(count) count.textContent = cart.length;
}

function showProducts(list=products){
  const box = document.getElementById("productList");
  if(!box) return;
  box.innerHTML = list.map(p => `
    <div class="card">
      <img class="product-img" src="${p.img}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>${p.cat}</p>
      <div class="price">₹${p.price.toLocaleString("en-IN")}</div>
      <a class="view" href="product-details.html?id=${p.id}">View Details</a>
    </div>`).join("");
}

function filterProducts(category){
  showProducts(category === "All" ? products : products.filter(p => p.cat === category));
}

function showDetails(){
  const id = Number(new URLSearchParams(location.search).get("id")) || 1;
  const p = products.find(x => x.id === id) || products[0];
  document.getElementById("details").innerHTML = `
    <div class="detail">
      <div class="image-wrap"><img class="detail-img" src="${p.img}" alt="${p.name}"></div>
      <div>
        <h1>${p.name}</h1><p class="category">${p.cat}</p>
        <p>${p.desc}</p><p class="price">₹${p.price.toLocaleString("en-IN")}</p>
        <button class="add" onclick="addToCart(${p.id})">Add to Cart</button>
        <br><a class="back" href="products.html">← Back to Products</a>
      </div>
    </div>`;
}

function addToCart(id){
  const cart = JSON.parse(localStorage.getItem("bluecartCart") || "[]");
  if(!cart.includes(id)) cart.push(id);
  localStorage.setItem("bluecartCart", JSON.stringify(cart));
  updateCartCount();
  alert("Product added to cart!");
}

function showCart(){
  const cart = JSON.parse(localStorage.getItem("bluecartCart") || "[]");
  const box = document.getElementById("cartItems");
  const total = document.getElementById("cartTotal");
  const buy = document.getElementById("buyBtn");
  if(!cart.length){
    box.innerHTML = '<div class="empty">Your cart is empty. <a href="products.html">Shop now</a></div>';
    total.textContent = "";
    buy.style.display = "none";
    return;
  }
  const selected = products.filter(p => cart.includes(p.id));
  box.innerHTML = selected.map(p => `
    <div class="item">
      <div><h3>${p.icon} ${p.name}</h3><p>${p.cat} - ₹${p.price.toLocaleString("en-IN")}</p></div>
      <button class="remove" onclick="removeFromCart(${p.id})">Remove</button>
    </div>`).join("");
  total.textContent = "Total: ₹" + selected.reduce((sum,p)=>sum+p.price,0).toLocaleString("en-IN");
  buy.style.display = "block";
}

function removeFromCart(id){
  let cart = JSON.parse(localStorage.getItem("bluecartCart") || "[]");
  cart = cart.filter(x => x !== id);
  localStorage.setItem("bluecartCart", JSON.stringify(cart));
  showCart();
  updateCartCount();
}

function placeOrder(){
  const cart = JSON.parse(localStorage.getItem("bluecartCart") || "[]");
  if(!cart.length){ alert("Your cart is empty."); return; }
  document.getElementById("orderPopup").style.display = "flex";
  localStorage.setItem("bluecartCart","[]");
  updateCartCount();
}

function closeOrderPopup(){
  document.getElementById("orderPopup").style.display = "none";
  window.location.href = "index.html";
}

document.addEventListener("DOMContentLoaded",()=>{
  const r = document.getElementById("registerForm");
  const l = document.getElementById("loginForm");
  if(r) r.addEventListener("submit",e=>{e.preventDefault();registerUser();});
  if(l) l.addEventListener("submit",e=>{e.preventDefault();loginUser();});
});
