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
  const [text, setText] = React.useState('');

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setText(e.target.value);

  return (
    <div className="translator ui container">
      <div className="ui form">
        <div className="field">
          <label htmlFor="user-text">Enter some text</label>
          <input
            type="text"
            placeholder="Enter some text"
            value={text}
            onChange={onInputChange}
          />
        </div>
      </div>
      <Dropdown
        options={options}
        selection={selectedLanguage}
        onSelectionChange={setSelectedLanguage}
        label="Select Language"
      />
    </div>
  );
};
