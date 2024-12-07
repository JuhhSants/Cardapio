
const loginEmail = document.getElementById("email-login")
const passwordLogin = document.getElementById("password-login")

form.addEventListener("submit", (event) => {
    event.preventDefault();

    
    checkForm();
})

loginEmail.addEventListener("blur", () =>{
    checkInputLoginEmail()
})

passwordLogin.addEventListener("blur", () =>{
    checkInputPasswordLogin()
})


function checkInputLoginEmail(){
    const loginEmailValue = loginEmail.value

    if(loginEmailValue == ""){
        errorInput(loginEmail, "O e-mail é obrigatório!")
    }else{
        const formItem = loginEmail.parentElement
        formItem.className = "form-content"
    }
}

function checkInputPasswordLogin(){
    const passwordLoginValue = passwordLogin.value

    if(passwordLoginValue == ""){
        errorInput(passwordLogin, "O e-mail é obrigatório!")
    }else{
        const formItem = passwordLogin.parentElement
        formItem.className = "form-content"
    }
}

function checkForm(){
    checkInputLoginEmail();
    checkInputPasswordLogin();
    

    const formItems = form.querySelectorAll(".form-content")
    const isValid = [...formItems].every( (item) => {
        return item.className === "form-content"
    })

    if(isValid){
        alert("CADASTRADO COM SUCESSE!!!")
    }
    
}

function errorInput(input, message){
    const formItem = input.parentElement
    const textMessage = formItem.querySelector("a")

    textMessage.innerText = message;
    formItem.className = "form-content error"
}