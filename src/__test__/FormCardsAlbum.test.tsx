import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { FormCardsAlbum } from '../components';

describe('FormCardsAlbum tests', () => {
  test('render some FormCards', async () => {
    const fakeData = {
      name: 'Tatiana',
      birthday: '2022-10-02',
      city: 'Saint-Petersburg',
      gender: 'woman',
      selectedFile: '../assets/img/no-poster.jpg',
      remember: true,
    };

    render(<FormCardsAlbum list={[fakeData]} />);
    expect(screen.getByRole('list')).toBeInTheDocument();
    const text = await screen.findByText(/Tatiana/i);
    expect(text).toBeInTheDocument();
  });

  test('if we dont get any data', () => {
    render(<FormCardsAlbum list={[]} />);
    const text = screen.queryByText('Birthday');
    expect(text).toBeNull();
  });
});
