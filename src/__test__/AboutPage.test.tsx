import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import { AboutPage } from '../pages';
import { Provider } from 'react-redux';
import store from '../store/Store';

describe('About page tests', () => {
  test('render About page', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <AboutPage />
        </BrowserRouter>
      </Provider>
    );

    const title = screen.getByText(/About us/i);
    expect(title).toBeInTheDocument();
  });
});
