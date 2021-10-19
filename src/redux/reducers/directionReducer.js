const initialState = {
    title: {
        mainText: 'Авторские курсы по направлениям:',
        altText: ''
    },
    cardInfo: [
        {
            mainText: 'Scratch',
            altText: '6-12 лет',
            desc: 'Если у ребенка нет опыта, то этот курс для него. Курс построен для введения в программирование и позволит не заскучать ребенку изучая сложные вещи.',
            btnLink: '#ei-newslatter',
            btnIcon: 'fas fa-plus',
            btnText: 'Записаться'
        }, {
            mainText: 'Frontend',
            altText: '10-16 лет',
            desc: 'Мечтаешь пойти по пути марка цукенберга, то тогда тебе именно на этот курс. Ты научишься создавать современные сайт и работать с графическими редакторами.',
            btnLink: '#ei-newslatter',
            btnIcon: 'fas fa-plus',
            btnText: 'Записаться'
        }, {
            mainText: 'Python',
            altText: '12-16 лет',
            desc: 'Продвинутый курс для тех, кто хочет научиться создавать компьютерные игры и программы.',
            btnLink: '#ei-newslatter',
            btnIcon: 'fas fa-plus',
            btnText: 'Записаться'
        },
    ]
};

const directionReducer = (state = initialState, action) => {
    switch (action.type) {
        default: {
            return state;
        }
    }
}

export default directionReducer;