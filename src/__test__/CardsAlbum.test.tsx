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
      },
      {
        author: 'John',
        title: 'Hot cakes',
        description: 'There will be some awesome info',
        publishedAt: '2022-10-03',
        urlToImage: '../assets/img/no-poster.jpg',
      },
    ];

    render(<CardsAlbum cards={fakeData} />);
    expect(screen.getByRole('list')).toBeInTheDocument();
    const text = await screen.findByText(/Hot cakes/i);
    expect(text).toBeInTheDocument();
  });

  test('if we dont get any data', () => {
    render(<CardsAlbum cards={[]} />);
    const text = screen.queryByText('Author');
    expect(text).toBeNull();
  });
});
