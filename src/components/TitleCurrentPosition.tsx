import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from 'store/Store';

const TitleCurrentPosition: React.FC = () => {
  const { currentPage, savedCardData } = useSelector((state: RootState) => state.news);

  return (
    <Title>
      page #{currentPage}, news #{savedCardData ? savedCardData.index : 0}
    </Title>
  );
};

const Title = styled.h2`
  margin: 0 auto;
  padding: 5px 20px;
  text-align: center;
  font-size: 20px;
  font-weight: 400;
  line-height: 1.3;
  background-color: var(--second-contrast);
`;

export default TitleCurrentPosition;
