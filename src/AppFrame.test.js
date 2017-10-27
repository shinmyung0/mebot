import React from 'react';
import ReactDOM from 'react-dom';
import AppFrame from './AppFrame';
import {StyleSheetTestUtils} from 'aphrodite';



beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppFrame />, div);
});
