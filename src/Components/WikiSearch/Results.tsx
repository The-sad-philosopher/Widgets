import * as React from 'react';
import { removeHTMLTags } from './lib';
import { baseUrl } from './api';

type result = {
  title: string;
  snippet: string;
  pageid: string;
  timestamp: string;
};

type Props = {
  results: result[];
};

export const Results: React.FC<Props> = ({ results }) => {
  const resultsList = results.map((result) => {
    const cleanSnippet = removeHTMLTags(result.snippet);
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
          <p>{cleanSnippet}</p>
        </div>
      </div>
    );
  });
  return <div className="ui celled list">{resultsList}</div>;
};
