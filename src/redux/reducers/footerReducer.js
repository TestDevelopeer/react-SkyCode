const initialState = {
    icons: [
        {
            text: 'fab fa-facebook-square',
            link: '#'
        }, {
            text: 'fab fa-instagram',
            link: '#'
        }
    ],
    contacts: [
        {
            text: 'admin@sky-academy.online',
            link: 'mailto:admin@sky-academy.online',
            type: 'email',
            icon: 'far fa-envelope'
        },{
            text: '+380 95 585 2421',
            link: 'tel:+380955852421',
            type: 'phone',
            icon: 'fas fa-mobile-alt'
        },{
            text: 'WhatsApp',
            link: 'https://wa.me/+380955852421',
            type: 'messanger',
            icon: 'fab fa-whatsapp'
        },{
            text: 'Viber',
            link: 'viber://chat?number=+380955852421',
            type: 'messanger',
            icon: 'fab fa-viber'
        },{
            text: 'Telegram',
            link: 'https://t.me/+380955852421',
            type: 'messanger',
            icon: 'fab fa-telegram-plane'
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