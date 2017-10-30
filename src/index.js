import React from 'react';
import ReactDOM from 'react-dom';
import register from './registerServiceWorker';
import AppFrame from './AppFrame';
import InfoSectionView from './InfoSectionView';


ReactDOM.render(<AppFrame infoSection={<InfoSectionView />}/>, document.getElementById('root'));
register();