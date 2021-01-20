import * as React from 'react';
import { Link } from './Link';

export const Header: React.FC = () => {
  return (
    <div className="ui secondary pointing menu">
      <div className="ui container">
        <Link href="/" className="item">
          Accordion
        </Link>
        <Link href="/search" className="item">
          WikiSearch
        </Link>
        <Link href="/translate" className="item">
          Translate
        </Link>
      </div>
    </div>
  );
};
