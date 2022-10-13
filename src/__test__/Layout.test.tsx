import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import { Layout } from '../components';

describe('Layout tests', () => {
  test('render Layout', () => {
    render(
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    );

    expect(screen.getByTestId('layout-container')).toBeInTheDocument();
  });
});
