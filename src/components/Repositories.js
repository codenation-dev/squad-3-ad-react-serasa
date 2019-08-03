import React, { Component } from 'react';
import {Input, Button} from '../styles/Input';
import {
        Circle
    ,   Repos
    ,   Repo
    ,   RepoLink
    ,   RepoData} from '../styles/Card'
import {connect} from 'react-redux'
import repositoryThunks from '../thunks/repositoryThunks'

class Repositories extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            repository: "",
            language: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange({target: {name, value}}){
        this.setState({
            [name]: value
        })
    }

    handleSubmit(e){
        e.preventDefault();
        const {repository, language} = this.state;

        this.props.getRepositoriesByLanguage(repository, language);
    }
    
    render() {
        const {repository, language} = this.state;
        const { repos } = this.props;
        
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <Input name="repository" value={repository} onChange={this.handleChange}/> Repositório
                    <Input name="language" value={language} onChange={this.handleChange}/> Linguagem
                    <br/>
                    <Button type="submit">buscar</Button>
                </form>
                    <Repos>                            
                        {                                
                            repos ? repos.map( (repo, key) => 
                                
                                <Repo  key={key}>
                                    { repo.name         ? 
                                        <RepoData>
                                            <RepoLink target="_blank" href={repo.html_url}>{ repo.name       } </RepoLink>
                                        </RepoData> 
                                        :
                                        <RepoData >&nbsp;</RepoData>
                                    }
                                    { repo.description  ? <RepoData  >                               { repo.description} </RepoData >            :<RepoData >&nbsp;</RepoData>}
                                    { repo.language     ? <RepoData  className="language"> <Circle />                    { repo.language   } </RepoData >            :<RepoData >&nbsp;</RepoData>}
                                                        
                                </Repo>
                                
                            ) : null
                        }
                        
                    </Repos>

            </div>
        )
    }
}

const mapStateToProps = ({repository}) => ({
    repos: repository.repos
})

const mapDispatchToProps = dispatch => ({
    getRepositoriesByLanguage: (repo, language) => dispatch(repositoryThunks.getReposByLanguage(repo, language))
})

export default connect(mapStateToProps,mapDispatchToProps)(Repositories);
