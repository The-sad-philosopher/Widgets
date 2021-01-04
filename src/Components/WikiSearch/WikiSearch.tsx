import * as React from 'react';

export const WikiSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = React.useState('');

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchTerm(e.target.value);

  return (
    <div className="wiki-search">
      <div className="ui form">
        <div className="field">
          <label htmlFor="search">Enter search term</label>
          <input
            type="text"
            placeholder="Search"
            className="input"
            onChange={onInputChange}
            value={searchTerm}
          />
        </div>
      </div>
    </div>
  );
};
