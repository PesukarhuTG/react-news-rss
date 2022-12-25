import React, { useState } from 'react';
import styled from 'styled-components';
import FormProps from '../types/Form';
import { Layout, Form, FormCardsAlbum } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { changeFormList } from 'store/FormSlice';
import { AppDispatch, RootState } from 'store/Store';

const FormPage: React.FC = () => {
  const [message, setMessage] = useState<string>('');
  const { formList } = useSelector((state: RootState) => state.forms);
  const dispatch = useDispatch<AppDispatch>();

  const onSubmit = (formFields: FormProps) => {
    const currentList = [...formList];
    currentList.push(formFields);
    dispatch(changeFormList(currentList));

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
      <FormCardsAlbum list={formList} />
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
