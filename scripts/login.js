const inputEmail=document.querySelector(".inputEmail")
const inputPassword=document.querySelector(".inputPassword")
const btnLogin=document.querySelector(".btnLogin")
const btnRegister=document.querySelector("btnRegister")

btnLogin.addEventListener("click",()=>{

    auth.signInWithEmailAndPassword(inputEmail.value,inputPassword.value).then(
        ()=>{
            db.collection("users")
            setLoggedUser(firebase.auth().currentUser)
            window.location.href="index.html"
           
        }
    ).catch((error)=>{

        console.log(error.message)
    })

})

