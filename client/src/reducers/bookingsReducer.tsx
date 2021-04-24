import { bookAction, SET_BOOK_DATA, STEP_CHANGE, CATEGORIES_TO_SHOW, FREE_ROOMS_SHOW, SET_CATEGORY, SET_LOADING, GET_PAX_DATA } from '../actions/Booking/bookingAction';

const initialState = {
    step: 0,
    booking: {
        guests: 0,
        range: ['', ''],
        nights: 0,
        category: '',
        fee: 0,
        room_id: 0,
    },
    freeRooms:[],
    categoriesToShow: [],
    roomsAvailable:[],
    loading: false,
    pax_data:[]
}

export function bookingsReducer (state = initialState, action:bookAction) {
    switch ( action.type ) {
        case STEP_CHANGE:
            return { ...state, step: action.payload };
        case SET_BOOK_DATA:
            const { booking } = action.payload;
            return { ...state, booking };  
        case CATEGORIES_TO_SHOW:
            return{...state, categoriesToShow:action.payload, loading: false}      
        case FREE_ROOMS_SHOW:
            return{...state, freeRooms:action.payload }
        case SET_CATEGORY:
            return{...state, category: action.payload }  
        case SET_LOADING:
            return {...state, loading: action.payload};
        case GET_PAX_DATA:
            return{
                ...state,
                pax_data:action.payload
            }
        default: return state;
    }
}