import * as React from 'react';

type Props = {
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchTerm: string;
};

export const Form: React.FC<Props> = ({ onInputChange, searchTerm }) => (
  <div className="ui form">
    <div className="field">
      <label htmlFor="search">Enter search Term:</label>
      <input
        type="text"
        placeholder="search"
        className="search"
        onChange={onInputChange}
        value={searchTerm}
      />
    </div>
  </div>
);
