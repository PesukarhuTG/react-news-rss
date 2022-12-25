import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainPage, AboutPage, NotFound, FormPage, SinglePage } from './pages';
import { Provider } from 'react-redux';
import store from './store/Store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/news/:id" element={<SinglePage />} />
      </Routes>
    </Provider>
  );
};

export default App;
