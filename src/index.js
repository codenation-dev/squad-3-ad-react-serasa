import React from 'react';
import ReactDOM from 'react-dom';
import Home from './App';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';

const App = () => (
    <Provider store={store}>
        <Router>
            <Home />
        </Router>
    </Provider>
)

ReactDOM.render(<App />, document.getElementById('root'));