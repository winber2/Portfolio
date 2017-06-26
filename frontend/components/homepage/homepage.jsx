import React from 'react';
import Typist from 'react-typist';
import Highlight from 'react-highlight';

const cursor = {
  show: true,
  blink: true,
  element: '|',
  hideWhenDone: true,
  hideWhenDoneDelay: 4000,
}

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isActive: '' };
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.handleDelay = this.handleDelay.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  openDropdown() {
    this.setState({ isActive: 'active' });
  }

  closeDropdown() {
    this.setState({ isActive: '' });
  }

  toggleDropdown() {
    if (this.state.isScrolled) return;
    if (this.state.isActive) {
      this.setState({ isActive: '' });
    } else {
      this.setState({ isActive: 'active' });
    }
  }

  handleScroll(e) {
    let distance = e.path[1].scrollY;
    if (distance !== 0) {
      this.openDropdown();
      this.state.isScrolled = true;
    } else {
      this.closeDropdown();
      this.state.isScrolled = false;
    }
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
      <div className="homepage">
        <header>
          <nav>
            <div onClick={this.toggleDropdown} className={`burger ${this.state.isActive}`}></div>
            <ul>
              <li className={`nav-about ${this.state.isActive}`}>about</li>
              <li className={`nav-projects ${this.state.isActive}`}>projects</li>
              <li className={`nav-contact ${this.state.isActive}`}>contact</li>
            </ul>
          </nav>
        </header>

        <main>
          <div className="main-content">
            <div className="information">
              <div className="title">
                <Typist
                  className='typist-header'
                  cursor={cursor}
                  startDelay={2000}
                  delayGenerator={this.handleDelay}>
                  {`class Hey extends React.component {`}<br />
                     {`  constructor(props) {`}<br />
                       {`    super(props);`}<br />
                     {`  }`}<br /><br />

                     {`  render() {`}<br />
                       {`    return (`}<br />
                         {`      Software Engineer`}<br />
                       {`    );`}<br />
                     {`  }`}<br />
                  {`}`}
                </Typist>
              </div>
              <div className="about-me">
                <div className="about-box">

                </div>
              </div>
            </div>
          </div>
          <div className="about">
            <h1>about</h1>
            <p>I'm a software engineer based in San Francisco focused on giving the best user experience possible, and I'm looking for some cool projects to work on. Let's tackle some challenges together.</p>

            <p>Technology is awesome, and I want to explore what it can do. Why don't you check out some of my projects.</p>
          </div>
          <div className="border" />
          <div className="projects">
            <article className="project"></article>
          </div>
        </main>
      </div>
    )
  }
}

export default Homepage;
