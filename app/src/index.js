import React from 'react';
import ReactDOM from 'react-dom';
import HomeContainer from './containers';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<HomeContainer />, document.getElementById('root'));
registerServiceWorker();
