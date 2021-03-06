import {
    GET_USER    
,   GET_REPOS   
,   ERROR       
,   CLEAR_ERROR
,   CREATED_REPO 
} from '../utils/actionTypes'

export function getAuth(auth){
    return {
        type: GET_USER,
        data: auth
    }
}
export function createRepo(repo){
    return {
        type: CREATED_REPO,
        data: repo
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