function updateViewMain(){
    document.getElementById('app').innerHTML = /*HTML*/`
    <div class="container">
        ${createProfileBar()}
        ${createHomeButton()}
        <div class="searchBar">
        <button>sorter etter</button>
        Søk
        <input type="text">
        </div>
        <div class="burgerGrid">
        ${createBurgergrid()}
        </div>
    </div>
    `;
}

function createHomeButton(){
    let html = /*HTML*/`
    <div class="homebuttoncontainer">
        <img class="homebutton" 
        src="img/homebutton.png">
    </div>
    `;

return html
}

function createProfileBar(){    
    let html = /*HTML*/`
    <div class="profileBar">
    
        <img class="barProfilepic"src="users/borgirman.png">
        <h3 class="barElementHeader">Min profil</h3>
        <div class="barDescription">${model.data.users[0].description}</div>
    <div class="barRatings">
        <h4 class="barElementHeader">Topp ratings</h4>
        <div class="barRatingsMain"></div>
    </div>
    <div class="barActivity">
        <h4 class="barElementHeader">Venners aktivitet</h4>
        <div class="barActivityMain"></div>
    </div>
</div>
`;
    return html
}

function createBurgergrid(){
    let burger = model.data.Burgers;
    let html = '';
    for(let i = 0; i < burger.length; i++){
        html += `
        <div class="burgercontainer">
            <div>${burger[i].burgername}</div>
            <div class="averageRating">
            Average rating: ${createAverageRating(i)}</div>
            <img class="mainBurgerimg" src= ${burger[i].burgerImage}>

        </div>
        `;
    }
    return html
}