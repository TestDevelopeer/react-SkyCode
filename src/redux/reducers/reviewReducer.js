const initialState = {
    title: {
        mainText: 'Отзывы',
        altText: 'Что говорят о нас ученики и их родители'
    },
    reviewItems: [
        {
            text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.',
            cntStars: 5,
            avatar: 'img/saas-m/testimonial/tst1.png',
            user: 'Какой-то пользователь',
            direction: 'Scratch'
        }, {
            text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.',
            cntStars: 5,
            avatar: 'img/saas-m/testimonial/tst2.png',
            user: 'Какой-то пользователь',
            direction: 'Frontend'
        }, {
            text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.',
            cntStars: 5,
            avatar: 'img/saas-m/testimonial/tst3.png',
            user: 'Какой-то пользователь',
            direction: 'Python'
        }, {
            text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.',
            cntStars: 5,
            avatar: 'img/saas-m/testimonial/tst4.png',
            user: 'Какой-то пользователь',
            direction: 'Scratch'
        }, {
            text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.',
            cntStars: 5,
            avatar: 'img/saas-m/testimonial/tst5.png',
            user: 'Какой-то пользователь',
            direction: 'Frontend'
        }, {
            text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.',
            cntStars: 5,
            avatar: 'img/saas-m/testimonial/tst6.png',
            user: 'Какой-то пользователь',
            direction: 'Python'
        }
    ],
    reviewIndicators: [
        {
            target: '#testimonial_slide',
            slideTo: '0',
            avatar: 'img/saas-m/testimonial/tst1.png'
        }, {
            target: '#testimonial_slide',
            slideTo: '1',
            avatar: 'img/saas-m/testimonial/tst2.png'
        }, {
            target: '#testimonial_slide',
            slideTo: '2',
            avatar: 'img/saas-m/testimonial/tst3.png'
        }, {
            target: '#testimonial_slide',
            slideTo: '3',
            avatar: 'img/saas-m/testimonial/tst4.png'
        }, {
            target: '#testimonial_slide',
            slideTo: '4',
            avatar: 'img/saas-m/testimonial/tst5.png'
        }, {
            target: '#testimonial_slide',
            slideTo: '5',
            avatar: 'img/saas-m/testimonial/tst6.png'
        }
    ]
};

const reviewReducer = (state = initialState, action) => {
    switch (action.type) {
        default: {
            return state;
        }
    }
}

export default reviewReducer;