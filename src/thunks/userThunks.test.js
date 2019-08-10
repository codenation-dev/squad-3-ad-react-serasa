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

    it('should dispatch GET_REPOS when fetch repos of github', () => {
        const username = 'gagres';
        apiMock.onGet(`/users/${username}/repos`).reply(200, {
            username
        })

        const expectedActions = [
            { type: actionTypes.GET_REPOS, data: { username } }
        ]

        const store = mockStore({});
        return store.dispatch(actions.getRepos(username)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        })
    })

    it('should dispatch CREATE_REPO when create a new repo on github', () => {
        const newRepoInfo = {
            username: 'gagres',
            password: '12345',
            name: 'new-repo',
            description: 'none',
            isPrivate: false
        }
        const { username, password } = newRepoInfo;

        apiMock.onGet('/authorizations', {}, {
            Authorization: `Basic ${btoa(`${username}:${password}`)}`
        }).reply(200, {
            
        })

        const expectedActions = [
            { type: actionTypes.CREATED_REPO, data: { name: newRepoInfo.name } }
        ]

        const store = mockStore({});
        return store.dispatch(actions.getRepos(username)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        })
    })
})