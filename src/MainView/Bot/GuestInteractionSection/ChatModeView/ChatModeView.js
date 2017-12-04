import React from 'react';
import {css, StyleSheet} from 'aphrodite';

import store from 'src/AppStore/AppStore';
import backArrowIcon from './icons/back-arrow.png';
import LinkBubble from '../LinkBubble/LinkBubble';
import GuestTextInputField from './GuestTextInputField';

class ChatModeView extends React.Component {

    constructor(props) {
        super(props);
        this.backToLinks = this.backToLinks.bind(this);
    }

    backToLinks() {
        store.inputMode = 'links';
    }

    render() {


        const styles = StyleSheet.create({
            wrapper: {
                minWidth: '300px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: 0
            }
        });

        return (
            <div className={css(styles.wrapper)}>
                <GuestTextInputField />
                <LinkBubble iconImg={backArrowIcon} iconWidth='55%' alt='backArrow' onClick={this.backToLinks}/>
            </div>
        );
    }

}

export default ChatModeView;