import React from 'react';
import Typist from 'react-typist';

const cursor = {
  show: true,
  blink: true,
  element: '|',
  hideWhenDone: true,
  hideWhenDoneDelay: 4000,
}

class Title extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelay = this.handleDelay.bind(this);
  }

  handleDelay(mean, std, { line, lineIdx, character, charIdx, defDelayGenerator }) {
    if (character === '!' || character === '.') {
      return 500;
    } else {
      return 70
    }
  }

  render() {
    return(
      <div className="main-content">
        <h1>Winber Xu</h1>
        <h2>portfolio</h2>
        <div className="information">
          <div className="title">
            <Typist
              className='typist-header'
              cursor={cursor}
              startDelay={2000}
              delayGenerator={this.handleDelay}>
              <strong className="purple">class</strong> <strong className="yellow">Welcome</strong> <strong className="purple">extends</strong> <strong className="green">React</strong>.<strong className="red">Component</strong> {`{`}<br />
                <strong className="blue">  constructor</strong>(props) {`{`}<br />
                  <strong className="blue">    super</strong>(props);<br />
                {`  }`}<br /><br />

                <strong className="blue">  render</strong>{`() {`}<br />
                  <strong className="purple">    return</strong>(<br />
                    {`      <`}<strong className="red">Winber</strong> <strong className="yellow">props</strong>={`{SoftwareEngineering}`} {`/>`}<br />
                  {`    );`}<br />
                {`  }`}<br />
              {`}`}
            </Typist>
          </div>
          <div className="about-me">
            <h1></h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Title;
