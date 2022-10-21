import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { BrowserRouter } from 'react-router-dom';
import { MainPage } from '../pages';

const fakeData = [
  {
    author: 'Tatiana Fox',
    title: 'Some facts about cats',
    description: 'While us humans have 206 bones, cats on average have 244...',
    url: 'https://fox-news.com/',
    urlToImage: 'https://fox-news.com/cat.png',
    publishedAt: '2022-10-10T00:25:32Z',
  },
  {
    author: 'John Smith',
    title: 'What do you know about dogs?',
    description: 'Some have such good noses they can sniff out medical problems...',
    url: 'https://fox-news.com/',
    urlToImage: 'https://fox-news.com/dog.png',
    publishedAt: '2022-10-12T00:47:30Z',
  },
];

const server = setupServer(
  rest.get('https://newsapi.org/v2/top-headlines', async (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ articles: fakeData }));
  }),

  rest.get('*', (req, res, ctx) => {
    console.error(`Please add request handler for ${req.url.toString()}`);
    return res(ctx.status(500), ctx.json({ error: 'Please add request handler' }));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Modal tests', () => {
  test('open modal window with info of 1st card', async () => {
    render(
      <BrowserRouter>
        <MainPage />
      </BrowserRouter>
    );

    const cards = await screen.findAllByTestId('card-item');
    const firstCard = cards[0];
    expect(firstCard).toBeInTheDocument();
    fireEvent.click(firstCard);
    expect(screen.getByText(/Link to full news/i)).toBeInTheDocument();
  });

  test('close modal window by clicking on the close button after it was opened', async () => {
    render(
      <BrowserRouter>
        <MainPage />
      </BrowserRouter>
    );

    const cards = await screen.findAllByTestId('card-item');
    const firstCard = cards[0];
    expect(firstCard).toBeInTheDocument();
    fireEvent.click(firstCard);

    const modalWrapper = screen.getByTestId('modal-wrapper');
    expect(modalWrapper).toBeInTheDocument();

    const closeBtn = screen.getByTestId('modal-close');
    expect(closeBtn).toBeInTheDocument();

    fireEvent.click(closeBtn);
    expect(modalWrapper).not.toBeInTheDocument();
  });

  test('close modal window by clicking on the modal wrapper after it was opened', async () => {
    render(
      <BrowserRouter>
        <MainPage />
      </BrowserRouter>
    );

    const cards = await screen.findAllByTestId('card-item');
    const firstCard = cards[0];
    expect(firstCard).toBeInTheDocument();
    fireEvent.click(firstCard);

    const modalWrapper = screen.getByTestId('modal-wrapper');
    expect(modalWrapper).toBeInTheDocument();
    fireEvent.click(modalWrapper);
    expect(modalWrapper).not.toBeInTheDocument();
  });
});
