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
      text: ''
    };
  }

  handleSubmit() {
    $.ajax({
      method: 'POST',
      url: 'api/mailers',
      data: { mail: this.state }
    })
  }

  update(item) {
    return e => this.setState({ [item]: e.currentTarget.value })
  }

  render() {
    return(
      <div className="contact">
        <h1>contact</h1>
        <section className="input-field">
          <input onChange={this.update('name')} type="text" placeholder="name"/>
          <input onChange={this.update('email')} type="text" placeholder="e-mail"/>
          <input onChange={this.update('subject')} type="text" placeholder="subject"/>
          <textarea onChange={this.update('text')} type="text" placeholder="text"/>
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
