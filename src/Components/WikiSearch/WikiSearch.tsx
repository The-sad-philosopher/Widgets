import * as React from 'react';
import { search } from './api';
import { Form } from './Form';
import { Results } from './Results';

export const WikiSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = React.useState('programming');
  const [results, setResults] = React.useState<Array<any>>([]);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchTerm(e.target.value);

  const isFirstRender = React.useRef(true);

  React.useEffect(() => {
    const getData = async () => setResults(await search(searchTerm));

    /* returns from useEffect after first render */
    if (isFirstRender.current) {
      searchTerm && getData();
      isFirstRender.current = false;
      return;
    }

    /* setting a delay in search */
    const timeoutId = setTimeout(() => {
      searchTerm && getData();
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
