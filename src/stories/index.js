import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

// custom stuff
import '../../public/css/animations.css';
import LONGTEXT  from './fixtures';


// Components to test
import App from '../App';
import MeBot from '../App/MeBot';


storiesOf('App', module)
  .add('with defaults', () => <App />)
  .add('with trace set to true', () => <App trace={true} />);
  
storiesOf('MeBot', module)
  .add('with no response', () => <MeBot />)
  .add('with short text response', () => <MeBot response={'Hello there!'} />)
  .add('with long text response', () => <MeBot response={LONGTEXT} />)