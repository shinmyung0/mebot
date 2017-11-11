import React from 'react';
import {css, StyleSheet} from 'aphrodite';
import portrait from './portrait.jpg';


export default function ProfileBubble(prop) {
    
        const styles = StyleSheet.create({
            frame: {
                width: '8em',
                height: '8em',
                border: '4px solid grey',
                borderRadius: '50%',
                overflow: 'hidden',
                boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)'
            },
            pic: {
                width: '100%'
            }
        });
    
        return (
            <div className={css(styles.frame)}>
                <img src={portrait} className={css(styles.pic)} alt="facePic"/>
            </div>
        )
    }