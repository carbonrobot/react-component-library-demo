import React from 'react';
import styled from 'styled-components';

import { Button } from '../buttons';

const DemoButtonGroup = styled.div`
  button {
    margin-right: 5px;
  }
`;

export const Basic = () => (
  <DemoButtonGroup>
    <Button>Primary</Button>
    <Button buttonStyle="secondary">Secondary</Button>
    <Button buttonStyle="success">Success</Button>
    <Button buttonStyle="danger">Danger</Button>
    <Button buttonStyle="warning">Warning</Button>
  </DemoButtonGroup>
);

export default {
  title: 'Buttons',
};
