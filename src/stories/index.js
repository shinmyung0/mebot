import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';


// Components to test
import { Button, Welcome } from '@storybook/react/demo';
import AppFrame from '../AppFrame';


storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);


storiesOf('AppFrame', module)
  .add('with default border', () => <AppFrame />)
  .add('with custom border', () => <AppFrame border="1px solid red" />);
