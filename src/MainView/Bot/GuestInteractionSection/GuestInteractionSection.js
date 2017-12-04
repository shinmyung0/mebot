import React from 'react';
import {css, StyleSheet} from 'aphrodite';

import LinksModeView from './LinksModeView/LinksModeView';
import ChatModeView from './ChatModeView/ChatModeView';

class GuestInteractionSection extends React.Component {
    render() {

        const styles = StyleSheet.create({
            wrapper: {
            }
        });



        let view;
        switch(this.props.mode) {
            case 'links':
                view = <LinksModeView shown={this.props.mode}/>;
                break;
            case 'chat':
                view = <ChatModeView />;
                break;
            default:
                console.error('GuestInteractionSection has undefined mode : ', this.props.mode);
        }

        return (
            <div className={css(styles.wrapper)}>
                {view}
            </div>
        );
    }
}

export default GuestInteractionSection;