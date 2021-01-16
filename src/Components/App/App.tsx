import * as React from 'react';
import './App.sass';
import { Translator } from '../Translator';

export const App: React.FC = () => {
  return (
    <div className="app">
      <Translator />
    </div>
  );
};
