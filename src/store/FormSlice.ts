import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import FormProps from '../types/Form';

interface InitState {
  formName: string;
  formDate: string;
  formCity: string;
  formAccept: boolean;
  formGender: string;
  formList: FormProps[];
  selectedFile: string | null;
  fileText: string;
}

const initialState: InitState = {
  formName: '',
  formDate: '',
  formCity: '',
  formAccept: false,
  formGender: 'man',
  formList: [],
  selectedFile: null,
  fileText: 'No file selected',
};

const FormSlice = createSlice({
  name: 'formPage',
  initialState,
  reducers: {
    changeFormName(state, action: PayloadAction<string>) {
      state.formName = action.payload;
    },
    changeFormDate(state, action: PayloadAction<string>) {
      state.formDate = action.payload;
    },
    changeFormCity(state, action: PayloadAction<string>) {
      state.formCity = action.payload;
    },
    changeFormGender(state, action: PayloadAction<string>) {
      state.formGender = action.payload;
    },
    changeFile(state, action: PayloadAction<string | null>) {
      state.selectedFile = action.payload;
    },
    changeFileText(state, action: PayloadAction<string>) {
      state.fileText = action.payload;
    },
    changeFormAccept(state, action: PayloadAction<boolean>) {
      state.formAccept = action.payload;
    },
    changeFormList(state, action: PayloadAction<FormProps[]>) {
      state.formList = action.payload;
    },
  },
});

export default FormSlice.reducer;

export const {
  changeFormName,
  changeFormDate,
  changeFormCity,
  changeFormGender,
  changeFile,
  changeFileText,
  changeFormAccept,
  changeFormList,
} = FormSlice.actions;
