import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import api from '../services/api';

const Button = styled.button`
    /* Adapt the colors based on primary prop */
    background: #2aa1fa;
    color: white;
    font-size: 1em;
    margin: 1em 0em 1em 0em;
    padding: 0.25em 1em;
    border: 2px solid #2aa1fa;
    border-radius: 3px;
`

class Repository extends Component {
    state = {
        repositoryInfo: {},
        commits: [],
    }

    componentDidMount() {
        const { username, repo } = this.props.match.params;
        api.get(`/repos/${username}/${repo}`)
            .then((response) => {
                this.setState({
                    repositoryInfo: response.data,
                });

                return api.get(`/repos/${username}/${repo}/commits`);
            })
            .then((response) => {
                this.setState({
                    commits: response.data,
                });
            })
            .catch(console.error);
    }

    goBack = () => {
        this.props.history.goBack();
    }

    render() {
        const { repositoryInfo, commits } = this.state;
        return (
            <div className="repository-description">
                <Button onClick={this.goBack}>Voltar</Button>
                <h1>{repositoryInfo.name}</h1>
                <h2>{repositoryInfo.created_at}</h2>
                <h3>Número de commits: {commits.length}</h3>
            </div>
        )
    }
}

export default Repository;