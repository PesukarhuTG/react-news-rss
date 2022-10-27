import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Input } from 'antd';
import CardProps from '../types/Card';
import { getNews, searchNews } from '../services/getDataApi';

const { Search } = Input;

interface SearchProps {
  onSearch: (data: CardProps[]) => void;
}

const SearchPanel: React.FC<SearchProps> = ({ onSearch }) => {
  const [value, setValue] = useState<string>('');
  const valRef = useRef(value);

  const onChange = (searchValue: string): void => {
    setValue(searchValue);
  };

  const handleSubmit = (): void => {
    if (value) {
      searchNews(value).then((resp) => {
        onSearch(resp.articles);
      });
    } else {
      getNews().then((resp) => {
        onSearch(resp.articles);
      });
    }
  };

  useEffect(() => {
    valRef.current = value;
  }, [value]);

  useEffect(() => {
    const value = localStorage.getItem('searchData');
    if (value) {
      setValue(value);
    }
    return () => {
      localStorage.setItem('searchData', valRef.current);
    };
  }, []);

  return (
    <StyledSearch
      placeholder="Search..."
      onChange={(e) => onChange(e.target.value)}
      onSearch={handleSubmit}
      value={value}
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
