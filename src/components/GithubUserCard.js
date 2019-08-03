import React, { Component } from 'react'
import api                  from '../services/api'
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
    ,   RepoData} from '../styles/Card'


class GithubUserCard extends Component {
        
    constructor(props){
        super(props)
        this.state = {
                user    : null
            ,   repos   : null
            ,   error   : false
            ,   loading : true
            ,   opened  : true
        }
    }
    
    closeBoxErrorEvent(){
        this.setState({
            opened : false
        })
    }

    render(){
        const { repos , user } = this.props
        
        if (user && repos)
            return (
                <Card>
                    <CardHeader>
                        <Photo>
                            <Link target="_blank" href={user.html_url}><img height="50px" src={user.avatar_url} alt=""/></Link>
                        </Photo>
                        <UserInfo>
                            <Name><Link  target="_blank" href={user.html_url}>{user.name}</Link></Name>
                            <Nick>{user.login}</Nick>
                        </UserInfo>
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
                        <Repos>                            
                            {                                
                                repos ? repos.map( (repo, key) => 
                                    
                                    <Repo key={key}>
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
                    </CardContent>
                    <CardFooter>
                        <ReposByYear data={repos} />
                    </CardFooter>
                    
                </Card>
            )
            else
                return null
            
    }
}

const CardFooter = styled.div``

const mapStateToProps = ({user : {user, repos, error }}) => ({
    
        user
    ,   repos
    ,   error
    
})
export default connect(mapStateToProps, null)(GithubUserCard)

