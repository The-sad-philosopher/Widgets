import * as React from 'react';
import './App.sass';
import { Accordion } from '../Accordion';

export const App: React.FC = () => {
  return (
    <div className="app">
      <Accordion />
    </div>
  );
};
