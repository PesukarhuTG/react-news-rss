import React from 'react';
import styled from 'styled-components';
import FormProps from '../types/Form';

const FormCard: React.FC<FormProps> = ({ name, birthday, city, gender, file }) => {
  return (
    <Item data-testid="form-card">
      <CardImage
        style={{
          backgroundImage: `url(${file})`,
        }}
      />
      <Description>
        <Name>{name}</Name>
        <p>
          <strong>Birthday: </strong>
          {birthday}
        </p>
        <p>
          <strong>Gender: </strong>
          <span style={{ color: `${gender === 'man' ? 'var(--primary)' : 'var(--gender-w)'}` }}>
            {gender}
          </span>
        </p>
        <p>
          <strong>City: </strong>
          {city}
        </p>
      </Description>
    </Item>
  );
};

const Item = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  background-color: var(--second-contrast);
  border-radius: 10px;
  list-style: none;
  transition: 0.3s all;

  &:hover {
    box-shadow: 0 0 15px 0 var(--primary);
  }
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 14px;
`;

const Name = styled.p`
  font-size: 18px;
  font-weight: 700;
  color: var(--primary);
  text-transform: uppercase;
`;

const CardImage = styled.div`
  display: block;
  width: 100px;
  height: 100px;
  margin: 0 auto;
  background-color: var(--avatar-background);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 50%;
`;

export default FormCard;
