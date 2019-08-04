const INITIAL_STATE = {
        repos   : null
    ,   user    : null
    ,   error   : null
}

const user = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "GET_USER":
            //delete state.error
            return {
                ...state,
                error:false,
                user: {...action.data}
            };
        case "GET_REPOS":
            
            //delete state.error
            return {
                ...state,
                error:false,
                repos: [...action.data]
            };
        case "ERROR":
            return {
                error: {...action.data}
            };
        case "CLEAR_ERROR":
            return {
                error:action.data
            };
            
        default:
            return state;
    }
} 

export default user; 