import React from 'react';
import {css, StyleSheet} from 'aphrodite';

import ProfileBubble from './ProfileBubble';
import SpeechBubble from './SpeechBubble';

import linkedInIcon from './linkedIn-icon.png';
import mediumIcon from './medium-icon.png';
import githubIcon from './github-icon.png';
import chatIcon from './chat-icon.png';

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




function LinkBubbles(prop) {

    const styles = StyleSheet.create({
        wrapper: {
            paddingTop: '1em',
            paddingBottom: '1em',
            display: 'flex'

        },
        linkItem: {
            background: '#d6d6d6',
            border: '1px solid #d6d6d6',
            borderRadius: '50%',
            width: '3em',
            height: '3em',
            margin: '1em',
            boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
            display: 'grid',
            alignItems: 'center',
            justifyItems: 'center',
            transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
            ':hover': {
                boxShadow: '0 10px 20px rgba(0,0,0,0.20), 0 5px 15px rgba(0,0,0,0.17)',
                width: '3.5em',
                height: '3.5em'
            }
        },
        linkedInIcon: {
            width: '65%',
        },
        mediumIcon: {
            width: '65%'
        },
        githubIcon: {
            width: '70%'
        },
        chatIcon: {
            width: '55%'
        }
    })




    return (
        <div className={css(styles.wrapper)}>
            <div className={css(styles.linkItem)}>
                <img className={css(styles.linkedInIcon)} src={linkedInIcon} alt='linkedInIcon' />
            </div>
            <div className={css(styles.linkItem)}>
                <img className={css(styles.mediumIcon)} src={mediumIcon} alt='mediumIcon' />
            </div>
            <div className={css(styles.linkItem)}>
                <img className={css(styles.githubIcon)} src={githubIcon} alt='githubIcon' />
            </div>
            <div className={css(styles.linkItem)}>
                <img className={css(styles.chatIcon)} src={chatIcon} alt='chatIcon' />
            </div>
        </div>
    )
}