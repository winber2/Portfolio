import React from 'react';
import Typist from 'react-typist';

const cursor = {
  show: true,
  blink: true,
  element: '|',
  hideWhenDone: true,
  hideWhenDoneDelay: 4000,
}

const charIndices = {
  'Welcome': { 6: true },
  'Component': { 8: true },
  '  constructor': { 12: true },
  '  render': { 1: true },
  '    return': { 9: true }
}

class Title extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelay = this.handleDelay.bind(this);
  }

  componentDidMount() {
    setTimeout( () => {
      $('div.main-content h2').addClass('active');
    }, 1500)
  }

  handleDelay(mean, std, { line, lineIdx, character, charIdx, defDelayGenerator }) {
    if (charIndices[line] && charIndices[line][charIdx]) {
      return 250;
    } else {
      return 45;
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
              stdTypingDelay={30}
              delayGenerator={this.handleDelay}>
              <strong className="purple">class</strong> <strong className="yellow">Welcome</strong> <strong className="purple">extends</strong> <strong className="green">React</strong>.<strong className="red">Component</strong> {`{`}<br />
                <strong className="blue">  constructor</strong>(props) {`{`}<br />
                  <strong className="blue">    super</strong>(props);<br />
                {`  }`}<br /><br />

                <strong className="blue">  render</strong>{`() {`}<br />
                  <strong className="purple">    return</strong>(<br />
                    {`      <`}<strong className="red">Winber</strong> <strong className="yellow">props</strong>={`{SoftwareEngineer}`} {`/>`}<br />
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
