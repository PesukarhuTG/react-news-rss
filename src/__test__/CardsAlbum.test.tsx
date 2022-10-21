import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { CardsAlbum } from '../components';

describe('CardsAlbum tests', () => {
  test('render some Cards', async () => {
    const fakeData = [
      {
        author: 'Tatiana',
        title: 'Daily news',
        description: 'There will be some awesome info',
        publishedAt: '2022-10-02',
        urlToImage: '../assets/img/no-poster.jpg',
        url: 'https://someSite.ru',
      },
      {
        author: 'John',
        title: 'Hot cakes',
        description: 'There will be some awesome info',
        publishedAt: '2022-10-03',
        urlToImage: '../assets/img/no-poster.jpg',
        url: 'https://someSite.ru',
      },
    ];

    render(<CardsAlbum cards={fakeData} />);
    expect(screen.getByRole('list')).toBeInTheDocument();
    const text = await screen.findByText(/Hot cakes/i);
    expect(text).toBeInTheDocument();

    const cards = screen.queryAllByTestId('card-item');
    expect(cards.length).toBe(2);
  });

  test('if we dont get any data', () => {
    render(<CardsAlbum cards={[]} />);

    const text = screen.queryByText('Author');
    expect(text).toBeNull();

    const cards = screen.queryAllByTestId('card-item');
    expect(cards.length).toEqual(0);

    const spinner = screen.queryAllByTestId('spinner-test');
    expect(spinner).toBeInTheDocument;
  });
});
