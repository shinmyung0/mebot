import React from 'react';
import {css, StyleSheet} from 'aphrodite';
import Bot from './Bot';


export default function MainApp(props) {

    const styles = StyleSheet.create({
        wrapper: {
            width: '100vw',
            height: '100vh',
            display: 'grid',
            alignItems: 'center',
            justifyItems: 'center'
        }
    })

    const defaultMessage = 'Welcome to my website! Please check out the links below, or ask me something!';
    let message = props.message ? props.message : defaultMessage;
    
    return (
        <div className={css(styles.wrapper)}>
            <Bot 
                message={message}
                showLinks={true}
            />
        </div>
    )
}