import * as React from 'react';
import './App.sass';
import { items } from '../../helpers';
import { Accordion } from '../Accordion';
import { WikiSearch } from '../WikiSearch';
import { Translator } from '../Translator';

const route = (path: string, component: JSX.Element) => {
  return window.location.pathname === path ? component : null;
};

export const App: React.FC = () => {
  return (
    <div className="app">
      {route('/', <Accordion items={items} />)}
      {route('/search', <WikiSearch />)}
      {route('/translate', <Translator />)}
    </div>
  );
};
