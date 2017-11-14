import React from 'react';
import {css, StyleSheet} from 'aphrodite';
import {observer} from 'mobx-react';

import Bot from './Bot/Bot';
import store from '../AppStore/AppStore';

function MainView(props) {

    const styles = StyleSheet.create({
        wrapper: {
            width: '100vw',
            height: '100vh',
            display: 'grid',
            alignItems: 'center',
            justifyItems: 'center'
        }
    })

    return (
        <div className={css(styles.wrapper)}>
            <Bot 
                message={store.currentMessage}
                showLinks={true}
            />
        </div>
    )
}



export default observer(MainView);