import * as React from 'react';
import { Link } from './Link';

export const Header: React.FC = () => {
  const [currentPath, setCurrentPath] = React.useState(
    window.location.pathname
  );

  React.useEffect(() => {
    const onURLChange = () => setCurrentPath(window.location.pathname);

    window.addEventListener('popstate', onURLChange);
    return () => window.removeEventListener('popstate', onURLChange);
  }, []);

  const getClassName = (path: string) => {
    return currentPath === path ? 'active item' : 'item';
  };

  return (
    <div className="ui secondary pointing menu">
      <div className="ui container">
        <Link href="/" className={getClassName('/')}>
          Accordion
        </Link>
        <Link href="/search" className={getClassName('/search')}>
          WikiSearch
        </Link>
        <Link href="/translate" className={getClassName('/translate')}>
          Translate
        </Link>
      </div>
    </div>
  );
};
