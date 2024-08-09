const addproduct = ()=>{
     let product_name = document.querySelector('#product_name').value;
     let product_price = document.querySelector('#product_price').value;
     let product_image = document.querySelector('#product_image').value;
     let product_brand = document.querySelector('#product_brand').value;
     let product_review = document.querySelector('#product_review').value;
     let product_rating = document.querySelector('#product_rating').value;

     let product = {
      "product_name":product_name,
      "product_price":product_price,
      "product_image":product_image,
      "product_brand":product_brand,
      "product_review":product_review,
      "product_rating":product_rating
   }

     console.log(product);

     let url = 'http://localhost:4000/product';
     let method = {
          method:"POST",
          header:{
               "content-type":"application/json"
          },
          body:JSON.stringify(product)
     }
     fetch(url,method);
     return false;
}



const show_form = ()=>{
     let select = document.querySelector('#product_form');
     select.style.display = "block"
}

