const initialState = {
    u: [
        {
            cnt: '6 Уроков',
            price: '1000',
            icon: 'fas fa-hryvnia',
            cardNumber: [
                '4351',
                '8237',
                '2189',
                '0104'
            ],
            cardInfo: 'Фамилия Имя Отчество',
            cardName: 'Банковская карта'
        },{
            cnt: '6 Уроков',
            price: '1000',
            icon: 'fas fa-hryvnia',
            cardNumber: [
                '4351',
                '8237',
                '2189',
                '0104'
            ],
            cardInfo: 'Фамилия Имя Отчество',
            cardName: 'Банковская карта'
        },{
            cnt: '6 Уроков',
            price: '1000',
            icon: 'fas fa-hryvnia',
            cardNumber: [
                '4351',
                '8237',
                '2189',
                '0104'
            ],
            cardInfo: 'Фамилия Имя Отчество',
            cardName: 'Банковская карта'
        }
    ],
    r: [
        {
            cnt: '6 Уроков',
            price: '2000',
            icon: 'fas fa-ruble-sign',
            cardNumber: [
                '4351',
                '8237',
                '2189',
                '0104'
            ],
            cardInfo: 'Фамилия Имя Отчество',
            cardName: 'Банковская карта'
        },{
            cnt: '6 Уроков',
            price: '2000',
            icon: 'fas fa-ruble-sign',
            cardNumber: [
                '4351',
                '8237',
                '2189',
                '0104'
            ],
            cardInfo: 'Фамилия Имя Отчество',
            cardName: 'Банковская карта'
        },{
            cnt: '6 Уроков',
            price: '2000',
            icon: 'fas fa-ruble-sign',
            cardNumber: [
                '4351',
                '8237',
                '2189',
                '0104'
            ],
            cardInfo: 'Фамилия Имя Отчество',
            cardName: 'Банковская карта'
        }
    ]
};

const priceReducer = (state = initialState, action) => {
    switch (action.type) {
        default: {
            return state;
        }
    }
}

export default priceReducer;