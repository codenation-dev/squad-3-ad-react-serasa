const INITIAL_STATE = {
        repos   : null
    ,   user    : null
    ,   error   : null
}

const user = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "GET_USER":
            return {
                ...state,
                user: {...action.data}
            };
        case "GET_REPOS":
            return {
                ...state,
                repos: [...action.data]
            };
        case "ERROR":
            return {
                ...state,
                error: {...action.data}
            };

        default:
            return state;
    }
} 

export default user; 