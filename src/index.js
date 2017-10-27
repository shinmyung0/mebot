import React from 'react';
import ReactDOM from 'react-dom';
import AppFrame from './AppFrame';
import register from './registerServiceWorker';


ReactDOM.render(<AppFrame />, document.getElementById('root'));
register();