import * as React from 'react';
import { translate } from './translateAPI';

type Props = {
  text: string;
  language: {
    label: string;
    value: string;
  };
};

export const Translate: React.FC<Props> = ({ text, language }) => {
  const [debouncedText, setDebouncedText] = React.useState('');
  const [result, setResult] = React.useState('');

  React.useEffect(() => {
    const debounce = setTimeout(() => setDebouncedText(text), 500);
    return () => clearTimeout(debounce);
  }, [text]);

  React.useEffect(() => {
    (async () => {
      setResult(await translate(debouncedText, language.value));
    })();
  }, [debouncedText, language]);

  return (
    <div className="translate">
      Output:
      <h1 className="ui header">{result}</h1>
    </div>
  );
};
