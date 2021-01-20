import * as React from 'react';

type Props = {
  path: string;
  children: JSX.Element;
};

export const Router: React.FC<Props> = ({ path, children }) => {
  return window.location.pathname === path ? children : null;
};
