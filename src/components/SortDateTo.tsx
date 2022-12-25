import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { changeSortDateTo } from 'store/NewsSlice';
import { AppDispatch, RootState } from 'store/Store';

const SortDateTo = () => {
  const { sortDateTo } = useSelector((state: RootState) => state.news);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <label>
      <span>date to: </span>
      <InputDate
        name="date-from"
        type="date"
        value={sortDateTo}
        onChange={(e) => dispatch(changeSortDateTo(e.target.value))}
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
