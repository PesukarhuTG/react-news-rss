import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import { Contacts } from '../pages';

describe('Contacts page tests', () => {
  test('Contacts page render', () => {
    render(
      <BrowserRouter>
        <Contacts />
      </BrowserRouter>
    );

    const title = screen.getByText(/Contact us via form/i);
    expect(title).toBeInTheDocument();
  });

  test('Contacts page snapshot', () => {
    const page = render(
      <BrowserRouter>
        <Contacts />
      </BrowserRouter>
    );
    expect(page).toMatchSnapshot();
  });

  test('render Form on Contacts page', () => {
    render(
      <BrowserRouter>
        <Contacts />
      </BrowserRouter>
    );

    expect(screen.getByTestId('form')).toBeInTheDocument();
  });
});
