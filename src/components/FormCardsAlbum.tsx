import React from 'react';
import styled from 'styled-components';
import FormProps from '../types/Form';
import FormCard from './FormCard';

interface CardListProps {
  list: FormProps[];
}

const FormCardsAlbum: React.FC<CardListProps> = ({ list }) => {
  return (
    <Album>
      {list.length
        ? list.map((item: FormProps, index: number) => {
            return <FormCard {...item} key={index} />;
          })
        : null}
    </Album>
  );
};

const Album = styled.ul`
  margin: 20px auto;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 50px;
`;

export default FormCardsAlbum;
