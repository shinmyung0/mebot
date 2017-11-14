import React from 'react';
import {css, StyleSheet} from 'aphrodite';

import ProfileBubble from './ProfileBubble/ProfileBubble';
import SpeechBubble from './SpeechBubble/SpeechBubble';
import LinkBubbles from './LinkBubbles/LinkBubbles';


export default function Bot(props) {
    
    const styles = StyleSheet.create({
        wrapper: {
            display: 'grid',
            alignItems: 'center',
            justifyItems: 'center'
        }
    })
    
    
    return (
        <div className={css(styles.wrapper)}>
            <SpeechBubble response={props.message} />
            <ProfileBubble />
            <LinkBubbles shown={props.showLinks}/>
        </div>
    )
}


