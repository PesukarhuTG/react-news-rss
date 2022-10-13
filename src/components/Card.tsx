import React from 'react';
import styled from 'styled-components';
import CardProps from '../types/Card';

class Card extends React.Component<CardProps> {
  constructor(props: CardProps) {
    super(props);
  }

  render() {
    const { author, description, publishedAt, title, urlToImage } = this.props;

    return (
      <Item data-testid="card-item">
        <CardImage
          style={{
            backgroundImage: `url(${urlToImage || '../assets/img/no-poster.jpg'}`,
          }}
        />
        <Title>{title}</Title>
        <Description>{description || 'Sorry, there is no any description'}</Description>
        <NewsDate>Data: {publishedAt.slice(0, 10)}</NewsDate>
        <Author>Author: {author || 'unnamed'}</Author>
      </Item>
    );
  }
}

const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  position: relative;
  padding-bottom: 10px;
  width: 100%;
  overflow: hidden;
  background-color: var(--second-contrast);
  border-radius: 10px;
  list-style: none;
  transition: 0.3s all;

  &:hover {
    box-shadow: 0 0 15px 0 var(--primary);
  }
`;

const Title = styled.p`
  max-height: 50px;
  height: 100%;
  font-size: 18px;
  color: var(--primary);
  margin: 0 10px;
  text-transform: uppercase;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const Description = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;

  max-height: 90px;
  height: 100%;
  margin: 0 10px;
  font-size: 12px;
`;

const NewsDate = styled.p`
  display: block;
  margin: 0 10px;
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-top: 20px;
  border-top: 1px dotted var(--main-color);
`;

const Author = styled.p`
  display: -webkit-box;
  margin: 0 10px;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 12px;
`;

const CardImage = styled.div`
  display: block;
  width: 100%;
  height: 265px;
  background-image: url('../assets/img/no-poster.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 10px 10px 0 0;
`;

export default Card;
