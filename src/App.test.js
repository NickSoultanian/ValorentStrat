import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import MapContainer from "./MapContainer";

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const { map } = render(<MapContainer />);
  const linkElement = getByText(/learn react/i);
  const linkElement2 = map(/learn react/i);
  expect(linkElement).toBeInTheDocument();
  expect(linkElement2).toBeInTheDocument();
});
