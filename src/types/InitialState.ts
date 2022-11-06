import FormProps from './Form';
import SavedCardProps from './SavedCardData';

interface InitialStateProps {
  searchVal: string;
  formName: string;
  formDate: string;
  formCity: string;
  formAccept: boolean;
  formGender: string;
  formList: FormProps[];
  searchIn: string;
  sortBy: string;
  sortDateFrom: string;
  sortDateTo: string;
  currentPage: number;
  totalPageAmount: number;
  pageSize: number;
  selectedFile: string | null;
  fileText: string;
  savedCardData: SavedCardProps;
  disableCurrentPosition: boolean;
  setSearchValue: (searchVal: string) => void;
  setFormName: (formName: string) => void;
  setFormDate: (formDate: string) => void;
  setFormCity: (formCity: string) => void;
  setFormAccept: (formAccept: boolean) => void;
  setFormGender: (formGender: string) => void;
  setFormList: (formList: FormProps[]) => void;
  setSearchIn: (searchIn: string) => void;
  setSortBy: (sortBy: string) => void;
  setSortDateFrom: (sortDateFrom: string) => void;
  setSortDateTo: (sortDateTo: string) => void;
  setCurrentPage: (currentPage: number) => void;
  setTotalPageAmount: (totalPageAmount: number) => void;
  setPageSize: (pageSize: number) => void;
  setSelectedFile: (selectedFile: null | string) => void;
  setSavedCardData: (savedCardData: SavedCardProps) => void;
  setDisableCurrentPosition: (disableCurrentPosition: boolean) => void;
  setFileText: (fileText: string) => void;
}

export default InitialStateProps;
