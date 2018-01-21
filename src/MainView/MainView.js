import React from 'react';
import {css, StyleSheet} from 'aphrodite';
import {observer} from 'mobx-react';


import Bot from './Bot/Bot';
import store from '../AppStore/AppStore';
import {OnMobileQuery} from '../utils/constants.js';


function MainView(props) {

    const styles = StyleSheet.create({
        wrapper: {
            width: '100vw',
            height: '100vh',
            display: 'grid',
            alignItems: 'center',
            justifyItems: 'center'
        }
    });

    let response = null;
    if (store.customRes) {
        response = handleCustomResponses(store.customRes);
    } else {
        response = store.currentMessage;
    }

    return (
        <div className={css(styles.wrapper)}>
            <Bot 
                message={response}
                mode={store.inputMode}
            />
        </div>
    );
}


function handleCustomResponses(customRes) {
    switch(customRes.responseType) {
        
        case "gif":

            let gifStyle = StyleSheet.create({
                img: {
                    height: '12em',
                    [OnMobileQuery]: {
                        height: '9em',
                    }
                }
            });

            return <img src={customRes.payload.link} className={css(gifStyle.img)} alt="responseGif" />;
        default:
            return "Come again?";
    }
}


export default observer(MainView);