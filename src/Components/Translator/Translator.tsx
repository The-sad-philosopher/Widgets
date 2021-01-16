import * as React from 'react';
import './Translator.sass';
import { Dropdown } from '../Dropdown';

console.log(Dropdown);
export const Translator: React.FC = () => {
  const options = [
    { label: 'Hindi', value: 'hi' },
    { label: 'French', value: 'fr' },
  ];

  const [selectedLanguage, setSelectedLanguage] = React.useState(options[0]);

  return (
    <div>
      <Dropdown
        options={options}
        selection={selectedLanguage}
        onSelectionChange={setSelectedLanguage}
      />
    </div>
  );
};
