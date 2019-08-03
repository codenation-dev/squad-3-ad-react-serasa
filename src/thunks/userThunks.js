import api from '../services/api'
import * as userActions from '../actions/user';

const userThunks = {
    getUser: username => dispatch => {
        api.get(`/users/${username}`)
           .then((user) => {
                dispatch(userActions.getUser(user.data))
           }).catch((error) => {
                dispatch(userActions.error(error.response))
           }
        )
    },
    getRepos: username => dispatch => {
        api.get(`/users/${username}/repos`)
            .then((repos) => {
                dispatch(userActions.getRepos(repos.data))
            }).catch((error) => {
                dispatch(userActions.error(error.response))
            }
        )
    }
}

export default userThunks;