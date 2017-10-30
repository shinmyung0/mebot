import React from 'react';
import {StyleSheet, css} from 'aphrodite';
import * as constants from 'src/utils/constants';


export default function InputSection(props) {

    const styles = StyleSheet.create({
        wrapper: {
            minWidth: '40em',
            width: '50%',
            height: '50%',
            [constants.OnMobileQuery]: {
                width: '100%',
                height: '25%'
            }
        },
        textArea: {
            width: '100%',
            height: '100%',
            resize: 'none',
            border: '2px solid ' + constants.primaryDark,
            padding: '1em'
        }
    });

    return (
        <div className={css(styles.wrapper)}>
            <textarea className={css(styles.textArea)} />
        </div>
    )
}