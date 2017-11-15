import React from 'react';
import {css, StyleSheet} from 'aphrodite';
import {observer} from 'mobx-react';

import linkedInIcon from './icons/linkedIn-icon.png';
import mediumIcon from './icons/medium-icon.png';
import githubIcon from './icons/github-icon.png';
import chatIcon from './icons/chat-icon.png';
import LinkItem from './LinkItem';
import store from '../../../AppStore/AppStore';


class LinkBubbles extends React.Component {

    setMessageOnMouseOver(msg) {
        
        return () => { store.currentMessage = msg; };
    }

    toggleInputMode() {
        store.isInputMode = !store.isInputMode;
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

        const linkedInMsg = "That's my Linked In.";
        const githubMsg = "That's my Github";
        const mediumMsg = "That's my Medium blog";
        const chatMsg = "Click on that to chat with me!";

        const isInputMode = store.isInputMode;
    
        return (
            <div className={css(styles.wrapper, !this.props.shown && styles.hidden)}>
                <LinkItem hidden={isInputMode} alt='linkedInIcon' iconImg={linkedInIcon} link={linkedInLink} iconWidth='65%' onMouseOver={this.setMessageOnMouseOver(linkedInMsg)} />
                <LinkItem hidden={isInputMode} alt='mediumIcon' iconImg={mediumIcon} link={mediumLink} iconWidth='65%' onMouseOver={this.setMessageOnMouseOver(mediumMsg)}  />
                <LinkItem hidden={isInputMode} alt='githubIcon' iconImg={githubIcon} link={githubLink} iconWidth='70%' onMouseOver={this.setMessageOnMouseOver(githubMsg)}  />
                
                <GuestInputField hidden={!isInputMode} />

                <div className={css(styles.linkItem)} onMouseOver={!isInputMode && this.setMessageOnMouseOver(chatMsg)} onClick={this.toggleInputMode}>
                    <img className={css(styles.chatIcon)} src={chatIcon} alt='chatIcon' />
                </div>
            </div>
        )
    }
    
}

export default observer(LinkBubbles);



function GuestInputField(props) {
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
        <div className={css(styles.wrapper, props.hidden && styles.hidden)}>
            <input className={css(styles.input)} type='text' />
        </div>
    );
}
