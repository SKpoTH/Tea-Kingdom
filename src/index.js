import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Template from './Template';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Template />, document.getElementById('root'));
registerServiceWorker();
