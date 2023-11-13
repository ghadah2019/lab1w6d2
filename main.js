fetch('https://fakestoreapi.com/products')
.then(response => response.json())
.then(data => {
  const productList = document.getElementById('product-list');
 

  data.forEach(product => {
    const productElement = document.createElement('div');
    productElement.classList.add('product');

    const imageElement = document.createElement('img');
    imageElement.src = product.image;

    const infoElement = document.createElement('div');
    infoElement.classList.add('info');

    const nameElement = document.createElement('div');
    nameElement.classList.add('name');
    nameElement.innerText = product.title;

    const priceElement = document.createElement('div');
    priceElement.classList.add('price');
    priceElement.innerText = 'Price: $' + product.price;

    infoElement.appendChild(nameElement);
    infoElement.appendChild(priceElement);

    productElement.appendChild(imageElement);
    productElement.appendChild(infoElement);

    productList.appendChild(productElement);
  });
})
.catch(error => {
  console.error('Error:', error);
});
