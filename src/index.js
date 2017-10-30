import React from 'react';
import ReactDOM from 'react-dom';
import register from './registerServiceWorker';
import AppFrame from './AppFrame';
import MeBot from './MeBot';


import LONGTEXT from './stories/fixtures';



ReactDOM.render(<AppFrame 
                    border={'1px dotted red'} 
                    BotSection={<MeBot/>}
                />, document.getElementById('root'));
register();