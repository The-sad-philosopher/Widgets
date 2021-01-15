import * as React from 'react';
import { Option } from '../../helpers';

type Props = {
  onDropdownClick: () => void;
  isOpen: boolean;
  selection: Option;
  dropdownList: JSX.Element[];
};

export const DropdownList: React.FC<Props> = (props) => {
  const { onDropdownClick, isOpen, selection, dropdownList } = props;
  return (
    <div
      onClick={onDropdownClick}
      className={`ui selection dropdown ${isOpen ? 'visible active' : ''}`}
    >
      <i className="dropdown icon"></i>
      <span className="text">{selection.label}</span>
      <div className={`menu ${isOpen ? 'visible transition' : ''}`}>
        {dropdownList}
      </div>
    </div>
  );
};
