import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import { MainPage } from '../pages';

describe('Main page tests', () => {
  test('render Main page', () => {
    render(
      <BrowserRouter>
        <MainPage />
      </BrowserRouter>
    );

    const headling = screen.getByText(/Hot news on Racoon digest/i);
    expect(headling).toBeInTheDocument();
  });
});
