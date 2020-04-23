import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';

test('renders app without crashing', () => {
  const { wrapper } = render(<App />);
    console.log(wrapper.debug());
});