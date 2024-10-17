function goLogin(){
    model.app.currentPage = model.app.pages[3];
    updateview()
}

function logIn(){
    let user = getUser(model.input.login.email)
    if(user.password == model.input.login.password){
        goMain()
    }
    else{
        alert('incorrect password')
    }
}

function getUser(email){
    model.data.users.find(user => user.email == email);
}