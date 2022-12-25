import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import { MainPage } from '../pages';
import { Provider } from 'react-redux';
import store from '../store/Store';

describe('Main page tests', () => {
  window.matchMedia =
    window.matchMedia ||
    function () {
      return {
        matches: false,
        addListener: function () {},
        removeListener: function () {},
      };
    };

  test('render Main page', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <MainPage />
        </BrowserRouter>
      </Provider>
    );

    const headling = screen.getByText(/Hot news on Racoon digest/i);
    expect(headling).toBeInTheDocument();
  });

  test('fail cards render if search value doesnt exist', async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <MainPage />
        </BrowserRouter>
      </Provider>
    );

    const input = screen.getByTestId('input-search');

    fireEvent.input(input, {
      target: { value: 'mrmrmr' },
    });

    fireEvent.keyDown(input, { key: 'Enter', keyCode: 13 });

    waitFor(() => {
      const failMessage = screen.getByText(/Sorry, your request is failed/i);
      const cards = screen.queryAllByTestId('card-item');
      expect(failMessage).toBeInTheDocument();
      expect(cards.length).toEqual(0);
    });
  });
});
