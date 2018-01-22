import React from 'react';
import {css, StyleSheet} from 'aphrodite';
import {observer} from 'mobx-react';

import linkedInIcon from './icons/linkedIn-icon.png';
import mediumIcon from './icons/medium-icon.png';
import githubIcon from './icons/github-icon.png';
import speechBubbleIcon from './icons/speech-bubble.png';
import LinkBubble from '../LinkBubble/LinkBubble';
import store from 'src/AppStore/AppStore';

import 'src/utils/animate.css';




class LinksModeView extends React.Component {

    setMessageOnMouseOver(msg) {
        
        return () => { store.currentMessage = msg; };
    }

    toChatMode() {
        store.inputMode = 'chat';
        store.currentMessage = 'What do you want to know?';
    }

    render() {

        const styles = StyleSheet.create({
            wrapper: {
                paddingTop: '1em',
                paddingBottom: '1em',
                display: 'flex',
            },
            hidden: {
                display: 'none'
            }
        });
    
        const linkedInLink = 'https://www.linkedin.com/in/shinythings/';
        const mediumLink = 'https://medium.com/@shinythings';
        const githubLink = 'https://github.com/shinmyung0';

        const linkedInMsg = "That's my Linked In. Check it out if you want to see my resume.";
        const githubMsg = "That's my Github. Check it out if you want to check out some of my projects.";
        const mediumMsg = "That's my Medium blog where I write about things I'm interested in. Always looking for more readers!";
        const chatMsg = "Click on that to chat with a chat bot version of me!";

        const isInputMode = store.isInputMode;
    
        return (
            <div className={css(styles.wrapper, !this.props.shown && styles.hidden)}>
                <LinkBubble alt='linkedInIcon' iconImg={linkedInIcon} link={linkedInLink} iconWidth='65%' onMouseOver={this.setMessageOnMouseOver(linkedInMsg)} />
                <LinkBubble alt='mediumIcon' iconImg={mediumIcon} link={mediumLink} iconWidth='63%' onMouseOver={this.setMessageOnMouseOver(mediumMsg)}  />
                <LinkBubble alt='githubIcon' iconImg={githubIcon} link={githubLink} iconWidth='70%' onMouseOver={this.setMessageOnMouseOver(githubMsg)}  />
                <LinkBubble alt='chatIcon' iconImg={speechBubbleIcon} iconWidth='65%' onMouseOver={isInputMode? null : this.setMessageOnMouseOver(chatMsg)} onClick={this.toChatMode} />
            </div>
        );
    }
    
}

export default observer(LinksModeView);


