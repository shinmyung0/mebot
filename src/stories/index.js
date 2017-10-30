import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';


// Components to test
import AppFrame from '../AppFrame';

storiesOf('AppFrame', module)
  .add('with default border', () => <AppFrame infoSection={"info"} dialogSection={"dialog"} inputSection={"input"}/>)
  .add('with custom border', () => <AppFrame border="1px dotted red" infoSection={"info"} dialogSection={"dialog"} inputSection={"input"}/>);