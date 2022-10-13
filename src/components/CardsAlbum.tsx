import React from 'react';
import styled from 'styled-components';
import CardProps from '../types/Card';
import Card from './Card';

interface CardListProps {
  cards?: CardProps[];
}

class CardsAlbum extends React.Component<CardListProps> {
  constructor(props: CardListProps) {
    super(props);
  }

  render() {
    if (!this.props.cards?.length) {
      return <LoadMessage>Data is preparing...</LoadMessage>;
    }

    const { cards } = this.props;
    cards.length = 20;

    return (
      <Album>
        {cards.map((item: CardProps, index: number) => {
          return <Card {...item} key={index} />;
        })}
      </Album>
    );
  }
}

const Album = styled.ul`
  margin: 0 auto;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 50px;
`;

const LoadMessage = styled.p`
  text-align: center;
  padding: 20px 0;
`;

export default CardsAlbum;
