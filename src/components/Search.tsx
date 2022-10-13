import React from 'react';
import styled from 'styled-components';
import { Input } from 'antd';

const { Search } = Input;

interface State {
  value?: string;
}

class SearchPanel extends React.Component<State> {
  state = {
    value: '',
  };

  onChange(searchValue: string) {
    this.setState({ value: searchValue });
  }

  componentDidMount(): void {
    const value = localStorage.getItem('searchData');
    if (value) {
      this.setState({ value });
    }
  }

  componentDidUpdate(): void {
    if (this.state.value === '') {
      localStorage.setItem('searchData', this.state.value); //if we clear input via clear icon
    }
  }

  componentWillUnmount(): void {
    this.state.value.length && localStorage.setItem('searchData', this.state.value);
  }

  render() {
    return (
      <StyledSearch
        placeholder="Search..."
        onChange={(e) => this.onChange(e.target.value)}
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
