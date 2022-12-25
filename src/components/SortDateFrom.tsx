import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { changeSortDateFrom } from 'store/NewsSlice';
import { AppDispatch, RootState } from 'store/Store';

const SortDateFrom = () => {
  const { sortDateFrom } = useSelector((state: RootState) => state.news);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <label>
      <span>date from: </span>
      <InputDate
        name="date-from"
        type="date"
        value={sortDateFrom}
        onChange={(e) => dispatch(changeSortDateFrom(e.target.value))}
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
