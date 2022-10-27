import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
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

  test('fail cards render if search value doesnt exist', async () => {
    render(
      <BrowserRouter>
        <MainPage />
      </BrowserRouter>
    );

    const input = screen.getByTestId('input-search');

    fireEvent.input(input, {
      target: { value: 'mrmrmr' },
    });

    fireEvent.keyDown(input, { key: 'Enter', keyCode: 13 });

    const showFailMessage = () => {
      const failMessage = screen.getByText(/Sorry, your request is failed/i);
      const cards = screen.queryAllByTestId('card-item');
      expect(failMessage).toBeInTheDocument();
      expect(cards.length).toEqual(0);
    };

    setTimeout(showFailMessage, 1000);
  });
});
