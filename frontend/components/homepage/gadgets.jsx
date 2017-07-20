import React from 'react';

class Gadgets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gadgetPlayground: <span className='gadget-select'>Please select a gadget from the list!</span>,
    };
  }

  render() {
    return(
      <div className={`gadgets-modal ${this.props.open}`}>
        <div className={`gadgets-modal__background ${this.props.open}`} />
        <main className={`gadget-playground-wrapper ${this.props.open}`}>
          <div className='gadget-playground'>
            {this.state.gadgetPlayground}
          </div>
        </main>
        <ul className={`gadgets-list ${this.props.open}`}>
          <li>
            <h2>Gadget List</h2>
            <div onClick={this.props.closeModal} className='arrow-back' />
          </li>
          <li>Slide Effect</li>
          <li>Form Builder</li>
        </ul>
      </div>
    )
  }
}

export default Gadgets;
