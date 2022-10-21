import React from 'react';
import styled from 'styled-components';
import { Input } from 'antd';
import CardProps from '../types/Card';
import { getNews, searchNews } from '../services/getDataApi';

const { Search } = Input;

interface SearchProps {
  onSearch: (data: CardProps[]) => void;
}

interface State {
  value?: string;
  news?: CardProps[];
}

class SearchPanel extends React.Component<SearchProps, State> {
  constructor(props: SearchProps) {
    super(props);
    this.state = {
      value: '',
      news: [],
    };
  }

  onChange(searchValue: string): void {
    this.setState({ value: searchValue });
  }

  componentDidMount(): void {
    const value = localStorage.getItem('searchData');
    if (value) {
      this.setState({ value });
    }
  }

  componentWillUnmount(): void {
    if (this.state.value?.length) {
      localStorage.setItem('searchData', this.state.value);
    } else {
      localStorage.setItem('searchData', '');
    }
  }

  handleSubmit = (): void => {
    if (this.state.value) {
      searchNews(this.state.value).then((resp) => {
        this.props.onSearch(resp.articles);
      });
    } else {
      getNews().then((resp) => {
        this.props.onSearch(resp.articles);
      });
    }
  };

  render() {
    return (
      <StyledSearch
        placeholder="Search..."
        onChange={(e) => this.onChange(e.target.value)}
        onSearch={this.handleSubmit}
        value={this.state.value}
        data-testid="input-search"
        allowClear
        enterButton
      />
    );
  }
}

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
