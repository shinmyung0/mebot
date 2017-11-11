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

    return (
        <div className={css(styles.wrapper)}>
            <Bot />
        </div>
    )
}