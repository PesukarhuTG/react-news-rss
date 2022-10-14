import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import { About } from '../pages';

describe('About page tests', () => {
  test('render About page', () => {
    render(
      <BrowserRouter>
        <About />
      </BrowserRouter>
    );

    const title = screen.getByText(/About us/i);
    expect(title).toBeInTheDocument();
  });
});
