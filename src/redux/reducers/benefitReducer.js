const initialState = {
    title: {
        mainText: 'Преимущества учиться у нас',
        altText: ''
    },
    benefitsCards: [
        {
            mainText: '50+ преподавателей',
            altText: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.',
            icon: 'fas fa-users fa-3x'
        }, {
            mainText: 'Личный наставник',
            altText: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.',
            icon: 'fas fa-user-plus fa-3x'
        }, {
            mainText: 'Работаем 7 дней в неделю без выходных и праздников',
            altText: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.',
            icon: 'far fa-calendar-alt fa-3x'
        }, {
            mainText: 'Обратная связь для родителей и программа лояльности',
            altText: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.',
            icon: 'far fa-envelope-open fa-3x'
        },
    ]
};

const benefitsReducer = (state = initialState, action) => {
    switch (action.type) {
        default: {
            return state;
        }
    }
}

export default benefitsReducer;