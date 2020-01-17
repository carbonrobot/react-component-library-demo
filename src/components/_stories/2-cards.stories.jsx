import React from 'react';
import { ThemeProvider } from 'styled-components';

import { Card } from '../cards';
import theme from '../../styles/theme';
import { Button } from '../buttons';

export const Basic = () => (
  <ThemeProvider theme={theme}>
    <h2>Basic Cards</h2>
    <p>
      Demonstrates how to design basic button components that share a common theme and have simple properties
      for styling purposes.
    </p>
    <Card>
      <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </Card>

    <code><pre>{`
import { Card } from 'components/cards';

<Card>
  <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
</Card>
    `}</pre></code>

    <h2>Card Titles</h2>

    <Card title="Card Title">
      <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </Card>
    
    <code><pre>{`
import { Card } from 'components/cards';

<Card title="Card Title">
  <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
</Card>
    `}</pre></code>

    <h2>Sizes</h2>

    <Card title="Card Title" style={{width: "18rem"}}>
      <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <Button>Go somewhere</Button>
    </Card>
    
    <code><pre>{`
import { Card } from 'components/cards';

<Card title="Card Title">
  <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <Button>Go somewhere</Button>
</Card>
    `}</pre></code>

  </ThemeProvider>
);

export default {
  title: 'Cards',
  component: Card,
};
