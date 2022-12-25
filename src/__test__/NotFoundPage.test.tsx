import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import { NotFound } from '../pages';
import { Provider } from 'react-redux';
import store from '../store/Store';

describe('NotFound page tests', () => {
  test('render NotFound page', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <NotFound />
        </BrowserRouter>
      </Provider>
    );

    const title = screen.getByText(/404/i);
    expect(title).toBeInTheDocument();
  });

  test('NotFound page contains link to Home', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <NotFound />
        </BrowserRouter>
      </Provider>
    );

    const homeLink = screen.getByText(/back home/i);
    expect(homeLink).toBeInTheDocument();
  });
});
