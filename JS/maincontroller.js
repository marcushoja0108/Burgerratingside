function goMain(){
    model.app.currentPage = model.app.pages[0];
    updateview()
}

function createAverageRating(i){
    let totalratings = 0
    let allratings = model.data.Burgers[i].burgerratings
    for(let index = 0; index < allratings.length; index++){
    totalratings += allratings[index]
    }
    let averageRating = totalratings/allratings.length
    return averageRating
}
