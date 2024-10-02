const model = {
    app: {
        loggedInUserID: null,
        pages: ["mainPage", "profilePage", "burgerPage", "loginPage"],
        currentPage: "mainPage",

    },

    input: {
        login: {
            email: null,
            password: null,

        },

        createAccount: {
            name: null,
            adress: null,
            email: null,
            password: null,
            secondPassword: null,

        },
        mainPage: {
            searchinput: null,
            searchresult: [],

        },
        burgerprofile: {
            rating: null,
        },

    },

    data: {
        users: [
            {
                id: 1,
                name: "Marcus",
                description: "Borgir",
                resident: "stavanger",
                calories: 100,
                favoriteBurgertype: "baconcheese",
                profileimage:"borgirman.png",
                ratedBurgers: [],
                favoriteBurgers: [],
                friendslist: [
                    {
                        id: 2,
                    },
                ],
            },
            {
                id: 2,
                name: "Lotte",
                description: "Namnam",
                resident: "stavanger",
                calories: 0,
                favoriteBurgertype: "triple cheese",
                profileimage: "lotte.png",
                ratedBurgers: [],
                favoriteBurgers: [],
                friendslist: [
                    {
                        id: 1,
                    }
                ]

            }

        ],
        
        Burgers: [
            {
                id: 101,
                burgername: "Dirty burger",
                burgerImage: "DirtyBurger.png",
                burgerratings: [9, 6, 10, 8],
                calories: 879,
                price: 189,
                description: "Dobbel ost, tørrsaltet bacon fra Idsøe, chilimayo og fritert løk. Penslet med verdens beste smør.",
                
            },
            {
                id: 102,
                burgername: "Dobbel Explosion",
                burgerImage:"DobbelExplosion.png",
                burgerratings: [7, 6, 9, 5],
                calories: 624,
                price: 215,
                description: "2x Storfe, bacon, Parmesan, syltet rødløk, chilimayo",
            }
        ]

    }


}