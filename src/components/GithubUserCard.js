import React, { Component } from 'react'
import Error                from '../components/Error'
import styled               from 'styled-components'
import { connect } from 'react-redux'
import ReposByYear from './ReposByYear';
import {CardHeader
    ,   Card
    ,   Link
    ,   Photo
    ,   UserInfo
    ,   Nick
    ,   Name
    ,   CardContent
    ,   UserData
    ,   OthersInfo
    ,   Info
    ,   UserStats
    ,   Stats
    ,   Circle
    ,   Repos
    ,   Repo
    ,   RepoLink
    ,   RepoData
    ,   CardContentTitle
    ,   Title
    ,   Icon} from '../styles/Card'
import { bindActionCreators } from 'redux';
import  * as repositoriesAction from '../actions/repository';
import {Link as LinkRouter} from 'react-router-dom'
import LoadingSvg from '../assets/loading'

class GithubUserCard extends Component {
    constructor(props){
        super(props)
        this.state = {
                user     : null
            ,   repos    : null
            ,   open     : false
            ,   loading  : false
            ,   isShowing : false
            ,   select : ''
        }
        
        this.closeHandler = this.closeHandler.bind(this);
        this.handleChange = this.handleChange.bind(this); 
    }
    
    componentDidMount(oldProps){
        
        this.setState({
            loading: true 
        });
        
    }
    
    closeHandler = () => { 
        this.props.clearError();
    }
    
    handleChange({target:{name, value}}){
        this.setState({
            [name]: value
        });
    }
    
    render(){
        let { repos , user, error } = this.props
        let { loading } = this.state
        
        
        
        if (repos || user || error) {
            loading = false
        }else {
            loading = true
        }
        
        if ( loading ) {
            return <LoadingSvg /> 
        }
        
        if (user && repos)
            return (
                
                <Card>
                    
                    <CardHeader>
                        <Photo>
                            <Link target="_blank" href={user.html_url}><img height="50px" src={user.avatar_url} alt=""/></Link>
                        </Photo>
                        <UserInfo>
                            <Name>
                                <Link  target="_blank" href={user.html_url}>{user.name}</Link>
                            </Name>
                            <Nick>{user.login}</Nick>
                        </UserInfo>
                        <Icon className="createIcon" title="Criar repositorio"> 
                            <LinkRouter to={{
                                pathname: "/user/repos",
                                state: {
                                    username: user.login
                                }}
                            }> + </LinkRouter>
                        </Icon>
                    </CardHeader>
                    <CardContent>
                        
                        <UserData>
                            <OthersInfo>
                                <Info>Location  : {user.location}</Info>
                                <Info>Email     : {user.email}</Info>
                                <Info>Company   : {user.company}</Info>
                                <Info>Created   : {user.created_at}</Info>
                            </OthersInfo>
                            <UserStats>
                                <Stats><b>{user.public_repos}</b><p>Repos</p></Stats>
                                <Stats><b>{user.followers}</b><p>Followers</p></Stats>
                                <Stats><b>{user.following}</b><p>Following</p></Stats>
                            </UserStats>
                        </UserData>
                        <UserData>
                            
                            <ReposByYear data={repos} />
                            
                        </UserData>
                        <CardContentTitle>
                            
                            <Title >Repositórios</Title>
                            <Select name="select" value={this.state.select} onChange={this.handleChange}>
                                <option value="">All</option>
                                {
                                    [...new Set(repos.map(repo =>  repo.language ).filter(repo => repo != null))].map((language, key) =>  <option key={key} value={language}>{language}</option>)
                                }
                            </Select>
                        </CardContentTitle>
                        <Repos>                            
                            {                                
                                <AllRepos filter={this.state.select ? this.state.select : ''} repos={repos} /> 
                            }
                            
                        </Repos>
                    </CardContent>
                    
                    
                </Card>
            )
            else {
                    
                    let code = error ? error.status : false
                    return <Error 
                        
                        close={this.closeHandler} 
                        code={code} 
                        type="HttpErrors" 
                    />
                
            }
                
            
    }
}


class AllRepos extends Component {
    
    
    render() {
        
        let  { repos, filter } = this.props
        
        if (filter) {
            
            repos = repos.filter(repo => repo.language === filter)
            
        }
        
        return (
            repos.map( (repo, key) => 
                                    
                <Repo key={key}>
                    { repo.name         ? 
                        <RepoData>
                            <RepoLink target="_blank" href={repo.html_url}>{ repo.name       } </RepoLink>
                        </RepoData> 
                        :
                        <RepoData >&nbsp;</RepoData>
                    }
                    { repo.description  ? <RepoData  > { repo.description} </RepoData >  :<RepoData >&nbsp;</RepoData>}
                    { repo.language     ? <RepoData  className="language"> <Circle /> { repo.language   } </RepoData > :<RepoData >&nbsp;</RepoData>}
                                        
                </Repo>
                
            ) 
        )
    }
}


const Select = styled.select`
    border: solid 1px rgba(0, 0, 0, 0.78);
    font-size: 18px;
    padding: 5px;

`

const mapStateToProps = ({user : {user, repos, error }}) => ({
        user
    ,   repos
    ,   error
})

const mapDispatchToProps = dispatch => ({
    clearError: bindActionCreators(repositoriesAction.clearError, dispatch)
})


export default connect(mapStateToProps, mapDispatchToProps)(GithubUserCard)

