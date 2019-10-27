import React from 'react';
import { css, StyleSheet } from 'aphrodite';
import portrait from './portrait.jpg';

import 'utils/animate.css';
import { profileBubbleBorderColor } from '../../../utils/constants';

class ProfileBubble extends React.Component {


    constructor(props) {
        super(props);
        this.state = { isLoaded: false };
        this.startFloating = this.startFloating.bind(this);
    }

    componentDidMount() {
        setInterval(this.startFloating, 1000);
    }

    startFloating() {
        this.setState({
            isLoaded: true
        });
    }

    render() {

        const floatingKeyframes = {
            from: {
                transform: 'translate(0, 0px)'
            },
            to: {
                transform: 'translate(0, -0px)'
            },
            '65%': {
                transform: 'translate(0, 0.3em)'
            }
        };

        const styles = StyleSheet.create({
            frame: {
                width: '8em',
                height: '8em',
                border: '4px solid ' + profileBubbleBorderColor,
                borderRadius: '50%',
                overflow: 'hidden',
                boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)'
            },
            floating: {
                animationName: [floatingKeyframes],
                animationDuration: '2s',
                animationIterationCount: 'infinite',
                animationTimingFunction: 'ease-in-out'
            },
            pic: {
                width: '100%'
            }
        });

        return (
            <div className={css(styles.frame, this.state.isLoaded && styles.floating) + " animated bounceIn"}>
                <img src={portrait} className={css(styles.pic)} alt="facePic" />
            </div>
        );
    }
}

export default ProfileBubble;