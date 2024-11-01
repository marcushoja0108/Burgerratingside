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
    <div class="profileContentContainer">
            <div class="friendsActivityContainer">
                ${createFriendsContainer()}
            </div>
            <div class="favoritesContainer">
                ${createFavoritesContainer()}
            </div>    
    </div>
    `;
}

function createFriendsContainer(){
    let html = /*HTML*/ `
    <h3>Friends activity</h3>
        <div class="friendsWindow">
            ${createFriendsGrid()}        
        </div>
    
    `;

    return html
}

function createFriendsGrid(){
    let friends = createProfileFriends()
    let html = ''

}

function createProfileFriends(){
    let friends = []
    let loggedInUserID = model.app.loggedInUserID

    for(let i = 0; i < model.data.users[loggedInUserID].friendslist.length; i++){
        let id = model.data.users[loggedInUserID].friendslist[i].id
        let friend = model.data.users[findUserIndexByID(id)]
        friends.push(friend)
    }
    console.log(friends)
    return friends
}



function createFavoritesContainer(){
    
    let html = /*HTML*/ `
    <h2 class="favoritesHeader">Favorites</h2>
        <div class="favoritesWindow">
            ${createFavoritesGrid()}
        </div>
    
    `;

    return html
}

function createFavoritesGrid(){
    let favorites = createProfileFavorites()
    let html = ''
    for(i = 0; i < favorites.length; i++){
        html += /*HTML*/ `
        <div class="favoriteElement">
        <img class="profileFavoriteImage" src="${favorites[i].burgerImage}"
        onclick="goInfo(${findBurgerIndexByID(favorites[i].id)})">
            <div>    
            <h4>${favorites[i].burgername}</h4>

            ⭐${createAverageRating(i)} <br/>
            calories: ${favorites[i].calories}<br/>
            Price: ${favorites[i].price}</div>
        </div>
        `;
    }
    return html
}



function createProfileFavorites(){
    let loggedInUserID = model.app.loggedInUserID
    let favorites = []
    for(let i = 0; i < model.data.users[loggedInUserID].favoriteBurgers.length; i++){
       let favorite =  model.data.Burgers.find(burger => burger.id === model.data.users[loggedInUserID].favoriteBurgers[i].id);
       favorites.push(favorite)
    }
    console.log(favorites)
    return favorites
    //  let favorites = model.data.Burgers.filter(burger => 
    //      (burger.id == model.data.users[model.app.loggedInUserID].favoriteBurgers));
    //  console.log(favorites)
    //  return favorites
 }

