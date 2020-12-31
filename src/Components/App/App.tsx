import * as React from 'react';
import './App.sass';
import { Accordion } from '../Accordion';
import { items } from '../../helpers';

export const App: React.FC = () => {
  return (
    <div className="app">
      <Accordion items={items} />
    </div>
  );
};
