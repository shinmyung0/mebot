import React from 'react';
import {StyleSheet, css} from 'aphrodite';
import * as constants from 'src/utils/constants';


export default function InputSection(props) {



    const styles = StyleSheet.create({
        wrapper: {
            minWidth: '20em',
            width: '50%',
            height: '20%',
            [constants.OnMobileQuery]: {
                minWidth: '20em',
                width: '60%',
                height: '2em'
            }
        },
        textArea: {
            width: '100%',
            height: '100%',
            resize: 'none',
            border: '0',
            borderBottom: '2px solid ' + constants.primaryDark,
            padding: '0 0 0 0',
            selection: 'none',
            outline: 'none',
            fontSize: '1em',
            textAlign: 'center',
            caretColor: constants.primaryDark
        }
    });

    return (
        <div className={css(styles.wrapper)}>
            <input type='text' className={css(styles.textArea)} />
        </div>
    )
}