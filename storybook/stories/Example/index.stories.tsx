import React, { ReactElement } from 'react';
import { storiesOf } from '@storybook/react';
import basicNotes from './basic.readme.md';
import complexNotes from './complex.readme.md';

storiesOf('core/Basic.Example', module)
  .add('basic', (): ReactElement => <div>Example</div>, {
    notes: basicNotes,
  })
  .add('complex', (): ReactElement => <div>Complex</div>, {
    notes: complexNotes,
  });
