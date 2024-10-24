function goLogin(){
    model.app.currentPage = model.app.pages[3];
    updateview()
}

function logIn(){
    let user = getUserEmail(model.input.login.email)
    if(!user || !model.input.login.password){
    loginResultMessage = 'Fill in the required fields';
    updateViewLogin();
}
else{
    if(!model.data.users.includes(user)){
        loginResultMessage = 'User not found';
        updateViewLogin();
    }
    else{
        if(user.password == model.input.login.password){
            model.app.loggedInUserID = user.id;
            goMain();
        }
        else{
            loginResultMessage = 'Wrong Password';
            updateViewLogin();
        }
    }
    }
}

function registerUser(){
    let createAccount = model.input.createAccount;
    if(createAccount.name == null || createAccount.email == null|| 
        createAccount.password == null|| createAccount.address == null){
            createUserMessage = 'Fill in all the fields';
            createNewUserView();
            return
    }
    for(i = 0; i < model.data.users.length; i ++){
        if(createAccount.email == model.data.users[i].email){
            createUserMessage = 'That email is already in use'
            createNewUserView();
            return
        }
    }
if(createAccount.password === createAccount.secondPassword){
        let newUser = {
            id: model.data.users.length,
            name: createAccount.name,
            email: createAccount.email,
            password: createAccount.password,
            description: '',
            address: createAccount.address,
            calories: 0,
            favoriteBurgertype: '',
            profileimage: null,
            ratedBurgers: [],
            favoriteBurgers: [],
            friendslist: [],
        }
        model.data.users.push(newUser);
        resetInputs();
        updateViewLogin();
    }
    else{
        createUserMessage = 'password does not match';
        createNewUserView();
        return
    }
}


function getUserEmail(email){
   return model.data.users.find(user => user.email == email);
}

function resetInputs(){
    let createAccount = model.input.createAccount;

    createAccount.name = null;
    createAccount.email = null;
    createAccount.address = null;
    createAccount.password = null;
    createAccount.secondPassword = null;
    
}