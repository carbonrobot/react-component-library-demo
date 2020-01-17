import React from 'react';
import { action } from '@storybook/addon-actions';
import styled, { ThemeProvider } from 'styled-components';

import { Button, ButtonColor } from '../buttons';
import theme from '../../styles/theme';

const DemoButtonGroup = styled.div`
  button {
    margin-right: 5px;
  }
`;

export const Basic = () => (
  <ThemeProvider theme={theme}>
    <h2>Basic Buttons</h2>
    <p>
      Demonstrates how to design basic button components that share a common theme and have simple properties
      for styling purposes.
    </p>
    <DemoButtonGroup>
      <Button onClick={action('Primary')}>Primary</Button>
      <Button buttonStyle={ButtonColor.Secondary} onClick={action('Secondary')}>Secondary</Button>
      <Button buttonStyle={ButtonColor.Success} onClick={action('Success')}>Success</Button>
      <Button buttonStyle={ButtonColor.Warning} onClick={action('Warning')}>Warning</Button>
      <Button buttonStyle={ButtonColor.Danger} onClick={action('Danger')}>Danger</Button>
    </DemoButtonGroup>
    <code><pre>{`
import { Button, ButtonColor } from 'components/buttons';

<Button>Primary</Button>
<Button buttonStyle={ButtonColor.Secondary}>Secondary</Button>
<Button buttonStyle={ButtonColor.Success}>Success</Button>
<Button buttonStyle={ButtonColor.Warning}>Warning</Button>
<Button buttonStyle={ButtonColor.Danger}>Danger</Button>
    `}</pre></code>
  </ThemeProvider>
);

export default {
  title: 'Buttons',
  component: Button,
};
