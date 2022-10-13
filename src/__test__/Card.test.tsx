import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Card } from '../components';

describe('Card tests', () => {
  test('render Card', async () => {
    const fakeData = {
      author: 'Tatiana',
      title: 'Daily hot news',
      description: 'There will be some awesome info',
      publishedAt: '2022-10-02',
      urlToImage:
        'https://media.npr.org/assets/img/2021/08/11/gettyimages-1279899488_wide-f3860ceb0ef19643c335cb34df3fa1de166e2761-s1100-c50.jpg',
    };
    render(<Card {...fakeData} key={5} />);

    const text = screen.getByText(/Daily hot news/i);
    expect(text).toBeInTheDocument();
    expect(screen.getByTestId('card-item')).toBeInTheDocument();
  });
});
