import * as React from 'react';
import './Accordion.sass';
import { Item } from '../../helpers';

type Props = {
  items: Item[];
};

export const Accordion: React.FC<Props> = ({ items }: Props) => {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

  const onTitleClick = (index: number) => setActiveIndex(index);

  const list = items.map((item, index) => {
    return (
      <React.Fragment key={item.title}>
        <div
          className={`title ${index === activeIndex ? 'active' : ''}`}
          onClick={() => onTitleClick(index)}
        >
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${index === activeIndex ? 'active' : ''}`}>
          {item.content}
        </div>
      </React.Fragment>
    );
  });

  return <div className="ui styled accordion">{list}</div>;
};
