import React from 'react';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import { FormPage } from '../pages';
import { Provider } from 'react-redux';
import store from '../store/Store';

describe('Contacts page tests', () => {
  global.URL.createObjectURL = jest.fn();

  test('Contacts page render', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <FormPage />
        </BrowserRouter>
      </Provider>
    );

    const title = screen.getByText(/Save your data/i);
    expect(title).toBeInTheDocument();
  });

  test('render Form on Contacts page', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <FormPage />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByTestId('form')).toBeInTheDocument();
  });

  test('render without cards', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <FormPage />
        </BrowserRouter>
      </Provider>
    );

    const cardsElement = screen.queryByTestId('card-item');
    expect(cardsElement).toBeNull;
  });

  test('create and render 1 card', async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <FormPage />
        </BrowserRouter>
      </Provider>
    );

    const inputName = await screen.getByTestId('input-fname');
    const inputDate = await screen.getByTestId('input-fdate');
    const inputSelect = await screen.getByTestId('input-fcity');
    const submitButton = await screen.getByTestId('btn-submit');

    await act(async () => {
      userEvent.type(inputName, 'Tatiana');
    });

    await act(async () => {
      userEvent.type(inputDate, '2022-10-10');
    });

    await act(async () => {
      userEvent.selectOptions(inputSelect, 'Saint-Petersburg');
    });

    await act(async () => {
      userEvent.click(submitButton);
    });

    const checkChanges = async () => {
      const cards = await screen.getAllByTestId('form-card');
      expect(cards.length).toBe(1);
    };

    setTimeout(checkChanges, 300);
  });
});
