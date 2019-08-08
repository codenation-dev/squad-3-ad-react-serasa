import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import MockAdapter from 'axios-mock-adapter'
import * as actionTypes from '../utils/actionTypes'
import actions from './repositoryThunks'
import api from '../services/api'

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const apiMock = new MockAdapter(api);

describe('Repository Thunk', () => {
    afterEach(() => apiMock.reset());

    it('should populate GET_REPOSITORIES_LANGUAGE when getReposByLanguage has been done', () => {
        const repo = 'test-repo';
        const itemsExpected = ['um repositório']

        apiMock.onGet(`/search/repositories?q=${repo}`).reply(200, {
            items: itemsExpected
        })

        const expectedActions = [
            { type: actionTypes.GET_REPOSITORIES_LANGUAGE, data: itemsExpected }
        ];
        const store = mockStore({});
        
        return store.dispatch(actions.getReposByLanguage(repo)).then((response) => {
            expect(store.getActions()).toEqual(expectedActions);
        })
    })
})