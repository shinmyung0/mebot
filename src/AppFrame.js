import React from 'react';
import {StyleSheet, css} from 'aphrodite';
import {OnMobileQuery} from 'src/utils/constants.js';

export default function AppFrame(props) {


    const frameBorder = props.border ? props.border : '0';

    const style = StyleSheet.create({
        frame: {
            border: frameBorder,
            height: '100vh',
            display: 'grid',
            gridAutoColumns: '1fr minmax(200px, 0.3fr)',
            gridTemplateRows: '90% 10%',
            gridTemplateAreas: '"dialog info" "input info"',
            [OnMobileQuery]: {
                gridTemplateColumns: '100%',
                gridTemplateRows: '10% 80% 10%',
                gridTemplateAreas: ' "info" "dialog" "input"'
            }
            
        },
        infoSection: {
            border: frameBorder,
            gridArea: 'info',
            boxShadow: '15px 0 40px'
        },
        dialogSection: {
            border: frameBorder,
            gridArea: 'dialog'
        },
        inputSection: {
            border: frameBorder,
            gridArea: 'input'
        }
    });


    return (
        <div className={css(style.frame)}>
            <div className={css(style.infoSection)}>
                {props.infoSection}
            </div>
            <div className={css(style.dialogSection)}>
                {props.dialogSection}
            </div>
            <div className={css(style.inputSection)}>
                {props.inputSection}
            </div>
        </div>
    )

}