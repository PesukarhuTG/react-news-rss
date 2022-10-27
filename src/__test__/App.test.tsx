import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { MainPage, AboutPage, NotFound } from '../pages';
import App from '../App';

describe('App tests', () => {
  test('render /home link', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    const linkElement = screen.getByText(/home/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('render /about link', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    const linkElement = screen.getByText(/about/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('render 404 page if there is a wrong page', () => {
    render(
      <MemoryRouter initialEntries={['/somepage']}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MemoryRouter>
    );

    const notFound = screen.getByText(/404/i);
    expect(notFound).toBeInTheDocument();
  });
});
