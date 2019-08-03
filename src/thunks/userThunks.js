import api from '../services/api'
import * as userActions from '../actions/user';

const userThunks = {
    getUser: username => async (dispatch) => {
        const user = await api.get(`/users/${username}`);
        
        dispatch(userActions.getUser({profile: user.data}))

        //  .then(user => {

        //      console.log('user.repos_url',user.data.repos_url );
        //      api.get(user.repos_url)
        //         .then(repos => {
        //             console.log("repos",repos)
        //             dispatch(userActions.getUser({repos}))
        //         })    
        //     }
        // )
    },
    getRepos: url => dispatch => {
        api.get(url)
           .then(repos => dispatch(userActions.getRepos({repos})))

    }
}

export default userThunks;