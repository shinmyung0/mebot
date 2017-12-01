import React from 'react';
import {css, StyleSheet} from 'aphrodite';

import ProfileBubble from './ProfileBubble/ProfileBubble';
import SpeechBubble from './SpeechBubble/SpeechBubble';
import LinkBubbles from './LinkBubbles/LinkBubbles';


export default function Bot(props) {
    
    const styles = StyleSheet.create({
        wrapper: {
            display: 'grid',
            gridTemplateColumns: '100%',
            gridAutoRows: '1fr',
            minWidth: '30em',
            minHeight: '30em'
        },
        speechWrapper: {
            display: 'grid',
            alignItems: 'end',
            justifyItems: 'center',
        },
        profileWrapper: {
            display: 'grid',
            alignItems: 'center',
            justifyItems: 'center',
        },
        bubbleWrapper: {
            display: 'grid',
            alignItems: 'center',
            justifyItems: 'center',
        }
    })
    
    
    return (
        <div className={css(styles.wrapper)}>
            <div className={css(styles.speechWrapper)}>
                <SpeechBubble response={props.message} />
                
            </div>
            <div className={css(styles.profileWrapper)}>
                <ProfileBubble />
            
            </div>
            <div className={css(styles.bubbleWrapper)}>
                <LinkBubbles shown={props.showLinks}/>
            
            </div>
        </div>
    )
}


