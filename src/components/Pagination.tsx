import React from 'react';
import { Pagination as AntdPagination } from 'antd';
import styled from 'styled-components';

interface PaginationProps {
  page?: number;
  total?: number;
  pageSize: number;
  onChange?: (page: number, pageSize: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  pageSize,
  page = 1,
  onChange = () => {},
  total = 100,
}) => {
  return (
    <StyledPagination
      showQuickJumper
      showSizeChanger
      defaultCurrent={1}
      total={total}
      onChange={onChange}
      current={page}
      pageSize={pageSize}
    />
  );
};

const StyledPagination = styled(AntdPagination)`
  margin-bottom: 30px;
  text-align: center;

  .ant-pagination-item-link {
    font-size: 20px;
    color: var(--primary);
  }

  .ant-pagination-item {
    background-color: var(--main-background);
  }

  .ant-pagination-item a {
    color: var(--main-color);
    transition: 0.3s;
    &:hover {
      color: var(--primary);
    }
  }

  .ant-pagination-item-active a {
    color: var(--primary);
  }

  .ant-pagination-item-link {
    background-color: var(--second-contrast);
  }

  .ant-pagination-item-container {
    & .ant-pagination-item-ellipsis {
      top: 12px;
      letter-spacing: 5px;
      text-indent: 0;
      color: var(--main-color);
    }
  }

  .ant-select:not(.ant-select-customize-input) .ant-select-selector {
    background-color: var(--main-background);
    color: var(--main-color);
  }

  .ant-pagination-options-quick-jumper {
    color: var(--main-color);
  }

  .ant-pagination-options-quick-jumper input {
    color: var(--main-color);
    background-color: var(--second-contrast) !important;
    outline: none;
  }
`;

export default Pagination;
