import React from 'react';
import styled from 'styled-components';
import CardProps from '../types/Card';
import { Card, Spinner } from './index';
import { NavLink } from 'react-router-dom';

interface CardListProps {
  cards?: CardProps[];
}

const CardsAlbum: React.FC<CardListProps> = ({ cards }) => {
  if (!cards?.length) {
    return <Spinner />;
  }

  return (
    <Album>
      {cards.map((item: CardProps, index: number) => {
        return (
          <CardNavLink key={index} to={`/news/${item.source?.id || item.source?.name}`}>
            <Card item={item} index={index + 1} />
          </CardNavLink>
        );
      })}
    </Album>
  );
};

const Album = styled.ul`
  margin: 0 auto;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 50px;
`;

const CardNavLink = styled(NavLink)`
  overflow: hidden;
  background-color: var(--second-contrast);
  border-radius: 10px;
  transition: 0.3s all;

  &:hover {
    box-shadow: 0 0 15px 0 var(--primary);
    cursor: pointer;
  }
`;

export default CardsAlbum;
