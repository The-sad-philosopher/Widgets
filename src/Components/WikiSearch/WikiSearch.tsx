import * as React from 'react';

export const WikiSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = React.useState('');

  React.useEffect(() => {
    // ? api call
  }, [searchTerm]);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchTerm(e.target.value);

  return (
    <div className="wiki-search ui form">
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
  );
};
