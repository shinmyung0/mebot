import React from 'react';
import {css, StyleSheet} from 'aphrodite';

import linkedInIcon from './icons/linkedIn-icon.png';
import mediumIcon from './icons/medium-icon.png';
import githubIcon from './icons/github-icon.png';
import chatIcon from './icons/chat-icon.png';



export default function LinkBubbles(prop) {
    
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
            transition: 'all 0.2s cubic-bezier(.25,.8,.25,1)',
            ':hover': {
                boxShadow: '0 8px 15px rgba(0,0,0,0.20), 0 5px 13px rgba(0,0,0,0.17)',
            }
        },
        chatIcon: {
            width: '55%'
        }
    });

    const linkedInLink = 'https://www.linkedin.com/in/shinythings/';
    const mediumLink = 'https://medium.com/@shinythings';
    const githubLink = 'https://github.com/shinmyung0';

    return (
        <div className={css(styles.wrapper)}>
            <LinkItem alt='linkedInIcon' iconImg={linkedInIcon} link={linkedInLink} iconWidth='65%' />
            <LinkItem alt='mediumIcon' iconImg={mediumIcon} link={mediumLink} iconWidth='65%' />
            <LinkItem alt='githubIcon' iconImg={githubIcon} link={githubLink} iconWidth='70%' />
            
            <div className={css(styles.linkItem)}>
                <img className={css(styles.chatIcon)} src={chatIcon} alt='chatIcon' />
            </div>
        </div>
    )
}

function LinkItem(props) {
    const styles = StyleSheet.create({
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
            transition: 'all 0.2s cubic-bezier(.25,.8,.25,1)',
            ':hover': {
                boxShadow: '0 8px 15px rgba(0,0,0,0.20), 0 5px 13px rgba(0,0,0,0.17)',
            }
        },
        icon: {
            width: props.iconWidth || '100%',
        },
        linkWrapper: {
            width: '100%',
            height: '100%',
            display: 'grid',
            alignItems: 'center',
            justifyItems: 'center',
        }
    });



    return (
        <div className={css(styles.linkItem)}>
            <a className={css(styles.linkWrapper)} href={props.link}>
                <img className={css(styles.icon)} src={props.iconImg} alt={props.alt} />
            </a>
        </div>
    )
}