// ( function(){

// })()

const analytics = async()=>{
      let data = await fetch('http://localhost:4000/registration');
      let res = await data.json();
      document.querySelector('#cuser').innerHTML = res.length
}