import React from 'react';
import {StyleSheet, css} from 'aphrodite';


export default function AppFrame(props) {


    const frameBorder = props.border ? props.border : '1px solid grey';

    const style = StyleSheet.create({
        frame: {
            border: frameBorder,
            height: '100vh',
            display: 'grid',
            gridTemplateColumns: '80% 20%',
            gridTemplateRows: '90% 10%',
            gridTemplateAreas: '"dialog info" "input info"',
            '@media (max-aspect-ratio: 1/1)': {
                gridTemplateColumns: '100%',
                gridTemplateRows: '20% 75% 5%',
                gridTemplateAreas: ' "info" "dialog" "input"'
            }
            
        },
        infoSection: {
            border: frameBorder,
            gridArea: 'info',
            minWidth: '400px'
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