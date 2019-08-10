import api from '../services/api'
import * as userActions from '../actions/user';
import {APP_NAME} from '../utils/constants'

const userThunks = {
    getUser: username => dispatch => {
        return api.get(`/users/${username}`)
           .then((user) => {
                dispatch(userActions.getUser(user.data))
           }).catch((error) => {
                dispatch(userActions.error(error.response))
           }
        )
    },
    getRepos: username => dispatch => {
      return api.get(`/users/${username}/repos`)
            .then((repos) => {
                dispatch(userActions.getRepos(repos.data))
            }).catch((error) => {
                dispatch(userActions.error(error.response))
            }
        )
    },
    createRepo: ({username, password, name, description, isPrivate}) => dispatch => {
        const headers = (Authorization = "Basic " + btoa(username+':'+password)) =>({ 
            headers: {
                Authorization 
            }});

        api.get(`/authorizations`, headers())
            .then(async ({data}) => { 
                const auth = data.find(item => item.app.name === APP_NAME);
                
                if(auth){
                    await api.delete(`/authorizations/${auth.id}`, headers())
                }
                
                const createdauth = await api.post('/authorizations',{
                    scopes: ["repo"],
                    note: APP_NAME
                }, headers());
                
                const repo = await api.post("/user/repos",{
                    private: isPrivate,
                    name,
                    description,
                    auto_init: true
                }, headers(`token ${createdauth.data.token}`))

                dispatch(userActions.createRepo(repo))
            })
            .catch((error) => {
                dispatch(userActions.error(error.response))
            }
        )
    }
}

export default userThunks;