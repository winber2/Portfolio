import React from 'react';

class Contact extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="contact">
        <div className="triangle" />
        <h1>contact</h1>
        <section className="input-field">
          <input type="text" placeholder="Name"/>
          <input type="text" placeholder="E-mail"/>
          <input type="text" placeholder="Subject"/>
          <textarea type="text" placeholder="Text"/>
          <button>Submit</button>
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
