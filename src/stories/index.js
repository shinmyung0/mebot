import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

// custom stuff
import '../../public/css/animations.css';
import LONGTEXT  from './fixtures';


// Components to test
import Bot from '../MainApp/Bot';



storiesOf('Bot', module)
  .add('with message and links', () => <Bot showLinks={true} message={'Hello!'} />);
