import React from 'react';
import {css, StyleSheet} from 'aphrodite';

import ProfileBubble from './ProfileBubble/ProfileBubble';
import SpeechBubble from './SpeechBubble/SpeechBubble';
import LinkBubbles from './LinkBubbles/LinkBubbles';


export default function Bot(prop) {
    
    const styles = StyleSheet.create({
        wrapper: {
            display: 'grid',
            alignItems: 'center',
            justifyItems: 'center'
        }
    })
    
    
    return (
        <div className={css(styles.wrapper)}>
            <SpeechBubble />
            <ProfileBubble />
            <LinkBubbles />
        </div>
    )
}



