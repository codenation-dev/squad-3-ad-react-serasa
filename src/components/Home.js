import React, { Component } from 'react'
import Card                 from './Card'
import api                  from '../services/api'

export default class Home extends Component {
    
    constructor( props ) {
        super(props);
        
        console.log(props)
        this.state = { 
            user        : ''    ,
            repos       : []    ,
            value       : ''    ,
            className   : ''    ,


        }
        //this.getDataUser    = this.getDataUser.bind(this)
        this.getDataRepos   = this.getDataRepos.bind(this)
        this.setValue       = this.setValue.bind(this)
    }
    
    setValue( { target : { value }}  ) {
        
        this.setState({ value });
        
    }
    
    setError({className, info}) {
        this.setState({
            className,
            info
            
        })
        
    }
    isEmpty() {
        if ( !this.state.value ) {
            this.setError({"info":"Preencha corretamente os campos", "className":"input-error"})
            return false
        } 
    } 
    
    async getDataRepos(event) {
        event.preventDefault()
        if ( this.isEmpty() )
            return
        await new api.get(`/users/${this.state.value}/repos`).then(res => {
            
            this.setState({
                    
                    repos : res.data
                    
                })
            
        })

        
    }
    
    
    render() {
        
        return (
            <div className="User">
                
                
                <form>
                    <div data-info={this.state.info} className={this.state.className + " field"}>
                        
                        <input  autoComplete="false" placeholderhide="" placeholder=" " value={this.state.value} onChange={this.setValue} type="text" id="username" />
                        <label htmlFor="username">Usuário</label>
                    </div>
                    
                    <div className="user-data">
                        
                        <div className="field">
                            <button onClick={this.getDataUser}> Carregar </button>
                            <button onClick={this.getDataRepos}> Ver repositorios </button> 
                            <button > Criar repositorios </button> 
                        </div>
                    </div>
                </form>
                
                
                { <div className="grid-cards">
                    {this.state.repos.map((item, key) => <Card data={item} key={key} />)}
                </div> }
                
            </div>
        )
    }
    
 
}

