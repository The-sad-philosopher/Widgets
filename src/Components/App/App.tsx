import * as React from 'react';
import { WikiSearch } from '../WikiSearch';
import './App.sass';

export const App: React.FC = () => {
  return (
    <div className="app">
      <WikiSearch />
    </div>
  );
};
