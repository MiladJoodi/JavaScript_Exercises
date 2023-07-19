// ✌ :))

let products = [
    { id: 1, title: 'Sport Shoes', price: 53, img: 'images/1.png', description: 'sport shoes for all of years' },
    { id: 2, title: 'Women Shoes', price: 87, img: 'images/2.png', description: 'This is so beautiful women shoes' },
    { id: 3, title: 'Boots', price: 34, img: 'images/3.png', description: 'This is so nice Boots' },
]

let productTitleElem = document.querySelector('h1')
let productDescElem = document.querySelector('p')
let productImgElem = document.querySelector('img')
let backButton = document.querySelector('button')

let productsParam = new URLSearchParams(location.search)

let productGetId = productsParam.get('id')

let mainProduct = products.find(function(product){
    return product.id == productGetId
})

if(mainProduct){
    productTitleElem.innerHTML = mainProduct.title
productDescElem.innerHTML = mainProduct.description
productImgElem.src = mainProduct.img
}else{
    alert('404')
}



backButton.addEventListener('click', function(){
    history.back()
})



