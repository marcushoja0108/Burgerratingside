function updateViewMain(){
    document.getElementById('app').innerHTML = /*HTML*/`
    <div class="container">
        ${createcommon()}
        <div class="Maincontent">
            <div class="searchBar">
            <button>sorter etter</button>
            Søk
            <input type="text">
            </div>
            <div class="burgerGrid">
            ${createBurgergrid()}
            </div>
        </div>
    </div>
    `;
}



function createBurgergrid(){
    let burger = model.data.Burgers;
    let html = '';
    for(let i = 0; i < burger.length; i++){
        html += `
        <div class="burgercontainer">
            <div class="mainburgertitle">
            <strong>${burger[i].burgername}</strong></div>
            <div class="averageRating">
            Average rating: ${createAverageRating(i)}</div>
            <div class="mainPrice">Price: ${burger[i].price} kr</div>
            <img class="mainBurgerimg" src= ${burger[i].burgerImage}>
            <div class="infobutton" onclick="goInfo(${i})">More info</div>

        </div>
        `;
    }
    return html
}