import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

// custom stuff
import '../../public/css/animations.css';
import LONGTEXT  from './fixtures';


// Components to test
import MainView from '../MainView/MainView';



storiesOf('MainView', module)
  .add('what the default landing page looks like', () => <MainView />);
