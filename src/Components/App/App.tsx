import * as React from 'react';
import './App.sass';
import { Dropdown } from '../Dropdown';
import { options } from '../../helpers';

export const App: React.FC = () => {
  return (
    <div className="app">
      <Dropdown options={options} />
    </div>
  );
};
