import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import FormProps from '../types/Form';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeFormName,
  changeFormDate,
  changeFormCity,
  changeFormGender,
  changeFile,
  changeFormAccept,
  changeFileText,
} from 'store/FormSlice';
import { AppDispatch, RootState } from 'store/Store';

interface LoginFormProps {
  onSubmit: (data: FormProps) => void;
}

const Form: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const [disabled, setDisabled] = useState<boolean>(true);
  const { formName, formDate, formCity, formGender, formAccept, selectedFile, fileText } =
    useSelector((state: RootState) => state.forms);
  const dispatch = useDispatch<AppDispatch>();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormProps>({
    defaultValues: {
      selectedFile: selectedFile,
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null) {
      const imgURL = URL.createObjectURL(e.target.files[0]);
      const imgName = e.target.files[0].name;
      dispatch(changeFileText(imgName));
      dispatch(changeFile(imgURL));
    }
  };

  const getDataSubmit: SubmitHandler<FormProps> = (data) => {
    onSubmit({ ...data, selectedFile });

    reset();
    dispatch(changeFormName(''));
    dispatch(changeFormDate(''));
    dispatch(changeFormCity(''));
    dispatch(changeFormGender('man'));
    dispatch(changeFile(null));
    dispatch(changeFileText('No file selected'));
    dispatch(changeFormAccept(false));
  };

  useEffect(() => {
    if (formName !== '' || formDate !== '' || formCity !== '') {
      setDisabled(false);
    }
  }, [formName, formDate, formCity]);

  return (
    <form onSubmit={handleSubmit(getDataSubmit)} data-testid="form">
      <FormWrapper>
        <label className="input-wrapper">
          <span className="input-name">Name</span>
          <input
            className="input-field"
            {...register('name', {
              required: 'Name is required',
              minLength: { value: 2, message: 'Name should be more 2 letters' },
            })}
            name="name"
            type="text"
            data-testid="input-fname"
            value={formName}
            onChange={(e) => dispatch(changeFormName(e.target.value))}
          />
          {errors.name && <ErrMessage>{errors.name.message}</ErrMessage>}
        </label>
        <label className="input-wrapper">
          <span className="input-name">Birthday</span>
          <input
            className="input-field"
            {...register('birthday', { required: 'Birthday is required' })}
            name="birthday"
            type="date"
            data-testid="input-fdate"
            value={formDate}
            onChange={(e) => dispatch(changeFormDate(e.target.value))}
          />
          {errors.birthday && <ErrMessage>{errors.birthday.message}</ErrMessage>}
        </label>
      </FormWrapper>

      <FormWrapper>
        <label className="input-wrapper">
          <span className="input-name">Choose a city</span>
          <select
            className="input-city"
            {...register('city', { required: 'City is required' })}
            name="city"
            data-testid="input-fcity"
            value={formCity}
            onChange={(e) => dispatch(changeFormCity(e.target.value))}
          >
            <option value="" />
            <option value="Saint-Petersburg">Saint-Petersburg</option>
            <option value="Moscow">Moscow</option>
            <option value="Voronezh">Voronezh</option>
            <option value="Petrozavodsk">Petrozavodsk</option>
            <option value="other city">...other city</option>
          </select>
          {errors.city && <ErrMessage>{errors.city.message}</ErrMessage>}
        </label>
        <label className="input-wrapper">
          <span className="input-name">Gender</span>
          <div className="genders-wrapper">
            <input
              type="radio"
              id="man"
              {...register('gender')}
              name="gender"
              value="man"
              data-testid="input-fgender-man"
              defaultChecked={formGender === 'man' ? true : false}
              onChange={(e) => dispatch(changeFormGender(e.target.value))}
            />
            <label className="gender-name" htmlFor="man">
              man
            </label>

            <input
              type="radio"
              id="woman"
              {...register('gender')}
              name="gender"
              value="woman"
              data-testid="input-fgender-woman"
              defaultChecked={formGender === 'woman' ? true : false}
              onChange={(e) => dispatch(changeFormGender(e.target.value))}
            />
            <label className="gender-name" htmlFor="woman">
              woman
            </label>
          </div>
        </label>
      </FormWrapper>

      <FormWrapperSingle>
        <input
          id="fileElem"
          className="input-file"
          style={{ display: 'none' }}
          {...register('selectedFile')}
          name="file"
          type="file"
          accept="image/*, .png, .jpg"
          data-testid="input-file"
          onChange={handleChange}
        />
        <LabelFile htmlFor="fileElem">Choose a file</LabelFile>
        <FileText>{fileText}</FileText>
      </FormWrapperSingle>

      <FormWrapperSingle>
        <input
          type="checkbox"
          {...register('remember')}
          name="remember"
          data-testid="input-faccept"
          defaultChecked={formAccept}
          onChange={(e) => dispatch(changeFormAccept(e.target.checked))}
        />
        <span className="remember-name">I consent to use my personal data</span>
      </FormWrapperSingle>

      <button
        className="btn-submit"
        type="submit"
        disabled={disabled}
        data-testid="btn-submit"
        value="btnSubmit"
      >
        Save my data
      </button>
    </form>
  );
};

const ErrMessage = styled.p`
  padding-top: 7px;
  font-size: 9px;
  color: var(--accent);
`;

const LabelFile = styled.label`
  font-size: 14px;
  padding: 10px;
  border-radius: 5px;
  background-color: var(--primary);
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: var(--button-hover);
  }
`;

const FileText = styled.p`
  min-width: 115px;
  font-size: 14px;
`;

const FormWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  gap: 30px;
`;

const FormWrapperSingle = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
  gap: 10px;
`;

export default Form;
