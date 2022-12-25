import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { BrowserRouter } from 'react-router-dom';
import { MainPage } from '../pages';
import { Provider } from 'react-redux';
import store from '../store/Store';

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

describe('API tests', () => {
  window.matchMedia =
    window.matchMedia ||
    function () {
      return {
        matches: false,
        addListener: function () {},
        removeListener: function () {},
      };
    };

  test('fetch and display data', async () => {
    const { findByText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <MainPage />
        </BrowserRouter>
      </Provider>
    );

    expect(await findByText('Some facts about cats')).toBeInTheDocument();
    const cards = await screen.findAllByTestId('card-item');
    expect(cards.length).toBe(2);
  });
});
