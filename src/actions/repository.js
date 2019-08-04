export function getRepositoriesByLanguage(repos){
    return {
        type: "GET_REPOSITORIES_LANGUAGE",
        data: repos
    }
}
export function create(repo){
    return {
        type: "CREATE",
        data: repo
    }
}
export function clearError(){
    return {
        type: "CLEAR_ERROR",
        data: false
    }
}