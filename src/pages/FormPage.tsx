import React, { useState } from 'react';
import styled from 'styled-components';
import FormProps from '../types/Form';
import { Layout, Form, FormCardsAlbum } from '../components';

const FormPage: React.FC = () => {
  const [list, setList] = useState<FormProps[]>([]);
  const [message, setMessage] = useState<string>('');

  const onSubmit = (formFields: FormProps) => {
    const currentList = list;
    currentList.push(formFields);
    setList(currentList);

    setMessage('Your data has been saved!');
    setTimeout(() => setMessage(''), 1500);
  };

  return (
    <Layout>
      <Wrapper>
        <Title>Save your data</Title>
        <Form onSubmit={onSubmit} />
      </Wrapper>
      <Message data-testid="form-message">{message}</Message>
      <FormCardsAlbum list={list} />
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

const Message = styled.p`
  height: 30px;
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  color: var(--accent);
`;

export default FormPage;
