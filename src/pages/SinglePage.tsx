import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Layout } from '../components';
import { useNavigate } from 'react-router-dom';
import useNewsContext from '../store/Context';
import SavedCardProps from '../types/SavedCardData';

const SinglePage: React.FC = () => {
  const navigate = useNavigate();
  const { savedCardData, setDisableCurrentPosition } = useNewsContext();

  const { author, description, publishedAt, title, urlToImage, url } =
    savedCardData as SavedCardProps;

  const backMainPage = () => {
    navigate('/', { replace: true });
  };

  useEffect(() => {
    if (!author && !description && !publishedAt && !title && !urlToImage && !url) {
      navigate('/', { replace: true });
    }

    return () => {
      setDisableCurrentPosition(true);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>
      <Wrapper>
        <NewsImage
          style={{
            backgroundImage: `url(${urlToImage}`,
          }}
        />
        <NewsFullTitle>{title}</NewsFullTitle>

        <NewsFullDescription>
          {description || 'Sorry, this news has no description'}
        </NewsFullDescription>
        <InfoWrapper>
          <PublishedDiv>
            <span>
              <b>Published date</b>
            </span>
            <span>{publishedAt ? publishedAt.slice(0, 10) : 'no date'}</span>
          </PublishedDiv>
          <PublishedDiv>
            <span>
              <b>Author</b>
            </span>
            <span>{author || 'incognita'}</span>
          </PublishedDiv>
        </InfoWrapper>
        <InfoWrapper>
          <Button onClick={backMainPage}>❮ Back to main page</Button>
          <a href={url} target="_blank" rel="noreferrer noopener">
            <Button>Link to full news ❯</Button>
          </a>
        </InfoWrapper>
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.div`
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
`;

const InfoWrapper = styled.div`
  width: 100%;
  display: flex;
  font-size: 14px;
  gap: 20px;
  margin: 20px 0;
  align-items: center;
  justify-content: space-between;
`;

const NewsImage = styled.div`
  width: 100%;
  height: 240px;
  margin: 40px 0 30px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 10px;
  box-shadow: 0 0 15px 0 var(--primary);
`;

const NewsFullTitle = styled.p`
  margin-bottom: 20px;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  color: var(--primary);
  text-transform: uppercase;
`;

const NewsFullDescription = styled.p`
  font-size: 14px;
  padding-bottom: 20px;
  border-bottom: 1px dotted var(--main-color);
`;

const Button = styled.button`
  display: block;
  max-width: 170px;
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border-radius: 5px;
  background-color: var(--primary);
  border: 0;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: var(--button-hover);
  }
`;

const PublishedDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default SinglePage;
