function updateViewMain(){
    document.getElementById('app').innerHTML = /*HTML*/`
    <div class="container">
        ${createProfileBar()}
        <div class="searchBar">
        <button>sorter etter</button>
        <input type="text">
        </div>
        <div class="burgerGrid">
        ${createBurgergrid()}
        </div>
    </div>
    `;
}

function createProfileBar(){
    let html = /*HTML*/`
    <div class="profileBar">
    <img src="borgirman.png">
    <div>${model.data.users[0].description}</div>
    <div>top ratings</div>
    <div>venners aktivitet</div>
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
            <img src= ${burger[i].burgerImage}

        </div>
        `;
    }
    return html
}