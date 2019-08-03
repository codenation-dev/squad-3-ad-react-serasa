import api from '../services/api'
import * as userActions from '../actions/user';

const userThunks = {
    getUser: username => async (dispatch) => {
        //let _dispatch = null
    
        api.get(`/users/${username}`)
            .then((user) => {
                dispatch(userActions.getUser(user.data))
            }).catch((error) => {
                dispatch(userActions.error(error.response))
            }
            )
            
            //alert(username)
            
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
    getRepos: username => async (dispatch) => {
        
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