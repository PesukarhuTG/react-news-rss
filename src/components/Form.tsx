import React from 'react';
import FormProps from '../types/Form';

interface LoginFormProps {
  onSubmit: (data: FormProps) => void;
}

interface FormFields {
  name: HTMLInputElement;
  birthday: HTMLInputElement;
  city: HTMLInputElement;
  gender: HTMLInputElement;
  file: HTMLInputElement;
  remember: HTMLInputElement;
}

interface State {
  disabled: boolean;
  selectedFile: any;
}

class LoginForm extends React.Component<LoginFormProps, State> {
  constructor(props: LoginFormProps) {
    super(props);
    this.state = {
      disabled: true,
      selectedFile: null,
    };
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null) {
      this.setState({ selectedFile: e.target.files[0] });
    }
  };

  handleSubmit: React.FormEventHandler<HTMLFormElement & FormFields> = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const { name, birthday, city, gender, file, remember } = form;

    const blob = new Blob([this.state.selectedFile]);
    const url = URL.createObjectURL(blob);

    this.props.onSubmit({
      name: name.value,
      birthday: birthday.value,
      city: city.value,
      gender: gender.value,
      file: url,
      remember: remember.checked,
    });

    this.clearForm([name, birthday, city, gender, file, remember]);
  };

  clearForm = (prop: Array<HTMLInputElement>) => {
    prop.forEach((item) => {
      if (item.type === 'checkbox') {
        item.checked = false;
      } else {
        item.value = '';
      }
    });

    this.setState({ disabled: true });
    this.setState({ selectedFile: null });
  };

  setDisabled = (value: string) => {
    value.length !== 0 ? this.setState({ disabled: false }) : this.setState({ disabled: true });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} data-testid="form">
        <div className="form-wrapper">
          <label className="input-wrapper">
            <span className="input-name">Name</span>
            <input
              className="input-field"
              name="name"
              type="text"
              data-testid="input-fname"
              onChange={(e) => this.setDisabled(e.target.value)}
              required
            />
          </label>
          <label className="input-wrapper">
            <span className="input-name">Birthday</span>
            <input
              className="input-field"
              name="birthday"
              type="date"
              data-testid="input-fdata"
              onChange={(e) => this.setDisabled(e.target.value)}
              required
            />
          </label>
        </div>

        <div className="form-wrapper">
          <label className="input-wrapper">
            <span className="input-name">Choose a city</span>
            <select
              className="input-city"
              name="city"
              data-testid="input-fcity"
              onChange={(e) => this.setDisabled(e.target.value)}
              required
            >
              <option value="" />
              <option value="Saint-Petersburg">Saint-Petersburg</option>
              <option value="Moscow">Moscow</option>
              <option value="Voronezh">Voronezh</option>
              <option value="Petrozavodsk">Petrozavodsk</option>
              <option value="other city">...other city</option>
            </select>
          </label>
          <label className="input-wrapper">
            <span className="input-name">Gender</span>
            <div className="genders-wrapper">
              <input
                type="radio"
                id="man"
                name="gender"
                value="man"
                data-testid="input-fgender-man"
                defaultChecked
              />
              <label className="gender-name" htmlFor="man">
                man
              </label>

              <input
                type="radio"
                id="woman"
                name="gender"
                value="woman"
                data-testid="input-fgender-woman"
              />
              <label className="gender-name" htmlFor="woman">
                woman
              </label>
            </div>
          </label>
        </div>

        <label className="input-wrapper">
          <span className="input-name">Upload a file</span>
          <input
            className="input-file"
            name="file"
            type="file"
            accept="image/*, .png, .jpg"
            data-testid="input-file"
            onChange={this.handleChange}
          />
        </label>

        <label className="input-wrapper-gorizont">
          <input name="remember" type="checkbox" data-testid="input-faccept" />
          <span className="remember-name">I consent to use my personal data</span>
        </label>

        <button
          className="btn-submit"
          type="submit"
          disabled={this.state.disabled}
          data-testid="btn-submit"
        >
          Send my data
        </button>
      </form>
    );
  }
}

export default LoginForm;
