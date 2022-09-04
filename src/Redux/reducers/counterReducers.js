import { DECREMENT, INCREMENT, RESET } from "../constants/counterConstants";

export const initCounterState = {
    counter: 0
}

const counterReducer = (state = initCounterState, action) => {
    switch (action.type) {

        case INCREMENT:
            return {
                ...state, counter: state.counter + 1
            }

        case DECREMENT:
            return {
                ...state, counter: state.counter - 1
            }

        case RESET:
            return {
                ...state, counter: 0
            }

        default:
            return state;
    }
}

export default counterReducer;