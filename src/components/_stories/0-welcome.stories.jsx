import React from 'react';

import '../../styles/index.css';

export default {
  title: 'Welcome',
};

export const ToStorybook = () => (
  <div>
    <h2>Welcome to Storybook</h2>
    <p>This is a demo of using React with Typescript and Styled-Components</p>
    <p>Check out the links to the left to discover the components</p>
  </div>
);

ToStorybook.story = {
  name: 'Intro',
};
