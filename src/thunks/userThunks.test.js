import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import MockAdapter from 'axios-mock-adapter'
import * as actionTypes from '../utils/actionTypes'
import actions from './userThunks'
import api from '../services/api'

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const apiMock = new MockAdapter(api);

describe('User Thunks', () => {
    afterEach(() => apiMock.reset());

    it('should dispatch GET_USER when fetched user on github', () => {
        const username = 'gagres';
        apiMock.onGet(`/users/${username}`).reply(200, {
            username
        })

        const expectedActions = [
            { type: actionTypes.GET_USER, data: { username } }
        ];

        const store = mockStore({});

        return store.dispatch(actions.getUser(username)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        })
    })
})