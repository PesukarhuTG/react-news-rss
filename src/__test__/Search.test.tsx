import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { SearchPanel } from '../components';
import { Provider } from 'react-redux';
import store from '../store/Store';

describe('Search', () => {
  test('First, we dont have a focus and then we get it', () => {
    render(
      <Provider store={store}>
        <SearchPanel />
      </Provider>
    );

    waitFor(() => {
      const input = screen.getByPlaceholderText(/Search.../i);
      expect(input).not.toHaveFocus();
      input.focus();
      expect(input).toHaveFocus();
    });
  });

  test('check input value', () => {
    render(
      <Provider store={store}>
        <SearchPanel />
      </Provider>
    );

    const input = screen.getByTestId('input-search');
    expect(input).toContainHTML('');
    fireEvent.input(input, {
      target: { value: 'swimming' },
    });

    waitFor(() => {
      expect(input).toHaveValue('swimming');
    });
  });
});
