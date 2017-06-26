import React from 'react';

class Contact extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="contact">
        <h1>contact</h1>
        <section className="input-field">
          <input type="text" placeholder="name"/>
          <input type="text" placeholder="e-mail"/>
          <input type="text" placeholder="subject"/>
          <textarea type="text" placeholder="text"/>
          <button>
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
