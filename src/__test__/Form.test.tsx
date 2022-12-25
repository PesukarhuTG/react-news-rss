import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Form } from '../components';
import { Provider } from 'react-redux';
import store from '../store/Store';

describe('Form tests', () => {
  global.URL.createObjectURL = jest.fn();

  test('render Form', () => {
    render(
      <Provider store={store}>
        <Form onSubmit={() => {}} />
      </Provider>
    );
    expect(screen.getByTestId('form')).toBeInTheDocument();
  });

  test('render Form inputs on page', () => {
    render(
      <Provider store={store}>
        <Form onSubmit={() => {}} />
      </Provider>
    );
    expect(screen.getByTestId('input-file')).toBeInTheDocument();
  });

  test('input name: check form value', () => {
    render(
      <Provider store={store}>
        <Form onSubmit={() => {}} />
      </Provider>
    );

    const input = screen.getByTestId('input-fname');
    expect(input).toBeInTheDocument();
    expect(input).toContainHTML('');

    fireEvent.change(input, {
      target: { value: 'Tatiana' },
    });

    waitFor(() => {
      expect(input).toHaveValue('Tatiana');
    });
  });

  test('input radio: check render', () => {
    render(
      <Provider store={store}>
        <Form onSubmit={() => {}} />
      </Provider>
    );

    const input = screen.getAllByRole('radio') as HTMLInputElement[];
    expect(input[0]).toBeInTheDocument();
    expect(input[1]).toBeInTheDocument();
    expect(input[0].value).toBe('man');
    expect(input[1].value).toBe('woman');
  });

  test('input date: check render', () => {
    render(
      <Provider store={store}>
        <Form onSubmit={() => {}} />
      </Provider>
    );

    const input = screen.getByTestId('input-fdate');
    expect(input).toBeInTheDocument();

    fireEvent.change(input, {
      target: { value: '2022-01-01' },
    });

    waitFor(() => {
      expect(input).toHaveValue('2022-01-01');
    });
  });

  test('input file: upload file', () => {
    render(
      <Provider store={store}>
        <Form onSubmit={() => {}} />
      </Provider>
    );

    const fakeFile = new File(['hello'], 'hello.png', { type: 'image/png' });
    const inputFile = screen.getByTestId('input-file') as HTMLInputElement;

    expect(inputFile).toBeInTheDocument();

    waitFor(() =>
      fireEvent.change(inputFile, {
        target: { files: [fakeFile] },
      })
    );

    if (inputFile.files instanceof FileList) {
      expect(inputFile.files[0]).toStrictEqual(fakeFile);
      expect(inputFile.files).toHaveLength(1);
    }
  });

  test('input checkbox: check render', () => {
    render(
      <Provider store={store}>
        <Form onSubmit={() => {}} />
      </Provider>
    );

    const checkbox = screen.getByTestId('input-faccept');
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });

  test('select: check render', () => {
    render(
      <Provider store={store}>
        <Form onSubmit={() => {}} />
      </Provider>
    );

    const select = screen.getByTestId('input-fcity') as HTMLSelectElement;

    expect(select).toBeInTheDocument();
    expect(screen.getAllByRole('option').length).toBe(6);
    fireEvent.change(select, {
      target: { value: 'Saint-Petersburg' },
    });
    expect(screen.getByText('Saint-Petersburg')).toBeInTheDocument();
  });

  test('render submit button', () => {
    render(
      <Provider store={store}>
        <Form onSubmit={() => {}} />
      </Provider>
    );
    const button = screen.getByTestId('btn-submit');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('btn-submit');
  });

  test('clear form after submit', () => {
    render(
      <Provider store={store}>
        <Form onSubmit={() => {}} />
      </Provider>
    );

    const inputName = screen.getByTestId('input-fname');
    const inputDate = screen.getByTestId('input-fdate');
    const inputSelect = screen.getByTestId('input-fcity');
    const checkbox = screen.getByTestId('input-faccept');
    const submitButton = screen.getByTestId('btn-submit');

    fireEvent.change(inputName, {
      target: { value: 'Tatiana' },
    });

    fireEvent.change(inputDate, {
      target: { value: '2022-10-10' },
    });

    fireEvent.change(inputSelect, {
      target: { value: 'Saint-Petersburg' },
    });

    fireEvent.click(checkbox);

    waitFor(() => {
      expect(inputName).toHaveValue('Tatiana');
      expect(inputDate).toHaveValue('2022-10-10');
      expect(inputSelect).toHaveValue('Saint-Petersburg');
      expect(checkbox).toBeChecked();
    });

    fireEvent.click(submitButton);

    waitFor(() => {
      expect(inputName).toHaveValue('');
      expect(inputDate).toHaveValue('');
      expect(inputSelect).toHaveValue('');
      expect(checkbox).not.toBeChecked();
    });
  });
});
