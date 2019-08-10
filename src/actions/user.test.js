import {
    GET_USER,
    GET_REPOS,   
    ERROR,  
    CLEAR_ERROR,
    CREATE_REPO
} from '../utils/actionTypes'

import {
    clearError,
    createRepo,
    error,
    getAuth,
    getRepos,
} from './user'

describe('User Acton', () => {
    it('should create an action to get user by auth', () => {
        const auth = '<some_auth_here>';
        const expectedAction = {
            type: GET_USER,
            data: auth
        }
        expect(getAuth(auth)).toEqual(expectedAction);
    })
    
    it('should create an action to create a repo', () => {
        const repo = { name: 'novo repo' };
        const expectedAction = {
            type: CREATE_REPO,
            data: repo
        }
        expect(createRepo(repo)).toEqual(expectedAction);
    })
    
    it('should create an action to get a repo', () => {
        const repos = '<nome_do_repo>';
        const expectedAction = {
            type: GET_REPOS,
            data: repos
        }
        expect(getRepos(repos)).toEqual(expectedAction);
    })
    
    it('should create an action to send an error', () => {
        const errorMsg = 'this is an error message';
        const expectedAction = {
            type: ERROR,
            data: errorMsg
        }
        expect(error(errorMsg)).toEqual(expectedAction);
    })
    
    it('should create an action to clear error messages', () => {
        const expectedAction = {
            type: CLEAR_ERROR,
            data: false
        }
        expect(clearError()).toEqual(expectedAction);
    })
})