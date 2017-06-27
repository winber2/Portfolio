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
      errors: '',
      active: '',
      transition: '',
      sent: false
    };
  }

  handleSubmit() {
    if (this.state.sent) return;
    if (this.state.name === '' || this.state.email === '' || this.state.subject === '' || this.state.text === '') {
      this.setState({
        transition: 'transitioning',
        active: 'active'
      });
      setTimeout( () => this.setState({
        errors: 'Please fill out the form!',
        transition: ''
      }), 400);
      return;
    } else if (!(/^.+@.+\..+/.exec(this.state.email))) {
      this.setState({
        transition: 'transitioning',
        active: 'active'
      });
      setTimeout( () => this.setState({
        errors: 'Please enter a valid e-mail address',
        transition: ''
      }), 400);
      return;
    }

    this.setState({
      name: '',
      email: '',
      subject: '',
      text: '',
      active: 'active',
      transition: 'transitioning'
    });

    setTimeout( () => {
      this.setState({ errors: 'Message Sent!', transition: '' });
    }, 400);

    this.refs.submit.classList.add('submitted');
    this.refs.submit.setAttribute('disabled', true);
    this.setState({ sent: true })

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
          <button ref='submit' onClick={this.handleSubmit}>
            <p>submit</p>
            <div className="button-fill" />
          </button>
          <span className={`${this.state.active} ${this.state.transition}`}>{this.state.errors || ' '}</span>
        </section>
        <ul className={`contacts ${this.state.active}`}>
          <figure className="linkedin">
            <a href="https://www.linkedin.com/in/winber/" />
          </figure>
          <figure className="github">
            <a href="https://github.com/winber2" />
          </figure>
        </ul>
      </div>
    );
  }
}

export default Contact;
