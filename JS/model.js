const model = {
    app: {
        loggedInUserID: null,
        pages: ['mainPage', 'profilePage', 'burgerPage', 'loginPage'],
        currentPage: 'loginPage',

    },

    input: {
        login: {
            email: null,
            password: null,

        },

        createAccount: {
            newUserID: null,
            name: null,
            address: null,
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
                email: "marcus@mail.com",
                password: "1111",
                description: "Jeg liker borgir. Bacon and cheese in my veins.",
                address: "stavanger",
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
                email: "lotte@mail.com",
                password: "bamse",
                description: "Namnam",
                address: "stavanger",
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
                burgerImage: "img/DirtyBurger.png",
                burgerratings: [9, 6, 10, 8],
                calories: 879,
                price: 189,
                description: "Dobbel ost, tørrsaltet bacon fra Idsøe, chilimayo og fritert løk. Penslet med verdens beste smør.",
                
            },
            {
                id: 102,
                burgername: "Dobbel Explosion",
                burgerImage:"img/DobbelExplosion.png",
                burgerratings: [7, 6, 9, 5],
                calories: 624,
                price: 215,
                description: "2x Storfe, bacon, Parmesan, syltet rødløk, chilimayo",
            },
            {
                id: 103,
                burgername: "Angus Jack Daniels",
                burgerImage:"img/AngusJackDaniels.png",
                burgerratings: [9, 7, 7, 6],
                calories: 687,
                price: 359,
                description: "Smakfull burger med Jack Daniels saus, cheddar, sprøtt bacon toppet med løkringer. Tasty angus burger with Jack Daniels sauce, cheddar, crispy bacon topped with onion rings",
            },
            {
                id: 104,
                burgername: "Double Gourmet Grill Steakhouse",
                burgerImage:"img/DoubleGourmetGrillSteakhouse.png",
                burgerratings: [7, 6, 9, 5],
                calories: 624,
                price: 215,
                description: "Vår kjente BBQ-kombinasjon - nå gourmet! BBQ saus, majones, bacon og ost kombinert med frisk ruccola og frissé salat, tomat og sprøstekt løk gjør denne til en smaksopplevelse du ikke vil gå glipp av!",
            },
        ]

    }


}