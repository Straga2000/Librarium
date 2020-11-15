import React from 'react';
import ReactDOM from 'react-dom';

///MAIN PAGE FOR TEMPLATE-REACT PAGE

///IMPORT CUSTOM STYLING
import './Styles/index.css';

///IMPORT MAIN-APP COMPONENT
import App from './Components/App';

///RENDER MAIN ELEMENT
ReactDOM.render(
    <App/>,
    document.getElementById('root')
);