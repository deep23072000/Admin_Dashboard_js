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
     let selectbg = document.querySelector('#website');
     selectbg.style.filter = "none"
     return false;
}



const show_form = ()=>{
     let select = document.querySelector('#product_form');
     select.style.display = "block";
     let selectbg = document.querySelector('#website');
     selectbg.style.filter = "blur(5px)"
}






//IIFE
(async function(){
     let url = 'http://localhost:4000/product';
     let data =await fetch(url);
     let response =await data.json();

     console.log(response);
     document.querySelector('#showproductdata').innerHTML = response.map(e=>`
          <tr>
          <td>${e.product_name}</td>
          <td>${e.product_price}</td>
          <td><img width="70px" src="${e.product_image}"></td>
          <td>${e.product_brand}</td>
          <td>${e.product_review}</td>
          <td>${e.product_rating}</td>
          <td onclick="del('${e.id}')"><i  class="fa fa-trash" aria-hidden="true"></i></td>
          <td onclick="upd('${e.id}')"> <i class="fa-solid fa-pen"></i></td>
          </tr>
          
          `).join(" ");

     //
})();

function del(arg){
     console.log(arg);
     let url = `http://localhost:4000/product/${arg}`;
     let method = {
       method:"DELETE"
     }
     fetch(url,method)
 
 }

 async function upd(arg){
     let data = await fetch(`http://localhost:4000/product/${arg}`);
     let response = await data.json();
     console.log(response)
     let select = document.querySelector('#product_form');
     select.style.display = "block";
     document.querySelector('#product_name').value = response.product_name;
     document.querySelector('#product_price').value = response.product_price;
     document.querySelector('#product_image').value = response.product_image;
     document.querySelector('#product_brand').value = response.product_brand;
     document.querySelector('#product_review').value = response.product_review;
     document.querySelector('#product_rating').value = response.product_rating;

}


// ====================delete=====================




// async function show1(){

// }

// const show2 = async ()=>{

// }

