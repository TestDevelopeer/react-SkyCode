const initialState = {
    textLogo: 'SKY-ACADEMY',
    menuLinks: [
        {
            text: 'Главная',
            link: '#eight-banner'
        }, {
            text: 'Направления',
            link: '#saas_two_feature'
        }, {
            text: 'Отзывы',
            link: '#saas_two_team'
        }, {
            text: 'Преимущества',
            link: '#saas_two_feature1'
        }, {
            text: 'FAQ',
            link: '#ei-faq'
        }, {
            text: 'Контакты',
            link: '#ei-newslatter'
        }
    ]
};

const headerReducer = (state = initialState, action) => {
    switch (action.type) {
        default: {
            return state;
        }
    }
}

export default headerReducer;