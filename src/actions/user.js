export function getUser(users){
    return {
        type: "GET_USER",
        data: users
    }
}

export function getRepos(repos){
    return {
        type: "GET_REPOS",
        data: repos
    }
}

export function error(error){
    return {
        type: "ERROR",
        data: error
    }
}