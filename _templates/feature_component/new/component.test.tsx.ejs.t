---
to: <%= absPath %>/<%=name%>.test.tsx
---
import React from 'react';
import { render, screen } from '@testing-library/react';
import { <%= name %> } from '../';

test('renders component successfully', () => {
  render(<<%= name %>  />);
  const element = screen.getByTestId(/test/i);
  expect(element).toBeInTheDocument();
});