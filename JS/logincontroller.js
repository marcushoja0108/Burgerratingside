function goLogin(){
    model.app.currentPage = model.app.pages[3];
    updateview()
}

function logIn(){
    let user = getUserEmail(model.input.login.email)
        if(user.password == model.input.login.password){
            loggedInUserID = user.id;
            goMain();
        }
        else{
            loginResultMessage = 'Wrong Password';
            updateViewLogin()
        }
}

function registerUser(){
    let createAccount = model.input.createAccount;
    if(createAccount.name == null || createAccount.email == null|| 
        createAccount.password == null|| createAccount.address == null){
            createUserMessage = 'Input a value';
            createNewUserView();
            return
    }
    for(i = 0; i < model.data.users.length; i ++){
        if(createAccount.email == model.data.users[i].email){
            createUserMessage = 'That email is already in use'
            createNewUserView()
            return
        }
    }
        let newUser = {
            name: createAccount.name,
            email: createAccount.email,
            password: createAccount.password,
            address: createAccount.address,
        
        }
        model.data.users.push(newUser);
        updateViewLogin()
    
}


function getUserEmail(email){
   return model.data.users.find(user => user.email == email);
}