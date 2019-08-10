import api from '../services/api'
import * as repositoryActions from '../actions/repository';

const repositoryThunks = {
    getReposByLanguage: (repo, language) => dispatch => {
        const url = `/search/repositories?q=${repo}${language ? `+language:${language}` : ''}`;
        return api.get(url)
            .then(({data}) => dispatch(repositoryActions.getRepositoriesByLanguage(data.items)))
            .catch((error) => {
                //dispatch(repositoryActions.error(error.response))
            }
        )
    }
}

export default repositoryThunks;