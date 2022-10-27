import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainPage, AboutPage, NotFound, FormPage } from './pages';

class App extends React.Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    );
  }
}

export default App;
