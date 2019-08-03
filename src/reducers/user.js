const INITIAL_STATE = {
    repos: null,
    profile: null,
}

const user = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "GET_USER":
            return {
                ...state,
                profile: {...action.data.profile}
            };
        case "GET_REPOS":
            return {
                ...state,
                repos: {...action.data}
            };

        default:
            return state;
    }
} 

export default user; 