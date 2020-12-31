import * as React from 'react';
import './Accordion.sass';
import { Item } from '../../helpers';

type Props = {
  items: Item[];
};

export const Accordion: React.FC<Props> = ({ items }: Props) => {
  return <div className="accordion"> {items.length} </div>;
};
