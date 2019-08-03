const INITIAL_STATE = {
    repos   : null
}

const repository = (state = INITIAL_STATE, action) => {
    console.log("ACTION", action)
    switch (action.type) {
        case "GET_REPOSITORIES_LANGUAGE":
            return {
                ...state,
                repos: [...action.data]
            };
        
        default:
            return state;
    }
} 

export default repository; 