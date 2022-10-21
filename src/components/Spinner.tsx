import React from 'react';
import styled from 'styled-components';
import { Spin } from 'antd';

const Spinner = () => {
  return (
    <SpinnerWrapper>
      <StyledSpin size="large" data-testid="spinner-test" />
    </SpinnerWrapper>
  );
};

const SpinnerWrapper = styled.div`
  with: 100%;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledSpin = styled(Spin)`
  display: flex;
  align-item: center;
  justify-content: center;
  span.ant-spin-dot {
    font-size: 70px;
  }
  .ant-spin-dot-item {
    background-color: var(--primary);
  }
  .ant-spin-dot-item {
    width: 26px !important;
    height: 26px !important;
  }
`;

export default Spinner;
