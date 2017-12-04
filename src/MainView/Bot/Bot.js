import React from 'react';
import {css, StyleSheet} from 'aphrodite';

import ProfileBubble from './ProfileBubble/ProfileBubble';
import SpeechBubble from './SpeechBubble/SpeechBubble';

import GuestInteractionSection from './GuestInteractionSection/GuestInteractionSection';

export default function Bot(props) {
    
    const styles = StyleSheet.create({
        wrapper: {
            display: 'grid',
            gridTemplateColumns: '100%',
            gridTemplateRows: '1fr 12em 1fr', 
            minWidth: '30em',
            minHeight: '100vh'
        },
        speechWrapper: {
            display: 'grid',
            alignItems: 'end',
            justifyItems: 'center'
        },
        profileWrapper: {
            display: 'grid',
            alignItems: 'center',
            justifyItems: 'center'
        },
        bubbleWrapper: {
            display: 'grid',
            alignItems: 'start',
            justifyItems: 'center'
        }
    });

    return (
        <div className={css(styles.wrapper)}>
            <div className={css(styles.speechWrapper)}>
                <SpeechBubble response={props.message} />
                
            </div>
            <div className={css(styles.profileWrapper)}>
                <ProfileBubble />
            
            </div>
            <div className={css(styles.bubbleWrapper)}>
                <GuestInteractionSection mode={props.mode} />
            </div>
        </div>
    )
}


