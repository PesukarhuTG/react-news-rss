import React from 'react';
import styled from 'styled-components';
import useNewsContext from '../store/Context';

const SortDateTo = () => {
  const { sortDateTo, setSortDateTo } = useNewsContext();

  return (
    <label>
      <span>date to: </span>
      <InputDate
        name="date-from"
        type="date"
        value={sortDateTo}
        onChange={(e) => setSortDateTo(e.target.value)}
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

export default SortDateTo;
