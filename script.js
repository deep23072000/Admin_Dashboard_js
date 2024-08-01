const reg = ()=>{
     let nam = document.querySelector('#nam').value;
     let username = document.querySelector('#username').value;
     let mobile = document.querySelector('#mobile').value;
     let password = document.querySelector('#password').value;
     let cpassword = document.querySelector('#cpassword').value;

     console.log(nam,username,mobile,password,cpassword);

     let information = {
        "id":1,
        "name":nam,
        "username":username,
        "mobile":mobile,
        "password":password,
        "cpassword":cpassword
     }

     window.localStorage.setItem('data',JSON.stringify(information))

     let ansdata = window.localStorage.getItem('data');
     console.log(JSON.parse(ansdata))
     return false;
}

