import React from 'react';
import {StyleSheet, css} from 'aphrodite';
import * as constants from 'src/utils/constants.js';
import portrait from './portrait.jpg';

export default function MeBot(props) {


    const styles = StyleSheet.create({
        wrapper: {
            display: 'flex',
            maxWidth: '70%',
            maxHeight: '100%',
            [constants.OnMobileQuery]: {
                maxWidth: '95%'
            }
        },
    })

    return (
        <div className={css(styles.wrapper)}>
            <Portrait img={portrait} />
            { props.response ?
                <TextResponse text={props.response} /> : null 
            }
        </div>
    )
}

function Portrait(props) {

    const diameter = '8em';
    const borderColor = '2px solid ' + constants.primaryColor;

    const floatingKeyframes = {
        '0%': {
            transform: 'translateY(0%)'
        },
        '50%': {
            transform: 'translateY(2%)'
        },
        '100%': {
            transform: 'translateY(0%)'
        }
    }

    const styles = StyleSheet.create({
        profileFrame: {
            minWidth: diameter,
            width: diameter,
            height: diameter,
            border: borderColor,
            borderRadius: '50%',
            overflow: 'hidden'
        },
        profileImage: {
            width: '100%'
        },
        floating: {
            animationName: floatingKeyframes,
            animationDuration: '1.5s',
            animationIterationCount: 'infinite'
        }
    });
    return (
        <div className={css(styles.profileFrame, styles.floating)}>
            <img src={props.img} alt='portrait' className={css(styles.profileImage)}/>
        </div>
    )
}

function TextResponse(props) {

    const styles = StyleSheet.create({
        responseFrame: {
            padding: '1em',
            display: 'flex',
            alignItems: 'center',
        },
        response: {
            background: '#e9ebee',
            padding: '0.5em',
            paddingLeft: '1em',
            borderRadius: '0.5em',
            
        },
    })


    return (
        <div className={css(styles.responseFrame)}>
            <p className={css(styles.response)}>
                {props.text}
            </p>
        </div>
    )
}
