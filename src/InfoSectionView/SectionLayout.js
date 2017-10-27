import React from 'react';
import {StyleSheet, css} from 'aphrodite';
import * as constants from 'src/utils/constants.js';
import placeholder from './placeholder.jpg';


export default function SectionLayout(props) {



    const styles = StyleSheet.create({
        wrapper: {
            width: '100%',
            height: '100%',
            display: 'grid',
            gridTemplateRows: '30% auto',
            gridTemplateAreas: '"profile" "menu"',
            [constants.OnMobileQuery]: {
                gridTemplateRows: '100%',
                gridTemplateColumns: '10% auto minmax(100px, 0)',
                gridTemplateAreas: '"icon . profile"'
            }
        },
        profileSection: {
            gridArea: 'profile',
            display: 'grid',
            alignItems: 'center',
            justifyItems: 'center',
            background: 'white'

        },
        profileFrame: {
            width: '8em',
            height: '8em',
            border: '2px solid ' + constants.primaryDark,
            borderRadius: '50%',
            overflow: 'hidden',
            [constants.OnMobileQuery]: {
                width: '3em',
                height: 0,
                paddingBottom: '3em'
            }
        },
        profileImg: {
            width: '100%'
        },
        menuSection: {
            gridArea: 'menu',
            background: 'white',
            [constants.OnMobileQuery]: {
                display: 'none'
            }

        },
        menuIcon: {
            display: 'none',
            gridArea: 'icon',
            [constants.OnMobileQuery]: {
                display: 'unset'
            }
        }
    });

    const profilePic = props.profilePic ? props.profilePic : placeholder;

    return (
        <div className={css(styles.wrapper)}>
            <div className={css(styles.profileSection)}>
                <div className={css(styles.profileFrame)}>
                    <img src={profilePic} className={css(styles.profileImg)} alt='profilePic'/>
                </div>
            </div>
            <div className={css(styles.menuSection)}>
                {"menu"}
            </div>
            <div className={css(styles.menuIcon)}>
                {"icon"}
            </div>
        </div>
    )
}