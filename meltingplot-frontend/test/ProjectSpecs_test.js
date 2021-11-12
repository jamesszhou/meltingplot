import React from 'react';
import { render, screen } from '@testing-library/react';
 
import ProjectSpecs from '../src/components/Content/ProjectSpecs';
 
describe('ProjectSpecs', () => {
  test('renders App component', () => {
    render(<ProjectSpecs />);
 
    expect(screen.getByText('Edit Title')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
});