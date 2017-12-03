import React from 'react';
import {css, StyleSheet} from 'aphrodite';
import {observer} from 'mobx-react';

import linkedInIcon from './icons/linkedIn-icon.png';
import mediumIcon from './icons/medium-icon.png';
import githubIcon from './icons/github-icon.png';
import chatIcon from './icons/chat-icon.png';
import LinkItem from './LinkItem';
import GuestTextInput from './GuestTextInput';
import store from '../../../AppStore/AppStore';

import 'src/utils/animate.css';

class LinkBubbles extends React.Component {

    setMessageOnMouseOver(msg) {
        
        return () => { store.currentMessage = msg; };
    }

    toggleInputMode() {
        store.isInputMode = !store.isInputMode;
        if (store.isInputMode) {
            store.currentMessage = 'Ask me anything!';
        }
    }

    render() {

        const styles = StyleSheet.create({
            wrapper: {
                paddingTop: '1em',
                paddingBottom: '1em',
                display: 'flex',
            },
            linkItem: {
                background: '#d6d6d6',
                border: '1px solid #d6d6d6',
                borderRadius: '50%',
                width: '3em',
                height: '3em',
                margin: '1em',
                boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
                display: 'grid',
                alignItems: 'center',
                justifyItems: 'center',
                transition: 'all 0.2s cubic-bezier(.25,.8,.25,1)',
                ':hover': {
                    boxShadow: '0 8px 15px rgba(0,0,0,0.20), 0 5px 13px rgba(0,0,0,0.17)',
                }
            },
            chatIcon: {
                width: '55%'
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
        const mediumMsg = "That's my Medium blog. I try to write about things I'm interested in. Always looking for more readers!";
        const chatMsg = "Click on that to chat with me! Actually...a chat bot version of me anyways.";

        const isInputMode = store.isInputMode;
    
        return (
            <div className={css(styles.wrapper, !this.props.shown && styles.hidden) + " animated bounce"}>
                <LinkItem hidden={isInputMode} alt='linkedInIcon' iconImg={linkedInIcon} link={linkedInLink} iconWidth='65%' onMouseOver={this.setMessageOnMouseOver(linkedInMsg)} />
                <LinkItem hidden={isInputMode} alt='mediumIcon' iconImg={mediumIcon} link={mediumLink} iconWidth='65%' onMouseOver={this.setMessageOnMouseOver(mediumMsg)}  />
                <LinkItem hidden={isInputMode} alt='githubIcon' iconImg={githubIcon} link={githubLink} iconWidth='70%' onMouseOver={this.setMessageOnMouseOver(githubMsg)}  />
                
                <GuestTextInput hidden={!isInputMode} />

                <div className={css(styles.linkItem)} onMouseOver={isInputMode? null : this.setMessageOnMouseOver(chatMsg)} onClick={this.toggleInputMode}>
                    <img className={css(styles.chatIcon)} src={chatIcon} alt='chatIcon' />
                </div>
            </div>
        );
    }
    
}

export default observer(LinkBubbles);


