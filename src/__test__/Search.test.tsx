import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { SearchPanel } from '../components';

describe('Search', () => {
  test('First, we dont have a focus and then we get it', async () => {
    render(<SearchPanel onSearch={() => {}} />);

    await waitFor(() => {
      const input = screen.getByPlaceholderText(/Search.../i);
      expect(input).not.toHaveFocus();
      input.focus();
      expect(input).toHaveFocus();
    });
  });

  test('check input value', () => {
    render(<SearchPanel onSearch={() => {}} />);

    const input = screen.getByTestId('input-search');
    expect(input).toContainHTML('');
    fireEvent.input(input, {
      target: { value: 'swimming' },
    });
    expect(input).toContainHTML('swimming');
  });
});
