import React from 'react';
import styled from 'styled-components';
import { Layout } from '../components';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <Layout>
      <Wrapper>
        <Title>404</Title>
        <Description>sorry, page not found</Description>
        <HomeLink to="/">► back home</HomeLink>
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.div`
  margin: auto;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 140px;
  font-weight: 700;
`;

const Description = styled.p`
  text-align: center;
  font-size: 24px;
  letter-spacing: 1.5px;
  margin: 0 0 20px;
`;

const HomeLink = styled(Link)`
  display: block;
  text-align: center;
  color: var(--primary);

  &:hover {
    text-decoration: underline;
  }
`;

export default NotFound;
