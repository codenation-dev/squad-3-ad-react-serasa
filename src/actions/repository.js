import { GET_REPOSITORIES_LANGUAGE, CLEAR_ERROR } from '../utils/actionTypes';

export function getRepositoriesByLanguage(repos){
    return {
        type: GET_REPOSITORIES_LANGUAGE,
        data: repos
    }
}
<<<<<<< HEAD
=======
export function create(repo){
    return {
        type: "CREATE",
        data: repo
    }
}

>>>>>>> 23fa423665b9c112f1e928d103d283038e8ecfa4

export function clearError(){
    return {
        type: CLEAR_ERROR,
        data: false
    }
}