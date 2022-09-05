
const initialState = [
    {
        id:0,
        name:"Srinivas",
        number:8897095427,
        email:"thammineedis@gmail.com"
    },

    {
        id:1,
        name:"Srividya",
        number:9502607631,
        email:"vidyachowdary7@gmail.com"

    },
    {
        id:3,
        name:"Ram",
        number:9398795273,
        email:"ram@gmail.com"

    },
];

const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_CONTACT":
        state =[...state, action.payload];
        return state;

        case "UPDATE_CONTACT" :
        const updateState = state.map(contact=>contact.id === action.payload.id? action.payload: contact);
        state = updateState;
        return state;

        case "DELETE_CONTACT":
        const filterContacts = state.filter(contact=> contact.id !== action.payload && contact);
        state = filterContacts;
        return state;
        default:
        return state;
    }
};

export  default contactReducer;