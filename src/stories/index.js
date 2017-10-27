import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';


// Components to test
import AppFrame from '../AppFrame';


storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);


storiesOf('AppFrame', module)
  .add('with default border', () => <AppFrame infoSection={"info"} dialogSection={"dialog"} inputSection={"input"}/>)
  .add('with custom border', () => <AppFrame border="1px solid red" infoSection={"info"} dialogSection={"dialog"} inputSection={"input"}/>);
