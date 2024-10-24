function updateViewProfile(){
    let loggedInUser = model.data.users[model.app.loggedInUserID];
    document.getElementById('app').innerHTML = /*HTML*/ `
    ${createHomeButton()}
    <div class="profileHeaderContainer">
        <img class="profileImage" src="${loggedInUser.profileimage}">
        <div class="profileHeaderDetails">
            <p class="profileHeaderName">${loggedInUser.name}</p>
            <p>${loggedInUser.description}</p>
            <p>The best burger: ${loggedInUser.favoriteBurgertype}</p>
            <div class="profileCalorieCount">Totale kalorier: ${loggedInUser.calories}</div>

        </div>
    </div>
    
    `;
}