const initialState = {
    title: 'Мы в цифрах',
    counters: [
        {
            start: 0,
            end: 50,
            postText: '',
            text: 'преподавателей'
        },{
            start: 0,
            end: 15,
            postText: '',
            text: 'стран'
        },{
            start: 0,
            end: 45,
            postText: '',
            text: 'городов'
        },{
            start: 0,
            end: 10,
            postText: 'k',
            text: 'уроков в месяц'
        },
    ]
};

const countUpReducer = (state = initialState, action) => {
    switch (action.type) {
        default: {
            return state;
        }
    }
}

export default countUpReducer;