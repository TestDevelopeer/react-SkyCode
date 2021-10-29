const initialState = {
    title: {
        mainText: 'Авторские курсы по направлениям:',
        altText: ''
    },
    cardInfo: [
        {
            mainText: 'Scratch',
            altText: '8-12 лет',
            desc: 'Если у ребенка нет опыта, то это направление для него. Курс построен для введения в программирование и позволит не заскучать ребенку изучая сложные вещи.',
            icon: 'fas fa-file-code',
            resource: '/img/directions/scratch.gif',
            btnLink: '/direction/scratch',
            btnIcon: 'fas fa-plus',
            btnText: 'Записаться'
        }, {
            mainText: 'Frontend',
            altText: '10-16 лет',
            desc: 'Если ребенок мечтает пойти по пути Марка Цукенберга и создать собственную социальную сеть, то тогда ему именно на это направление. Тут он научится создавать современные сайты и работать с графическими редакторами.',
            icon: 'fab fa-node-js',
            btnLink: '/direction/frontend',
            btnIcon: 'fas fa-plus',
            btnText: 'Записаться'
        }, {
            mainText: 'Python',
            altText: '12-16 лет',
            desc: 'Для тех, кто хочет познакомиться с одним из самых популярных языков программирования в мире и уже на первом уроке создать свою полноценную программу, даже не имея опыта.',
            icon: 'fab fa-python',
            btnLink: '/direction/python',
            btnIcon: 'fas fa-plus',
            btnText: 'Записаться'
        }
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