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
            },
            link: {
                width: '100%',
                height: '100%',
                display: 'grid',
                alignItems: 'center',
                justifyItems: 'center',
            }
        })
    
        const linkedInLink = 'https://www.linkedin.com/in/shinythings/';
        const mediumLink = 'https://medium.com/@shinythings';
        const githubLink = 'https://github.com/shinmyung0';
    
        return (
            <div className={css(styles.wrapper)}>
                <div className={css(styles.linkItem)}>
                    <a className={css(styles.link)} href={linkedInLink}>
                        <img className={css(styles.linkedInIcon)} src={linkedInIcon} alt='linkedInIcon' />
                    </a>
                </div>
                <div className={css(styles.linkItem)}>
                    <a className={css(styles.link)} href={mediumLink}>
                        <img className={css(styles.mediumIcon)} src={mediumIcon} alt='mediumIcon' />
                    </a>
                </div>
                <div className={css(styles.linkItem)}>
                    <a className={css(styles.link)} href={githubLink}>
                        <img className={css(styles.githubIcon)} src={githubIcon} alt='githubIcon' />
                    </a>
                </div>
                <div className={css(styles.linkItem)}>
                    <img className={css(styles.chatIcon)} src={chatIcon} alt='chatIcon' />
                </div>
            </div>
        )
    }