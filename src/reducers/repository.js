import {GET_REPOSITORIES_LANGUAGE, CLEAR_ERROR} from '../utils/actionTypes'

const INITIAL_STATE = {
    repos   : []
}

const repository = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_REPOSITORIES_LANGUAGE:
            return {
                ...state,
                repos: [...action.data]
            };
        case CLEAR_ERROR:
            return {
                error:action.data
            };
        
        default:
            return state;
    }
} 

export default repository; 