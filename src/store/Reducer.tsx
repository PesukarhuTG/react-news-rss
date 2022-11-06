import InitialStateProps from 'types/InitialState';
import { getZero } from '../services/getZero';

type Action = {
  type: string;
  payload: any; //eslint-disable-line
};

export const initialState: InitialStateProps = {
  searchVal: '',
  formName: '',
  formDate: '',
  formCity: '',
  formAccept: false,
  formGender: 'man',
  formList: [],
  searchIn: 'title',
  sortBy: 'publishedAt',
  sortDateFrom: '2022-11-01',
  sortDateTo: `${new Date().getFullYear()}-${getZero(new Date().getMonth() + 1)}-${getZero(
    new Date().getDate()
  )}`,
  currentPage: 1,
  totalPageAmount: 100,
  pageSize: 10,
  selectedFile: null,
  fileText: 'No file selected',
  savedCardData: {
    author: '',
    description: '',
    publishedAt: '',
    title: '',
    url: '',
    urlToImage: '',
    index: null,
  },
  disableCurrentPosition: true,
  setSearchValue: () => {},
  setFormName: () => {},
  setFormDate: () => {},
  setFormCity: () => {},
  setFormAccept: () => {},
  setFormGender: () => {},
  setFormList: () => {},
  setSearchIn: () => {},
  setSortBy: () => {},
  setSortDateFrom: () => {},
  setSortDateTo: () => {},
  setCurrentPage: () => {},
  setTotalPageAmount: () => {},
  setPageSize: () => {},
  setSelectedFile: () => {},
  setSavedCardData: () => {},
  setDisableCurrentPosition: () => {},
  setFileText: () => {},
};

export const Reducer = (state: InitialStateProps, action: Action) => {
  const { type, payload } = action;

  switch (type) {
    case 'CHANGE_SEARCH_VALUE':
      return {
        ...state,
        searchVal: payload.searchVal,
      };

    case 'CHANGE_FORM_NAME':
      return {
        ...state,
        formName: payload.formName,
      };

    case 'CHANGE_FORM_DATE':
      return {
        ...state,
        formDate: payload.formDate,
      };

    case 'CHANGE_FORM_CITY':
      return {
        ...state,
        formCity: payload.formCity,
      };

    case 'CHANGE_FORM_ACCEPT':
      return {
        ...state,
        formAccept: payload.formAccept,
      };

    case 'CHANGE_FORM_GENDER':
      return {
        ...state,
        formGender: payload.formGender,
      };

    case 'CHANGE_FORM_LIST':
      return {
        ...state,
        formList: payload.formList,
      };

    case 'CHANGE_SEARCH_IN':
      return {
        ...state,
        searchIn: payload.searchIn,
      };

    case 'CHANGE_SORT_BY':
      return {
        ...state,
        sortBy: payload.sortBy,
      };

    case 'CHANGE_SORT_DATE_FROM':
      return {
        ...state,
        sortDateFrom: payload.sortDateFrom,
      };

    case 'CHANGE_SORT_DATE_TO':
      return {
        ...state,
        sortDateTo: payload.sortDateTo,
      };

    case 'CHANGE_CURRENT_PAGE':
      return {
        ...state,
        currentPage: payload.currentPage,
      };

    case 'CHANGE_TOTAL_PAGE_AMOUNT':
      return {
        ...state,
        totalPageAmount: payload.totalPageAmount,
      };

    case 'CHANGE_PAGE_SIZE':
      return {
        ...state,
        pageSize: payload.pageSize,
      };

    case 'CHANGE_FILE':
      return {
        ...state,
        selectedFile: payload.selectedFile,
      };

    case 'CHANGE_SAVED_CARD_DATA':
      return {
        ...state,
        savedCardData: payload.savedCardData,
      };

    case 'CURRENT_POSITION_INFO':
      return {
        ...state,
        disableCurrentPosition: payload.disableCurrentPosition,
      };

    case 'CHANGE_FILE_TEXT':
      return {
        ...state,
        fileText: payload.fileText,
      };

    default:
      throw new Error(`No case for type ${type} found in Reducer.`);
  }
};
