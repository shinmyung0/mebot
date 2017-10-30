import React from 'react';
import AppFrame from './AppFrame';
import MeBot from './MeBot';
import InputSection from './InputSection';


export default function App(props) {

    const traceBorder = props.trace ? '1px dotted red' : null;
    

    return (
        <AppFrame 
            border={traceBorder} 
            BotSection={<MeBot response={props.startingText}/>}
            InputSection={<InputSection />}                    
        />
    );
}