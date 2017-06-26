import React from 'react';

class Contact extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="contact">
        <div className="triangle" />
        <section className="input-field">
          <input type="text" />
          <input type="text" />
          <input type="text" />
        </section>
      </div>
    );
  }
}

export default Contact;
