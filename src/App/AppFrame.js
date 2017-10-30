import React from 'react';
import {StyleSheet, css} from 'aphrodite';
import {OnMobileQuery} from 'src/utils/constants.js';

export default function AppFrame(props) {


    const frameBorder = props.border ? props.border : '0';

    const style = StyleSheet.create({
        wrapper: {
            border: frameBorder,
            display: 'grid',
            justifyItems: 'center',
            alignItems: 'center'
        },
        frame: {
            minHeight: '60vh',
            width: '70vw',
            minWidth: '500px',
            border: frameBorder,
            display: 'grid',
            gridTemplateRows: '0.8fr minmax(10%, 0.3fr)',
            gridTemplateColumns: '100%',
            [OnMobileQuery]: {
                height: '100vh',
                width: '100vw'
            }
        },
        botSection: {
            border: frameBorder,
            display: 'grid',
            justifyItems: 'center',
            alignItems: 'center'

        },
        inputSection: {
            border: frameBorder,
            display: 'grid',
            justifyItems: 'center',
            alignItems: 'top'
        }
    });


    return (
        <div className={css(style.wrapper)}>
            <div className={css(style.frame)}>
                <div className={css(style.botSection)}>
                    {props.BotSection}
                </div>
                <div className={css(style.inputSection)}>
                    {props.InputSection}
                </div>
            </div>
        </div>
    )

}