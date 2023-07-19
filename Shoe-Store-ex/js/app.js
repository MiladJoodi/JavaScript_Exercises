// DOM => Document Object Model
// BOM => Browser Object Model

let products = [
    { id: 1, title: 'Sport Shoes', price: 53, img: 'images/1.png', description: 'sport shoes for all of years' },
    { id: 2, title: 'Women Shoes', price: 87, img: 'images/2.png', description: 'This is so beautiful women shoes' },
    { id: 3, title: 'Boots', price: 34, img: 'images/3.png', description: 'This is so nice Boots' },
]

let containerElem = document.querySelector('.container')

products.forEach(function (product) {

    containerElem.insertAdjacentHTML('afterbegin', '<div class="product-card"><h1>' + product.title + '</h1><p>' + product.description + '</p><div class="product-pic" style="background-image: url(' + product.img + ' );"></div><div class="product-info"><div class="product-price">$' + product.price + '</div><a href="product.html?id=' + product.id + ' " class= "product-button" > See More</a ></div ></div > ')

})