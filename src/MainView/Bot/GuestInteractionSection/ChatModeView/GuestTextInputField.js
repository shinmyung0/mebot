import React from 'react';
import { css, StyleSheet } from 'aphrodite';
import { observer } from 'mobx-react';

import store from 'AppStore/AppStore';

import { floatingButtonColor } from 'utils/constants.js';

class GuestTextInputField extends React.Component {

    askBot(event) {
        if (event.keyCode === 13) {
            store.sayToBot(event.target.value);
        }
    }


    render() {
        const styles = StyleSheet.create({
            wrapper: {
                display: 'grid',
                alignItems: 'center',
                width: '100%'
            },
            input: {
                border: 0,
                borderBottom: '3px solid ' + floatingButtonColor,
                textAlign: 'center',
                fontSize: '1em',
                fontWeight: 'bold',
                height: '2em',
                outline: 'none',
                fontFamily: '"Lucida Console", "Lucida Sans Typewriter", monaco, "Bitstream Vera Sans Mono", monospace',
            },
            hidden: {
                display: 'none'
            }
        });

        // the ref will place the focus onto the dom element when it is mounted
        return (
            <div className={css(styles.wrapper, this.props.hidden && styles.hidden)}>
                <input ref={(input) => { input && input.focus(); }} onKeyUpCapture={this.askBot} className={css(styles.input)} type='text' />
            </div>
        );
    }
}

export default observer(GuestTextInputField);