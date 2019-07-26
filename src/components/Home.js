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
        await api.get(`/users/${this.state.value}/repos`).then(res => {
            
            this.setState({
                    
                    repos : res.data
                    
                })
            
        })

        
    }
    
    

    render() {
        
        //const keys = Object.keys(this.state.user)
        
        return (
            <div className="User">
                
                
                <form>
                    <div data-info={this.state.info} className={this.state.className + " field"}>
                        
                        <input  autoComplete="false" placeholderhide="" placeholder=" " value={this.state.value} onChange={this.setValue} type="text" id="userName" />
                        <label htmlFor="userName">Usuário</label>
                        <button onClick={this.getDataUser}> Carregar </button>
                        
                    </div>
                    
                    <div className="user-data">
                        <p>Bem vindo  o que gostaria de fazer</p>
                            <div className="field">
                            <button onClick={this.getDataRepos}> Ver repositorios </button> 
                            <button > Criar repositorios </button> 
                        </div>
                    </div>
                </form>
                {console.log( this.state.value )}
                
                {  /* this.state.visible ? <Request  url={`https://api.github.com/users/${ this.state.value }/repos`} config={ {method:"get", headers:{}} } render={ response => 
                    {
                        
                        
                        return (
                            <div className="grid-cards">
                                {response.data.map((item, key) => <Card data={item} key={key} />)}
                            </div>
                        )
                    }
                } />: null  */}
                

                
                { <div className="grid-cards">
                    {this.state.repos.map((item, key) => <Card data={item} key={key} />
                    
                    
                    )}
                </div> }
                
            </div>
        )
    }
    
    /*  
    
    
    
                
    componentDidMounts() {
        
        let data = new Request({ service: `/users/${this.props.name}` })
        data.then((response) => {
        
            const data = response.data[this.props.data]
            console.log(response)
            this.setState({ data });
            
        }).catch(err => console.log(err));
        
    } */
}

