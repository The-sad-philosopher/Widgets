import * as React from 'react';
import './App.sass';
import { items } from '../../helpers';
import { Accordion } from '../Accordion';
import { WikiSearch } from '../WikiSearch';
import { Translator } from '../Translator';
import { Router } from '../Router';
import { Header } from '../Header';

export const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <Router path="/">
        <Accordion items={items} />
      </Router>
      <Router path="/search">
        <WikiSearch />
      </Router>
      <Router path="/translate">
        <Translator />
      </Router>
    </div>
  );
};
