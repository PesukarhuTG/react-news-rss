import React from 'react';
import styled from 'styled-components';
import { Layout } from '../components';

const AboutPage: React.FC = () => {
  return (
    <Layout>
      <Wrapper>
        <Title>About us</Title>
        <Description>
          <b>Racoon news</b>: it is the latest breaking news and information on the top stories,
          weather, business, entertainment, politics, and more.
        </Description>
        <PrimaryText>You do not miss anything!</PrimaryText>
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.div`
  margin: 0 auto;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 30px;
  font-weight: 700;
`;

const Description = styled.p`
  margin-top: 30px;
  text-align: center;
  font-size: 18px;
`;

const PrimaryText = styled.p`
  margin-top: 30px;
  text-align: center;
  font-size: 22px;
  font-weight: 700;
`;

export default AboutPage;
