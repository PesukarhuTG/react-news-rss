import React from 'react';
import styled from 'styled-components';
import { Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { changeSearchValue, fetchPosts, fetchSearchPosts } from '../store/NewsSlice';
import { AppDispatch, RootState } from 'store/Store';

const { Search } = Input;

const SearchPanel: React.FC = () => {
  const { searchVal, searchIn, sortBy, sortDateFrom, sortDateTo, currentPage, pageSize } =
    useSelector((state: RootState) => state.news);
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = async () => {
    try {
      if (searchVal) {
        const setRequestData = {
          searchVal,
          searchIn,
          sortBy,
          sortDateFrom,
          sortDateTo,
          currentPage,
          pageSize,
        };
        dispatch(fetchSearchPosts(setRequestData));
      } else {
        const setPages = { currentPage, pageSize };
        dispatch(fetchPosts(setPages));
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <StyledSearch
      placeholder="Search..."
      onChange={(e) => dispatch(changeSearchValue(e.target.value))}
      onSearch={handleSubmit}
      value={searchVal}
      data-testid="input-search"
      allowClear
      enterButton
    />
  );
};

const StyledSearch = styled(Search)`
  display: block;
  margin: 20px 0;
  font-size: 30px;

  .ant-input-group .ant-input {
    height: 50px;
    background-color: var(--second-contrast);
    color: var(--main-color);
  }

  .ant-input-group {
    height: 50px;
  }

  button.ant-input-search-button {
    height: 52px !important;
  }

  .ant-input-affix-wrapper {
    background-color: var(--second-contrast);
    border: 1px solid var(--second-contrast);
    padding: 0 15px 0 15px;
  }

  .ant-input-clear-icon {
    font-size: 18px;
    color: var(--main-color);

    &:hover {
      color: var(--primary);
    }
  }
`;

export default SearchPanel;
