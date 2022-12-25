import { AppDispatch, RootState } from 'store/Store';
import React, { useEffect } from 'react';
import {
  Layout,
  SearchPanel,
  CardsAlbum,
  SortSelectBy,
  SortSelectIn,
  SortDateFrom,
  SortDateTo,
  Pagination,
} from 'components';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSearchPosts, fetchPosts } from 'store/NewsSlice';

const MainPage: React.FC = () => {
  const {
    searchVal,
    searchIn,
    sortBy,
    sortDateFrom,
    sortDateTo,
    currentPage,
    pageSize,
    newsData,
    errorMessage,
  } = useSelector((state: RootState) => state.news);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const onLoadChangedData = async (): Promise<void> => {
      if (searchVal) {
        const setRequestData = {
          searchVal,
          searchIn,
          sortBy,
          sortDateFrom,
          sortDateTo,
          currentPage,
          pageSize,
        };
        dispatch(fetchSearchPosts(setRequestData));
      } else {
        const setPages = { currentPage, pageSize };
        dispatch(fetchPosts(setPages));
      }
    };

    onLoadChangedData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchIn, sortBy, sortDateFrom, sortDateTo, currentPage, pageSize]);

  return (
    <Layout>
      <SearchPanel />
      <Headling>Hot news on Racoon digest</Headling>
      <SortWrapper>
        <SortBlock>
          <p>Searching by:</p>
          <SortSelectIn options={['title', 'description']} />
          <SortSelectBy options={['publishedAt', 'relevancy', 'popularity']} />
        </SortBlock>
        <SortBlock>
          <SortDateFrom />
          <SortDateTo />
        </SortBlock>
      </SortWrapper>
      <Message data-testid="fail-message">{errorMessage}</Message>
      <CardsAlbum cards={newsData} />
      <Pagination />
    </Layout>
  );
};

const Headling = styled.p`
  margin: 20px 0 10px;
  text-align: center;
  font-size: 36px;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--primary);
  opacity: 0.6;
`;

const Message = styled.p`
  margin: 10px 0 10px;
  height: 20px;
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  color: var(--accent);
`;

const SortBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const SortWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  gap: 20px;
  background-color: var(--second-contrast);
  font-size: 14px;

  @media (max-width: 950px) {
    flex-direction: column;
  }
`;

export default MainPage;
