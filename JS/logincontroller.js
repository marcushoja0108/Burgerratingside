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
    if(createAccount.name != null || createAccount.email != null|| 
        createAccount.password != null|| createAccount.address != null){
        let newUser = {
            name: createAccount.name,
            email: createAccount.email,
            password: createAccount.password,
            address: createAccount.address,
        
        }
        model.data.users.push(newUser);
        updateViewLogin()
    }
    else{
        createUserMessage = 'Input a value';
        createNewUserView();
    }
}


function getUserEmail(email){
   return model.data.users.find(user => user.email == email);
}