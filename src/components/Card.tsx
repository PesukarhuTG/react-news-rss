import React from 'react';
import styled from 'styled-components';
import CardProps from '../types/Card';
import useNewsContext from '../store/Context';

interface Props {
  item: CardProps;
  index: number;
}

const Card: React.FC<Props> = ({ item, index }) => {
  const { setSavedCardData, setDisableCurrentPosition } = useNewsContext();
  const { author, description, publishedAt, title, urlToImage, url } = item;

  const showSeparatePage = () => {
    setSavedCardData({ author, description, publishedAt, title, urlToImage, url, index });
    setDisableCurrentPosition(false);
  };

  return (
    <Item data-testid="card-item" onClick={showSeparatePage}>
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
};

const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  position: relative;
  padding-bottom: 10px;
  width: 100%;
  list-style: none;
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
  height: 64px;
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
