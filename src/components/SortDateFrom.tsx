import React from 'react';
import styled from 'styled-components';
import useNewsContext from '../store/Context';

const SortDateFrom = () => {
  const { sortDateFrom, setSortDateFrom } = useNewsContext();

  return (
    <label>
      <span>date from: </span>
      <InputDate
        name="date-from"
        type="date"
        value={sortDateFrom}
        onChange={(e) => setSortDateFrom(e.target.value)}
      />
    </label>
  );
};

const InputDate = styled.input`
  background-color: var(--main-background);
  border: 1px solid var(--input-border);
  outline: none;
  cursor: pointer;

  &:hover {
    border: 1px solid var(--primary);
  }
`;

export default SortDateFrom;
