import React from 'react';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.state = {
      name: '',
      email: '',
      subject: '',
      text: '',
      errors: ''
    };
  }

  handleSubmit() {
    if (this.state.name === '' || this.state.email === '' || this.state.subject === '' || this.state.text === '') {
      this.setState({ errors: 'Please fill out the form!'});
      return;
    } else if (!(/^.+@.+\..+/.exec(this.state.email))) {
      this.setState({ errors: 'Please enter a valid e-mail address'})
      return;
    }
    this.setState({
      name: '',
      email: '',
      subject: '',
      text: '',
      errors: ''
    });
    $.ajax({
      method: 'POST',
      url: 'api/mailers',
      data: { mail: this.state }
    });
  }

  update(item) {
    return e => this.setState({ [item]: e.currentTarget.value })
  }

  render() {
    return(
      <div className="contact">
        <h1>contact</h1>
        <section className="input-field">
          <input onChange={this.update('name')} type="text" value={this.state.name} placeholder="name"/>
          <input onChange={this.update('email')} type="text" value={this.state.email} placeholder="e-mail"/>
          <input onChange={this.update('subject')} type="text" value={this.state.subject} placeholder="subject"/>
          <textarea onChange={this.update('text')} type="text" value={this.state.text} placeholder="text"/>
          <span>{this.state.errors}</span>
          <button onClick={this.handleSubmit}>
            <p>submit</p>
            <div className="button-fill" />
          </button>
        </section>
        <ul className="contacts">
          <figure className="linkedin" />
          <figure className="github" />
        </ul>
      </div>
    );
  }
}

export default Contact;
