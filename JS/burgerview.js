function updateViewBurger(i){
    document.getElementById('app').innerHTML = /*HTML*/`
    <div class="container">
        ${createcommon()}
        ${createburgerpage(i)}
    </div>
    `;
}

function createburgerpage(i){
    let burger = model.data.Burgers;
    let html = /*HTML*/`
    <div class="burgerProfileContainer">
        <h2 class="burgerProfileHeader">
        ${burger[i].burgername} ⭐${createAverageRating(i)}</h2>
            <img src=${burger[i].burgerImage}
            class="burgerProfileImage">
        <div>Calories: ${burger[i].calories}</div>
        <div>${burger[i].description}</div>
    </div>
    
    `;
    return html
}