import React from 'react';
import { connect } from 'react-redux'
import userThunks from '../thunks/userThunks';
import * as userActions from '../actions/user'


const BaseRedux = props => {
    const handleClick = () => { 
        props.getUser(Math.random())
    }

    return (
        <div className="field" style={{display: "flex", justifyContent:"center"}}>
            <button className="button" onClick={handleClick}>Teste Redux</button>
            <br/>
            {props.user}
        </div>
    )
}

// const mapStateToProps = ({user}) => ({
//     user
// })

// const mapDispatchToProps = dispatch => ({
//     getUser: (number) => dispatch(userThunks.getUser(number)),
//     //repos: () => dispatch(userActions.getRepos())
// })

export default connect(mapStateToProps, mapDispatchToProps)(BaseRedux);