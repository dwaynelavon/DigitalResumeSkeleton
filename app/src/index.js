import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomeContainer from './containers';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<HomeContainer />, document.getElementById('root'));
registerServiceWorker();
