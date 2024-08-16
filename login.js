const login = async()=>{
    let data = await fetch('http://localhost:4000/registration');
    let response =await data.json();
    console.log(response);
    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;

    let finddata = response.find(e=> e.email === email && e.password === password);

    if(finddata){
        window.alert("user exist");
        window.localStorage.setItem('logininfo',JSON.stringify(finddata))
        window.location.href = "home.html";
    }
      else{
        window.alert("please register first")
    }

    console.log(finddata)
    return false;
}

// async function login() {
    
// }