import * as React from 'react';
import './Dropdown.sass';
import { Option } from '../../helpers';
import { DropdownList } from './DropdownList';

type Props = {
  options: Option[];
  selection: Option;
  onSelectionChange: React.Dispatch<React.SetStateAction<Option>>;
  label: string;
};

export const Dropdown: React.FC<Props> = (props) => {
  const { options, selection, onSelectionChange, label } = props;
  const [isOpen, setIsOpen] = React.useState(false);

  const dropdownElement = React.useRef<HTMLDivElement>(null);

  const onInputClick = (selection: Option) => onSelectionChange(selection);
  const onDropdownClick = () => setIsOpen(!isOpen);
  const onBodyClick = (event: MouseEvent) => {
    if (dropdownElement?.current?.contains(event.target as Node)) return;
    setIsOpen(false);
  };

  React.useEffect(() => {
    document.body.addEventListener('click', onBodyClick, { capture: true });

    return () => document.body.removeEventListener('click', onBodyClick);
  }, []);

  const dropdownList = options.map((option) => (
    <div
      key={option.value}
      className="item"
      onClick={() => onInputClick(option)}
    >
      {option.label}
    </div>
  ));

  return (
    <>
      <div ref={dropdownElement} className="ui form">
        <div className="field">
          <label htmlFor="dropdown label">{label}</label>
          <DropdownList
            onDropdownClick={onDropdownClick}
            isOpen={isOpen}
            selection={selection}
            dropdownList={dropdownList}
          />
        </div>
      </div>
    </>
  );
};
