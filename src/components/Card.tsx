import React from 'react';
import styled from 'styled-components';
import CardProps from '../types/Card';
import { Modal } from './index';

interface State {
  isModal?: boolean;
}

class Card extends React.Component<CardProps, State> {
  constructor(props: CardProps) {
    super(props);
    this.state = {
      isModal: false,
    };
  }

  checkVisibleModal = (): void => {
    if (this.state.isModal) {
      const widthScroll = window.innerWidth - document.body.offsetWidth;

      document.body.style.cssText = `
          overflow: hidden;
          padding-right: ${widthScroll}px;
      `;
    } else {
      document.body.style.cssText = '';
    }
  };

  modalClose = async () => {
    await this.setState({ isModal: false });
    this.checkVisibleModal();
  };

  modalOpen = async () => {
    await this.setState({ isModal: true });
    this.checkVisibleModal();
  };

  render() {
    const { author, description, publishedAt, title, urlToImage, url } = this.props;
    const date: Date = new Date(Date.parse(publishedAt));

    return (
      <>
        <Item data-testid="card-item" onClick={this.modalOpen}>
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

        <Modal visible={this.state.isModal} onClose={this.modalClose}>
          <InfoWrapper>
            <NewsImage
              style={{
                backgroundImage: `url(${urlToImage || '../assets/img/no-poster.jpg'}`,
              }}
            />
            <NewsFullTitle>{title}</NewsFullTitle>
          </InfoWrapper>
          <NewsFullDescription>
            {description || 'Sorry, there is no any description'}
          </NewsFullDescription>
          <LinkToFullNews href={url} target={'_blank'}>
            Link to full news ►
          </LinkToFullNews>
          <InfoWrapper>
            <NewsFullDate>{String(date).slice(0, 21)}</NewsFullDate>
            <NewsFullAuthor>{author || 'unnamed'}</NewsFullAuthor>
          </InfoWrapper>
        </Modal>
      </>
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
    cursor: pointer;
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

const InfoWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  margin: 20px 0;
  align-items: center;
  justify-content: space-between;
`;

const NewsImage = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const NewsFullTitle = styled.p`
  width: 66%;
  font-size: 18px;
  color: var(--primary);
  margin: 0 10px;
  text-transform: uppercase;
`;

const NewsFullDescription = styled.p`
  font-size: 14px;
`;

const NewsFullDate = styled.p`
  font-size: 14px;
`;

const NewsFullAuthor = styled.p`
  font-size: 14px;
`;

const LinkToFullNews = styled.a`
  display: block;
  margin: 10px 0;
  font-size: 14px;
  color: var(--primary);
`;

export default Card;
