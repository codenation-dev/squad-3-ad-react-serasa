import React, { Component } from 'react';
import {Inputs, Input, Field, Label, Button, Form} from '../styles/Input';
import {connect} from 'react-redux'
import userThunks from '../thunks/userThunks'
import Error                from '../components/Error'
import  * as repositoriesAction from '../actions/repository';
import { bindActionCreators } from 'redux';
class CreateRepo extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            username: "",
            password: "",
            repositoryName: "",
            description: "",
            isPrivate: false,
            token: null,
            loading: false
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.closeHandler = this.closeHandler.bind(this);
        
        if (this.props.location.state && "username" in this.props.location.state)
            this.usernameURL = this.props.location.state.username;
    }
    
    
    closeHandler = () => {
        this.props.clearError();
        this.setState({
            loading: false
        })
    }
    
    
    handleChange({target:{name, value}}){
        this.setState({
            [name]: value
        });
    }

    handleSubmit(e){
        e.preventDefault();
        this.setState({ loading: true })
        const {username, password, repositoryName, description, isPrivate} = this.state;

        this.props.createRepo({
            username: this.usernameURL || username, 
            password,
            name: repositoryName,
            description, 
            isPrivate
        });
    }
    
    render() {
        const readonly = !!this.usernameURL;
        let { loading ,username, password, repositoryName, description, isPrivate } = this.state;
        const {error, reposCreated} = this.props
        
        if (reposCreated || error) {
            loading = false
        }
        return (
            <div>
                { error ? <Error 
                        close={this.closeHandler} 
                        code={error.status} 
                        type="HttpErrors" 
                    />:null}
                    
                
                <h2>Crie um repositorio</h2>
                <p>Para criar um repositorio complete os formulario abaixo</p>
                
                <Form onSubmit={this.handleSubmit}>
                    <Inputs>
                        <Field className="field">
                            <Input 
                                name="username"
                                readonly={readonly} 
                                value={this.usernameURL || username}
                                onChange={this.handleChange}
                                placeholderhide = "" 
                                placeholder = " "
                                required="required"
                                /> 
                            <Label>Username</Label>
                        </Field>
                        <Field className="field">
                            <Input
                                name="password"
                                value={password}
                                type="password"
                                onChange={this.handleChange}
                                placeholderhide = "" 
                                placeholder = " "
                                required="required"
                            /> 
                            <Label>Senha</Label>
                            
                        </Field>
                        
                        
                        
                    </Inputs><Inputs>
                    <Field className="field">
                            <Input
                                name="repositoryName"
                                value={repositoryName}
                                onChange={this.handleChange}
                                placeholderhide = "" 
                                placeholder = " "
                                required="required"
                            /> 
                            <Label>Nome do repositório</Label>
                        </Field>
                    <Field className="checkbox">
                            <Input type="checkbox"
                                name="isPrivate"
                                value={isPrivate}
                                onChange={this.handleChange}
                                placeholderhide = "" 
                                placeholder = " "
                            /> <Label>Privado ?</Label>
                        </Field>
                        </Inputs>
                        
                        <Field className="field">
                            <textarea
                                name="description"
                                value={description}
                                onChange={this.handleChange}
                                placeholderhide = "" 
                                placeholder = " "
                                required="required"
                            /> 
                            <Label>Descrição</Label>
                        </Field>
                        
                        
                    <Field className="field no-flex">
                        <Button disabled={loading? true: false} className="button" type="submit">{loading?"carregando ...": "Criar"}</Button>
                    </Field>
                    
                </Form>
                {reposCreated ? <Success data={reposCreated} />: null }
            </div>
        )
    }
}



class Success extends Component {
    render() {
        
        const { name, html_url } = this.props.data.data
        
        return (
            <div className="success">
            <div className="wrap_success">
                <div className="mensagem">
                    Repositorio {name} criado com sucesso
                </div>
            </div>
            <div>
                Ver repositorio <a href={html_url}>{name}</a>
            </div>
        </div>
        )
    }
}

const mapDispatchToProps = {
    createRepo: userThunks.createRepo,
    clearError: repositoriesAction.clearError
}

const mapStateToProps = ({user : {reposCreated, error }}) => ({
    reposCreated 
,   error
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateRepo);
