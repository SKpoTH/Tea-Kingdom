import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Template from './Template_ex';

import registerServiceWorker from './registerServiceWorker';
import {browserHistory} from 'react-router';

import Routes from './routes';

ReactDOM.render(
    <Routes history={browserHistory}/>,
    document.getElementById('root')
);

/*
ReactDOM.render(<Template />, document.getElementById('root'));
registerServiceWorker();
*/