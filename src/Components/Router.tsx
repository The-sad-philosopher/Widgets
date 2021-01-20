import * as React from 'react';

type Props = {
  path: string;
  children: JSX.Element;
};

export const Router: React.FC<Props> = ({ path, children }) => {
  const [currentPath, setCurrentPath] = React.useState(
    window.location.pathname
  );

  React.useEffect(() => {
    const onURLChange = () => setCurrentPath(window.location.pathname);

    window.addEventListener('popstate', onURLChange);
    return () => window.removeEventListener('popstate', onURLChange);
  }, []);

  return currentPath === path ? children : null;
};
