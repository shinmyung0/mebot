import React from 'react';
import ReactDOM from 'react-dom';
import register from './registerServiceWorker';
import MainApp from './MainApp/MainApp';


ReactDOM.render(<MainApp />, document.getElementById('root'));
register();