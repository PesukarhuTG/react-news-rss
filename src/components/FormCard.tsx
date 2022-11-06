import React from 'react';
import styled, { css } from 'styled-components';
import FormProps from '../types/Form';

const FormCard: React.FC<FormProps> = ({ name, birthday, city, gender, selectedFile }) => {
  return (
    <Item data-testid="form-card">
      <CardImage
        style={{
          backgroundImage: `url(${selectedFile})`,
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
          <Gender $gender={gender}>{gender}</Gender>
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

const Gender = styled.span<{
  $gender: string;
}>`
  ${({ $gender }) => {
    if ($gender === 'man') {
      return css`
        color: var(--primary);
      `;
    } else {
      return css`
        color: var(--gender-w);
      `;
    }
  }}
`;

export default FormCard;
