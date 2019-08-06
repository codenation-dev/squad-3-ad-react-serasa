import { GET_REPOSITORIES_LANGUAGE, CLEAR_ERROR } from '../utils/actionTypes';

export function getRepositoriesByLanguage(repos){
    return {
        type: GET_REPOSITORIES_LANGUAGE,
        data: repos
    }
}

export function clearError(){
    return {
        type: CLEAR_ERROR,
        data: false
    }
}