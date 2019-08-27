import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { declareModuleExports } from '@babel/types';

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);