import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import CardProps from 'types/Card';
import { getZero } from 'services/getZero';
import { API_KEY, BASE_URL } from '../services/constants';
import SavedCardProps from 'types/SavedCardData';

const checkDay = () => {
  const currentDay = new Date().getDate();
  const dateFrom = currentDay - 1 < 1 ? 28 : currentDay - 1;
  return dateFrom;
};

const checkMonth = () => {
  const currentDay = new Date().getDate();
  const currentMonth = new Date().getMonth() + 1;
  const monthFrom = currentDay - 1 < 1 ? currentMonth - 1 : currentMonth;
  return monthFrom;
};

interface PagesDataProps {
  currentPage: number;
  pageSize: number;
}

interface RequestData {
  status: string;
  totalResults: number;
  articles: CardProps[];
}

interface SearchDataProps {
  searchVal: string;
  searchIn: string;
  sortBy: string;
  sortDateFrom: string;
  sortDateTo: string;
  currentPage: number;
  pageSize: number;
}

interface InitState {
  searchVal: string;
  searchIn: string;
  sortBy: string;
  sortDateFrom: string;
  sortDateTo: string;
  currentPage: number;
  totalPageAmount: number;
  pageSize: number;
  disableCurrentPosition: boolean;
  savedCardData: SavedCardProps;
  newsData: CardProps[];
  errorMessage: string;
}

const initialState: InitState = {
  searchVal: '',
  searchIn: 'title',
  sortBy: 'publishedAt',
  sortDateFrom: `${new Date().getFullYear()}-${getZero(checkMonth())}-${getZero(checkDay())}`,
  sortDateTo: `${new Date().getFullYear()}-${getZero(new Date().getMonth() + 1)}-${getZero(
    new Date().getDate()
  )}`,
  currentPage: 1,
  totalPageAmount: 100,
  pageSize: 10,
  disableCurrentPosition: true,
  savedCardData: {
    author: '',
    description: '',
    publishedAt: '',
    title: '',
    url: '',
    urlToImage: '',
    index: null,
  },
  newsData: [],
  errorMessage: '',
};

export const fetchPosts = createAsyncThunk(
  'newsPosts/fetchPosts',
  async (pagesData: PagesDataProps) => {
    const { currentPage, pageSize } = pagesData;

    const response = await fetch(
      `${BASE_URL}top-headlines?country=us&page=${currentPage}&pageSize=${pageSize}&apiKey=${API_KEY}`
    );
    const data = await response.json();
    return data;
  }
);

export const fetchSearchPosts = createAsyncThunk(
  'newsPosts/fetchSearchPosts',
  async (searchData: SearchDataProps) => {
    const { searchVal, searchIn, sortBy, sortDateFrom, sortDateTo, currentPage, pageSize } =
      searchData;

    const response = await fetch(
      `${BASE_URL}everything?searchIn=${searchIn}&q=${searchVal}&sortBy=${sortBy}&from=${sortDateFrom}&to=${sortDateTo}&page=${currentPage}&pageSize=${pageSize}&apiKey=${API_KEY}`
    );
    const data = await response.json();
    return data;
  }
);

const newsSlice = createSlice({
  name: 'newsPosts',
  initialState,
  reducers: {
    changeSearchValue(state, action: PayloadAction<string>) {
      state.searchVal = action.payload;
    },
    changeSearchIn(state, action: PayloadAction<string>) {
      state.searchIn = action.payload;
    },
    changeSortBy(state, action: PayloadAction<string>) {
      state.sortBy = action.payload;
    },
    changeSortDateFrom(state, action: PayloadAction<string>) {
      state.sortDateFrom = action.payload;
    },
    changeSortDateTo(state, action: PayloadAction<string>) {
      state.sortDateTo = action.payload;
    },
    changeCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    changeTotalPageAmount(state, action: PayloadAction<number>) {
      state.totalPageAmount = action.payload > 100 ? 100 : action.payload;
    },
    changePageSize(state, action: PayloadAction<number>) {
      state.pageSize = action.payload;
    },
    changeCurrentPositionInfo(state, action: PayloadAction<boolean>) {
      state.disableCurrentPosition = action.payload;
    },
    changeSavedCardData(state, action: PayloadAction<SavedCardProps>) {
      state.savedCardData = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.fulfilled, (state: InitState, action: PayloadAction<RequestData>) => {
        const { articles, totalResults } = action.payload;
        state.newsData = articles;
        state.errorMessage = !articles.length ? 'Ooops, something is wrong...' : '';
        state.totalPageAmount = totalResults > 100 ? 100 : totalResults;
      })
      .addCase(
        fetchSearchPosts.fulfilled,
        (state: InitState, action: PayloadAction<RequestData>) => {
          const { articles, totalResults } = action.payload;
          state.newsData = articles;
          state.errorMessage = !articles.length ? 'Sorry, the request is failed' : '';
          state.totalPageAmount = totalResults > 100 ? 100 : totalResults;
        }
      );
  },
});

export const {
  changeSearchValue,
  changeSearchIn,
  changeSortBy,
  changeSortDateFrom,
  changeSortDateTo,
  changeCurrentPage,
  changeTotalPageAmount,
  changePageSize,
  changeCurrentPositionInfo,
  changeSavedCardData,
} = newsSlice.actions;

export default newsSlice.reducer;
