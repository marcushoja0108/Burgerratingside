let loginResultMessage = null;
let createUserMessage = null;

function updateViewLogin(){
    document.getElementById('app').innerHTML = /*HTML*/ `
    <div class="loginContainer">
        <img class="loginLogo" src="BurgerTownLogo.png">
            <input type="email" placeholder="Email" class="loginInput"
            onchange="model.input.login.email = this.value">

            <input type="password" placeholder="Password" class="loginInput"
            onchange="model.input.login.password = this.value">
            <div class="loginResults">${loginResultMessage ?? ''}</div>
            <div class="logInButton" onclick="logIn()">Log In</div>
            <div class="createUserButton" onclick="createNewUserView()">
            Create new user</div>
        </div>
    `;
}

function createNewUserView(){
    document.getElementById('app').innerHTML = /*HTML*/ `
    <div class="loginContainer">
    <img class="loginLogo" src="BurgerTownLogo.png">
        <input type="name" placeholder="Name" class="logInInput"
        onchange="model.input.createAccount.name = this.value">

        <input type="email" placeholder="Email" class="logInInput"
        onchange="model.input.createAccount.email = this.value">

        <input type="address" placeholder="Address" class="logInInput"
        onchange="model.input.createAccount.address = this.value">

        <input type="password" placeholder="Password" class="logInInput"
        onchange="model.input.createAccount.password = this.value">

        <input type="Password" placeholder="Repeat password" class="logInInput"
        onchange="model.input.createAccount.secondPassword = this.value">

        <div class="loginResults">${createUserMessage ?? ''}</div>
        <div class="createUserButton" onclick="registerUser()">Register</div>
        <div class="createUserButton" onclick="updateViewLogin()"> Back to login </div>
    </div>
    `;
}