import React from 'react';
import styled from 'styled-components';
import FormProps from '../types/Form';
import { Layout, LoginForm, FormCardsAlbum } from '../components';

interface State {
  list?: FormProps[];
  message?: string;
}

class Contacts extends React.Component<State> {
  state = {
    list: [],
    message: '',
  };

  onSubmit = (formFields: FormProps) => {
    const currentList = this.state.list as FormProps[];
    currentList.push(formFields);
    this.setState({ list: currentList });

    this.setState({ message: 'Your data has been saved!' });
    setTimeout(() => this.setState({ message: '' }), 1500);
  };

  render() {
    return (
      <Layout>
        <Wrapper>
          <Title>Contact us via form</Title>
          <LoginForm onSubmit={this.onSubmit} />
        </Wrapper>
        <Message data-testid="form-message">{this.state.message}</Message>
        <FormCardsAlbum list={this.state.list} />
      </Layout>
    );
  }
}

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

export default Contacts;
