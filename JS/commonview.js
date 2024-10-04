function createcommon(){
    let html=`
        ${createProfileBar()}
        ${createHomeButton()}
        `;
        return html
}

function createHomeButton(){
    let html = /*HTML*/`
    <div class="homebuttoncontainer">
        <img onclick="model.app.currentPage = 'mainPage'; updateview()"
        class="homebutton" 
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