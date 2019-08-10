import { GET_REPOSITORIES_LANGUAGE, CLEAR_ERROR } from '../utils/actionTypes';
import {
    getRepositoriesByLanguage,
    clearError
} from './repository';

describe('Repository Actions', () => {
    it('should create an action to get repositories by language', () => {
        const language = 'javascript';
        const expectedAction = {
            type: GET_REPOSITORIES_LANGUAGE,
            data: language
        };
        expect(getRepositoriesByLanguage(language)).toEqual(expectedAction);
    });

    it('should create an action to clear error', () => {
        const expectedAction = {
            type: CLEAR_ERROR,
            data: false
        };
        expect(clearError()).toEqual(expectedAction);
    })
})