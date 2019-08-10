import React from 'react';
import ReactDOM from 'react-dom';
import Main from './App';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';

const App = () => (
    <Provider store={store}>
        <Router>
            <Main />
        </Router>
    </Provider>
)

ReactDOM.render(<App />, document.getElementById('root'));