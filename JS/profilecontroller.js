function goProfile(){
    model.app.currentPage = model.app.pages[1];
    updateview()
}

function findBurgerIndexByID(id){
    return model.data.Burgers.findIndex(burger => burger.id == id)
}

function findUserIndexByID(id){
    return model.data.users.findIndex(user => user.id == id)
}