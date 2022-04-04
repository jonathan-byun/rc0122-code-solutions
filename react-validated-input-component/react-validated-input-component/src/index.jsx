import React from 'react';
import ReactDOM from 'react-dom/client';

class Password extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  render() {
    let iconClass = 'fa-solid fa-x fa-xl red';
    let errorText = 'Your password is too short';
    if (this.state.value.length < 1) {
      errorText = 'A password is required';
    }
    if (this.state.value.length > 7) {
      errorText = '';
      iconClass = 'fa-solid fa-check fa-xl green';
    }
    return (
      <div>
        Password
        <div className='row'>
          <form>
            <label>
              <input type='text' name='password' value={this.state.value} onChange={this.handleChange} />
            </label>
          </form>
          <i className={iconClass}></i>
        </div>
        <div>
          <p className='red'>
            {errorText}
          </p>
        </div>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<Password />);
