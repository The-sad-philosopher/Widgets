import * as React from 'react';
import './App.sass';
import { Dropdown } from '../Dropdown';

export const App: React.FC = () => {
  return (
    <div className="app">
      <Dropdown />
    </div>
  );
};
