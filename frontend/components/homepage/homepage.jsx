import React from 'react';
import Title from './title';
import About from './about';
import Projects from './projects';
import Contact from './contact';
require('smoothscroll-polyfill').polyfill();

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isActive: '' };
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.handleClick = this.handleClick.bind(this);
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

  handleClick(item) {
    if (item === 'about') {
      window.scrollTo({
        top: 600,
        left: 0,
        behavior: 'smooth'
      });
    } else if (item === 'projects') {
      window.scrollTo({
        top: 1200,
        left: 0,
        behavior: 'smooth'
      });
    } else if (item === 'contact') {
      window.scrollTo({
        top: 2800,
        left: 0,
        behavior: 'smooth'
      });
    } else {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }

  render() {
    return(
      <div className="homepage">
        <header>
          <nav>
            <span onClick={() => this.handleClick('portfolio')}>portfolio</span>
            <div className="dropdown">
              <div onClick={this.toggleDropdown} className={`burger ${this.state.isActive}`}></div>
              <ul>
                <li onClick={() => this.handleClick('about')} className={`nav-about ${this.state.isActive}`}>about</li>
                <li onClick={() => this.handleClick('projects')} className={`nav-projects ${this.state.isActive}`}>projects</li>
                <li onClick={() => this.handleClick('contact')} className={`nav-contact ${this.state.isActive}`}>contact</li>
              </ul>
            </div>
          </nav>
        </header>

        <main>
          <Title />
          <div className="about-background">
            <About />
          </div>
          <Projects />
          <Contact />
        </main>
      </div>
    )
  }
}

export default Homepage;
