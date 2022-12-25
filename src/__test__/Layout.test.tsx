import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import { Layout } from '../components';
import { Provider } from 'react-redux';
import store from '../store/Store';

describe('Layout tests', () => {
  test('render Layout', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByTestId('layout-container')).toBeInTheDocument();
  });
});
