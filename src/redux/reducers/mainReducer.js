const initialState = {
    centerText: 'Первая детская IT-академия',
    mainText: 'Ваш гид в направлении',
    directions: [
        {
            text: 'Scratch',
        }, {
            text: 'Frontend',
        }, {
            text: 'Python',
        }
    ],
    altText: [
        'Объясняем простыми словами сложные вещи',
        'Подстроимся под расписание ребенка',
        'Развиваем логику',
        'Знакомим с перспективной профессией'
    ]
};

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        default: {
            return state;
        }
    }
}

export default mainReducer;