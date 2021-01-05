import * as React from 'react';
import { baseUrl, search } from './api';

export const WikiSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [results, setResults] = React.useState<Array<any>>([]);

  React.useEffect(() => {
    if (searchTerm) {
      (async () => {
        const data = await search(searchTerm);
        setResults(data);
      })();
    }
  }, [searchTerm]);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchTerm(e.target.value);

  const renderedList = results.map((result) => {
    const regex = /(<([^>]+)>)/gi;
    const cleanSnippet = result.snippet.replace(regex, '');

    return (
      <div className="item" key={result.timestamp}>
        <div className="right floated content">
          <a
            href={`${baseUrl}?curid=${result.pageid}`}
            className="ui button"
            target="blank"
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          {cleanSnippet}
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="wiki-search ui form">
        <div className="field">
          <label htmlFor="search">Enter search term</label>
          <input
            type="text"
            placeholder="Search"
            className="input"
            onChange={onInputChange}
            value={searchTerm}
          />
        </div>
      </div>
      <div className="ui celled list">{renderedList}</div>
    </>
  );
};
