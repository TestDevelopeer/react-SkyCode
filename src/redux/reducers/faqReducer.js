const initialState = {
    title: {
        mainText: 'FAQ',
        altText: 'Мы подготовили ответы на часто задаваемые вопросы'
    },
    accordionItems: [
        {
            question: 'С какого возраста можно начать?',
            answer: 'Минимальный порог – 8 лет, главный навык, которым ребенок должен обладать умение читать. Вы всегда можете попробовать запизавшись на вводный урок.',
            isShowed: true,
            parent: '#accordionExample'
        }, {
            question: 'В каком формате проходят занятия?',
            answer: 'Занятия проходят онлайн с помощью площадки Zoom. Преподаватель индивидуально проводить урок с учеником на протяжении 50 минут.',
            isShowed: false,
            parent: '#accordionExample'
        }, {
            question: 'Что делать если ребенок заболел и/или пропустил занятие?',
            answer: 'Уроки не сгорают, а переходят на следующий урок по расписанию.',
            isShowed: false,
            parent: '#accordionExample'
        }, {
            question: 'Можно ли получить скидку за второго ребенка?',
            answer: 'Да, подробнее Вы можете узнать у менеджера.',
            isShowed: false,
            parent: '#accordionExample'
        }, {
            question: 'Где я могу узнать о успеваемости своего ребенка?',
            answer: 'Каждый 6 урок Вам будет приходить отчет об успеваемости ребенка.',
            isShowed: false,
            parent: '#accordionExample'
        }, {
            question: 'Есть ли домашнее задание?',
            answer: 'Да, после каждого урока преподаватель будет задавать домашнее задание в зависимости от изученного материала.',
            isShowed: false,
            parent: '#accordionExample'
        }
    ]
};

const faqReducer = (state = initialState, action) => {
    switch (action.type) {
        default: {
            return state;
        }
    }
}

export default faqReducer;