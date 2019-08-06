import {
        GET_USER    
    ,   GET_REPOS   
    ,   GET_AUTH    
    ,   ERROR       
    ,   CLEAR_ERROR 
} from '../utils/actionTypes'

const INITIAL_STATE = {
        repos   : []
    ,   user    : null
    ,   auth    : null
    ,   error   : false
}

const user = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_USER:
            return {
                ...state,
                error:false,
                user: {...action.data}
            };
        case GET_REPOS:
            return {
                ...state,
                error:false,
                repos: [...action.data]
            };
        case GET_AUTH :
            return {
                ...state,
                error:false,
                auth: {...action.data}
            };
        case ERROR:
            return {
                error: {...action.data}
            };
        case CLEAR_ERROR:
            return {
                error:action.data
            };
        case "CREATED_REPO":
            return {
                ...state,
                reposCreated:action.data
            };
            
        default:
            return state;
    }
} 

export default user; 