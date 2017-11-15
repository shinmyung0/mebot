import React from 'react';
import {css, StyleSheet} from 'aphrodite';
import {observer} from 'mobx-react';

import store from '../../../AppStore/AppStore';

class GuestTextInput extends React.Component {

    askBot(event) {
        if (event.keyCode === 13) {
            store.sayToBot(event.target.value);
        }

    }


    render() {
        const styles = StyleSheet.create({
            wrapper: {
                display: 'grid',
                alignItems: 'center'
            },
            input: {
                border: 0,
                borderBottom: '3px solid #d6d6d6',
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
    
        return (
            <div className={css(styles.wrapper, this.props.hidden && styles.hidden)}>
                <input onKeyUpCapture={this.askBot} className={css(styles.input)} type='text' />
            </div>
        );
    }
}

export default observer(GuestTextInput);