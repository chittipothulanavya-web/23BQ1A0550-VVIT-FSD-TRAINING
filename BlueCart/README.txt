BLUECART - SIMPLE E-COMMERCE PROJECT
====================================

Technology:
- HTML
- CSS
- Basic JavaScript
- Browser localStorage

How to run:
1. Extract the BlueCart folder.
2. Open register.html in a browser.
3. Register a new account.
4. Login using the same email and password.
5. Browse products.
6. Open product details and click Add to Cart.
7. Open Cart and click Buy Selected Items.
8. The order popup appears, the cart is cleared, and Continue Shopping returns to Home.

Important:
This is a learning/demo project. Passwords are stored in browser localStorage,
so this is NOT suitable for a real production website.

Pages:
register.html
login.html
index.html
products.html
product-details.html
cart.html
about.html

CSS:
css/register.css
css/login.css
css/home.css
css/products.css
css/details.css
css/cart.css
css/about.css

JavaScript:
js/script.js

IMAGE SOURCES
-------------
Product cards now use remote Unsplash image CDN URLs. These are direct image URLs,
not Google Images result-page URLs. This is more reliable than hotlinking a Google
Images search result. The image URLs are stored in js/script.js in each product's
img property.

If you specifically want a Google Images result:
1. Search the product in Google Images.
2. Open the image/source website.
3. Copy the direct image URL only if that site permits hotlinking/embedding.
4. Replace the corresponding img URL in js/script.js.
