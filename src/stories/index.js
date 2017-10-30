import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

// custom stuff
import '../../public/css/animations.css';
import LONGTEXT  from './fixtures';


// Components to test
import AppFrame from '../AppFrame';
import MeBot from '../MeBot';


storiesOf('AppFrame', module)
  .add('with MeBot', () => <AppFrame BotSection={<MeBot />} />)
  .add('with MeBot short response', () => <AppFrame BotSection={<MeBot response={'Hello there!'} />} />)
  .add('with MeBot long response', () => <AppFrame
                                                  BotSection={<MeBot response={LONGTEXT} />} 
                                                />)

storiesOf('MeBot', module)
  .add('with no response', () => <MeBot />)
  .add('with short text response', () => <MeBot response={'Hello there!'} />)
  .add('with long text response', () => <MeBot response={LONGTEXT} />)