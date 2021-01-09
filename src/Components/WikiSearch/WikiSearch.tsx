import * as React from 'react';
import { search } from './api';
import { Form } from './Form';
import { Results } from './Results';

export const WikiSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [results, setResults] = React.useState<Array<any>>([]);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchTerm(e.target.value);

  React.useEffect(() => {
    /* setting a delay in search */
    const timeoutId = setTimeout(() => {
      searchTerm &&
        (async () => {
          const data = await search(searchTerm);
          setResults(data);
        })();
    }, 700);

    /* component rerender resets the delay */
    return () => clearTimeout(timeoutId);
  }, [searchTerm]);

  return (
    <div className="wiki-search">
      <Form onInputChange={onInputChange} searchTerm={searchTerm} />
      <Results results={results} />
    </div>
  );
};
