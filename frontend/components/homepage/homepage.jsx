import React from 'react';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isActive: '' };
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
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
            <div className="image"></div>
            <div className="title">
              <h1 className="header">Winber Xu</h1>
            </div>
          </div>
          <div className="about">
            <p>Building software for me is about the user experience, the eye-candy and fluid browsing. I just want people to experience technology in a new light, and what better way is there than through a global medium. Technology is going into pretty cool places.</p>

          
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
