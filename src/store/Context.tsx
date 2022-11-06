import React, { createContext, useReducer, useContext } from 'react';
import FormProps from '../types/Form';
import SavedCardProps from '../types/SavedCardData';
import InitialStateProps from '../types/InitialState';
import { initialState, Reducer } from '../store/Reducer';

interface Props {
  children?: React.ReactNode;
}

const Context = createContext<InitialStateProps>(initialState);

export const Provider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  const setSearchValue = (searchVal: string) => {
    dispatch({
      type: 'CHANGE_SEARCH_VALUE',
      payload: {
        searchVal: searchVal,
      },
    });
  };

  const setFormName = (formName: string) => {
    dispatch({
      type: 'CHANGE_FORM_NAME',
      payload: {
        formName: formName,
      },
    });
  };

  const setFormDate = (formDate: string) => {
    dispatch({
      type: 'CHANGE_FORM_DATE',
      payload: {
        formDate: formDate,
      },
    });
  };

  const setFormCity = (formCity: string) => {
    dispatch({
      type: 'CHANGE_FORM_CITY',
      payload: {
        formCity: formCity,
      },
    });
  };

  const setFormAccept = (formAccept: boolean) => {
    dispatch({
      type: 'CHANGE_FORM_ACCEPT',
      payload: {
        formAccept: formAccept,
      },
    });
  };

  const setFormGender = (formGender: string) => {
    dispatch({
      type: 'CHANGE_FORM_GENDER',
      payload: {
        formGender: formGender,
      },
    });
  };

  const setFormList = (formList: FormProps[]) => {
    dispatch({
      type: 'CHANGE_FORM_LIST',
      payload: {
        formList: formList,
      },
    });
  };

  const setSearchIn = (searchIn: string) => {
    dispatch({
      type: 'CHANGE_SEARCH_IN',
      payload: {
        searchIn: searchIn,
      },
    });
  };

  const setSortBy = (sortBy: string) => {
    dispatch({
      type: 'CHANGE_SORT_BY',
      payload: {
        sortBy: sortBy,
      },
    });
  };

  const setSortDateFrom = (sortDateFrom: string) => {
    dispatch({
      type: 'CHANGE_SORT_DATE_FROM',
      payload: {
        sortDateFrom: sortDateFrom,
      },
    });
  };

  const setSortDateTo = (sortDateTo: string) => {
    dispatch({
      type: 'CHANGE_SORT_DATE_TO',
      payload: {
        sortDateTo: sortDateTo,
      },
    });
  };

  const setCurrentPage = (currentPage: number) => {
    dispatch({
      type: 'CHANGE_CURRENT_PAGE',
      payload: {
        currentPage: currentPage,
      },
    });
  };

  const setTotalPageAmount = (totalPageAmount: number) => {
    dispatch({
      type: 'CHANGE_TOTAL_PAGE_AMOUNT',
      payload: {
        totalPageAmount: totalPageAmount,
      },
    });
  };

  const setPageSize = (pageSize: number) => {
    dispatch({
      type: 'CHANGE_PAGE_SIZE',
      payload: {
        pageSize: pageSize,
      },
    });
  };

  const setSelectedFile = (selectedFile: null | string) => {
    dispatch({
      type: 'CHANGE_FILE',
      payload: {
        selectedFile: selectedFile,
      },
    });
  };

  const setSavedCardData = (savedCardData: SavedCardProps) => {
    dispatch({
      type: 'CHANGE_SAVED_CARD_DATA',
      payload: {
        savedCardData: savedCardData,
      },
    });
  };

  const setDisableCurrentPosition = (disableCurrentPosition: boolean) => {
    dispatch({
      type: 'CURRENT_POSITION_INFO',
      payload: {
        disableCurrentPosition: disableCurrentPosition,
      },
    });
  };

  const setFileText = (fileText: string) => {
    dispatch({
      type: 'CHANGE_FILE_TEXT',
      payload: {
        fileText: fileText,
      },
    });
  };

  const value: InitialStateProps = {
    searchVal: state.searchVal,
    formName: state.formName,
    formDate: state.formDate,
    formCity: state.formCity,
    formAccept: state.formAccept,
    formGender: state.formGender,
    formList: state.formList,
    searchIn: state.searchIn,
    sortBy: state.sortBy,
    sortDateFrom: state.sortDateFrom,
    sortDateTo: state.sortDateTo,
    currentPage: state.currentPage,
    totalPageAmount: state.totalPageAmount,
    pageSize: state.pageSize,
    selectedFile: state.selectedFile,
    fileText: state.fileText,
    savedCardData: state.savedCardData,
    disableCurrentPosition: state.disableCurrentPosition,
    setSearchValue,
    setFormName,
    setFormDate,
    setFormCity,
    setFormAccept,
    setFormGender,
    setFormList,
    setSearchIn,
    setSortBy,
    setSortDateFrom,
    setSortDateTo,
    setCurrentPage,
    setTotalPageAmount,
    setPageSize,
    setSelectedFile,
    setSavedCardData,
    setDisableCurrentPosition,
    setFileText,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

const useNewsContext = () => {
  const context = useContext(Context);

  if (context === undefined) {
    throw new Error('useNewsContext must be used within Context');
  }

  return context;
};

export default useNewsContext;
