import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/Card'
import api from '../services/api'

export default class Home extends Component {
    
    constructor( props ) {
        super(props);
        this.state = { 
            user        : ''    ,
            repos       : []    ,
            username       : ''    ,
            className   : ''    ,
        }
        //this.getDataUser    = this.getDataUser.bind(this)
        this.getDataRepos   = this.getDataRepos.bind(this)
        this.setValue       = this.setValue.bind(this)
    }
    
    setValue( { target : { value: username }}  ) {
        this.setState({ username });
    }
    
    setError({className, info}) {
        this.setState({
            className,
            info
        })
    }
    isEmpty() {
        if ( !this.state.username ) {
            this.setError({"info":"Preencha corretamente os campos", "className":"input-error"})
            return false
        }
    }

    submitForm = (event) => {
        event.preventDefault();
        this.getDataRepos();
    }
    
    async getDataRepos() {
        if ( this.isEmpty() )
            return
        await new api.get(`/users/${this.state.username}/repos`).then(res => {
            this.setState({
                    repos : res.data
                })
        })
    }
    
    render() {
        const { username } = this.state;
        return (
            <div className="User">  
                <form onSubmit={this.submitForm}>
                    <div data-info={this.state.info} className={this.state.className + " field"}>
                        <input autoComplete="false" 
                            placeholderhide=""
                            placeholder=""
                            value={username}
                            onChange={this.setValue}
                            type="text"
                            id="username" />
                        <label htmlFor="username">Usuário</label>
                    </div>
                    
                    <div className="user-data">
                        <div className="field">
                            <button onClick={this.getDataUser}> Carregar </button>
                            <button type="button"> Ver repositorios </button> 
                            <button > Criar repositorios </button> 
                        </div>
                    </div>
                </form>
                
                
                <div className="grid-cards">
                    {this.state.repos.map((item, key) => (
                        <Link to={{
                            pathname: `/${username}/${item.name}`,
                        }}>
                            <Card data={item} key={key} />
                        </Link>
                    ))}
                </div>
            </div>
        )
    }
}

