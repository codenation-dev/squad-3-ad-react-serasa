export function getRepositoriesByLanguage(repos){
    return {
        type: "GET_REPOSITORIES_LANGUAGE",
        data: repos
    }
}