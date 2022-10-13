import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { LoginForm } from '../components';

describe('Form tests', () => {
  test('render Form', () => {
    render(<LoginForm onSubmit={() => {}} />);
    expect(screen.getByTestId('form')).toBeInTheDocument();
  });

  test('render Form inputs on page', () => {
    render(<LoginForm onSubmit={() => {}} />);
    expect(screen.getByTestId('input-file')).toBeInTheDocument();
  });

  test('Form snapshot', () => {
    const form = render(<LoginForm onSubmit={() => {}} />);
    expect(form).toMatchSnapshot();
  });

  test('input name: check form value', () => {
    render(<LoginForm onSubmit={() => {}} />);

    const input = screen.getByTestId('input-fname');
    expect(input).toBeInTheDocument();
    expect(input).toContainHTML('');
    fireEvent.input(input, {
      target: { value: 'Tany' },
    });
    expect(input).toHaveValue('Tany');
  });

  test('input radio: check render', () => {
    render(<LoginForm onSubmit={() => {}} />);

    const input = screen.getAllByRole('radio') as HTMLInputElement[];
    expect(input[0]).toBeInTheDocument();
    expect(input[1]).toBeInTheDocument();
    expect(input[0].value).toBe('man');
    expect(input[1].value).toBe('woman');
  });

  test('input data: check render', () => {
    render(<LoginForm onSubmit={() => {}} />);

    const input = screen.getByTestId('input-fdata');
    expect(input).toBeInTheDocument();
    fireEvent.input(input, {
      target: { value: '2022-01-01' },
    });
    expect(input).toHaveValue('2022-01-01');
  });

  test('Upload Files', async () => {
    render(<LoginForm onSubmit={() => {}} />);

    const fakeFile = new File(['hello'], 'hello.png', { type: 'image/png' });
    const inputFile = screen.getByTestId('input-file') as HTMLInputElement;

    expect(inputFile).toBeInTheDocument();

    await waitFor(() =>
      fireEvent.change(inputFile, {
        target: { files: [fakeFile] },
      })
    );

    if (inputFile.files instanceof FileList) {
      expect(inputFile.files[0]).toStrictEqual(fakeFile);
    }
  });

  test('input checkbox: check render', () => {
    render(<LoginForm onSubmit={() => {}} />);

    const checkbox = screen.getByTestId('input-faccept');
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });

  test('select: check render', () => {
    render(<LoginForm onSubmit={() => {}} />);

    const select = screen.getByTestId('input-fcity') as HTMLSelectElement;

    expect(select).toBeInTheDocument();
    expect(screen.getAllByRole('option').length).toBe(6);
    fireEvent.change(select, {
      target: { value: 'Saint-Petersburg' },
    });
    expect(screen.getByText('Saint-Petersburg')).toBeInTheDocument();
  });

  test('render submit button', () => {
    render(<LoginForm onSubmit={() => {}} />);
    const button = screen.getByTestId('btn-submit');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('btn-submit');
    expect(button).toBeDisabled();
  });
});
