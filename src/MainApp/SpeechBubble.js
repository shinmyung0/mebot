import React from 'react';
import {css, StyleSheet} from 'aphrodite';


export default function SpeechBubble(props) {
    const styles = StyleSheet.create({
        wrapper: {
            maxWidth: '400px',
            display: 'grid',
            alignItems: 'top',
            justifyItems: 'center',
            paddingBottom: '0.5em'
        },
        bottomArrow: {
            width: 0,
            height: 0,
            borderLeft: '10px solid transparent',
            borderRight: '10px solid transparent',
            borderTop: '10px solid #e9ebee',
            margin: 0
        },
        bubble: {
            fontFamily: '"Lucida Console", "Lucida Sans Typewriter", monaco, "Bitstream Vera Sans Mono", monospace',
            background: '#e9ebee',
            fontSize: '1em',
            padding: '1em',
            paddingLeft: '1em',
            borderRadius: '0.5em',
            margin: 0
        }
    })

    var defaultMessage = 'Welcome to my website! Please check out the links below, or ask me something!';
    var message = props.message ? props.message : defaultMessage;

    return (
        <div className={css(styles.wrapper)}>
            <p className={css(styles.bubble)}>
                {message}
            </p>
            <div className={css(styles.bottomArrow)}>
            </div>
        </div>
    )

}