import React from 'react';
import ReactDOM from 'react-dom/client';

class NewsletterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Email'
    };
    this.handlechange = this.handlechange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handlechange(e) {
    this.setState({
      value: e.target.value
    });
  }

  handleSubmit(e) {
    console.log('Email: ' + this.state.value);
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Email:
          <input name='email' type='text' value={this.state.value} onChange={this.handlechange}/>
        </label>
        <input type='submit' value='submit' />
      </form>
    );
  }
}

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<NewsletterForm />);
