const initialState = {
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
    altText: 'Объясняем простыми словами сложные вещи'
};

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        default: {
            return state;
        }
    }
}

export default mainReducer;