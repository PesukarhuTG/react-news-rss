import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { changeSearchIn } from 'store/NewsSlice';
import { AppDispatch, RootState } from 'store/Store';

interface SortProps {
  options: string[];
}

const SortSelectIn: React.FC<SortProps> = ({ options }) => {
  const { searchIn } = useSelector((state: RootState) => state.news);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <label>
      <Select
        name="select-sort-in"
        value={searchIn}
        onChange={(e) => dispatch(changeSearchIn(e.target.value))}
      >
        {options.map((item: string, index: number) => {
          return (
            <option value={item} key={index}>
              {item}
            </option>
          );
        })}
      </Select>
    </label>
  );
};

const Select = styled.select`
  display: inline-block;
  padding: 5.5px 5px;
  border-radius: 5px;
  background-color: var(--main-background);
  font-size: 14px;
  outline: none;
  cursor: pointer;

  &:hover {
    border: 1px solid var(--primary);
  }
`;

export default SortSelectIn;
