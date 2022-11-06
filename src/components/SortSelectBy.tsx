import React from 'react';
import styled from 'styled-components';
import useNewsContext from '../store/Context';

interface SortProps {
  options: string[];
}

const SortSelectBy: React.FC<SortProps> = ({ options }) => {
  const { sortBy, setSortBy } = useNewsContext();

  return (
    <label>
      <Select name="select-sort-by" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
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

export default SortSelectBy;
