import * as React from 'react';

type Props = {
  href: string;
  className: string;
  children: string;
};

export const Link: React.FC<Props> = (props) => {
  const { href, className, children } = props;

  const onClick = (event: React.MouseEvent) => {
    if (event.metaKey || event.ctrlKey) return;

    event.preventDefault();
    window.history.pushState({}, '', href);
    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  };

  return (
    <a href={href} className={className} onClick={onClick}>
      {children}
    </a>
  );
};
