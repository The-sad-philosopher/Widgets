import * as React from 'react';
import './Translator.sass';
import { Dropdown } from '../Dropdown';

const options = [
  { label: 'Afrikaans', value: 'af' },
  { label: 'French', value: 'fr' },
  { label: 'Hindi', value: 'hi' },
];

export const Translator: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = React.useState(options[0]);

  console.log(selectedLanguage);

  return (
    <div className="translator">
      <Dropdown
        options={options}
        selection={selectedLanguage}
        onSelectionChange={setSelectedLanguage}
        label="Select Language"
      />
    </div>
  );
};
