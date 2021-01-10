import * as React from 'react';
import './Dropdown.sass';
import { Option } from '../../helpers';

type Props = {
  options: Option[];
  selection: Option;
  onSelectionChange: React.Dispatch<React.SetStateAction<Option>>;
};

export const Dropdown: React.FC<Props> = (props) => {
  const { options, selection, onSelectionChange } = props;

  const onInputClick = (selection: Option) => onSelectionChange(selection);

  const dropdownList = options.map((option) => (
    <div
      key={option.value}
      className="item"
      onClick={() => onInputClick(option)}
    >
      <div className={`ui ${option.value} empty circular label`}></div>
      {option.label}
    </div>
  ));

  return (
    <>
      <div className="ui form">
        <div className="field">
          <label htmlFor="dropdown label">Label</label>
          <div className="ui selection dropdown visible active">
            <i className="dropdown icon"></i>
            <span className="text">{selection.label}</span>
            <div className="menu visible transition">{dropdownList}</div>
          </div>
        </div>
      </div>
    </>
  );
};
