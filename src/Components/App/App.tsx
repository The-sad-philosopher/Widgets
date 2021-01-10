import * as React from 'react';
import './App.sass';
import { Dropdown } from '../Dropdown';
import { options } from '../../helpers';

export const App: React.FC = () => {
  const [selection, setSelection] = React.useState(options[0]);

  return (
    <div className="app">
      <Dropdown
        selection={selection}
        onSelectionChange={setSelection}
        options={options}
      />
    </div>
  );
};
