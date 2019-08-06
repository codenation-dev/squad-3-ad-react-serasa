import {
    GET_USER    
,   GET_REPOS   
,   ERROR       
,   CLEAR_ERROR 
} from '../utils/actionTypes'

export function getAuth(auth){
    return {
        type: GET_USER,
        data: auth
    }
}

export function getUser(users){
    return {
        type: GET_USER,
        data: users
    }
}

export function getRepos(repos){
    return {
        type: GET_REPOS,
        data: repos
    }
}

export function error(error){
    return {
        type: ERROR,
        data: error
    }
}

export function clearError(){
    return {
        type: CLEAR_ERROR,
        data: false
    }
}