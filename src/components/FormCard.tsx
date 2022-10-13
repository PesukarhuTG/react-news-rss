import React from 'react';
import styled from 'styled-components';
import FormProps from '../types/Form';

class FormCard extends React.Component<FormProps> {
  constructor(props: FormProps) {
    super(props);
  }

  render() {
    const { name, birthday, city, gender, file } = this.props;

    return (
      <Item data-testid="form-card">
        <CardImage
          style={{
            backgroundImage: `url(${file})`,
          }}
        />
        <Description>
          <Name>{name}</Name>
          <BirthdayData>
            <strong>Birthday: </strong>
            {birthday}
          </BirthdayData>
          <GenderData>
            <strong>Gender: </strong>
            <span style={{ color: `${gender === 'man' ? 'var(--primary)' : 'var(--gender-w)'}` }}>
              {gender}
            </span>
          </GenderData>
          <CityData>
            <strong>City: </strong>
            {city}
          </CityData>
        </Description>
      </Item>
    );
  }
}

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
`;

const Name = styled.p`
  font-size: 18px;
  font-weight: 700;
  color: var(--primary);
  text-transform: uppercase;
`;

const BirthdayData = styled.span`
  font-size: 14px;
`;

const GenderData = styled.span`
  font-size: 14px;
`;

const CityData = styled.p`
  font-size: 14px;
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
