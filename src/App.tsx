import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainPage, About, NotFound, Contacts } from './pages';

class App extends React.Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    );
  }
}

export default App;
