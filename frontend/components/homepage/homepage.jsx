import React from 'react';

class Homepage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className="homepage">
        <header>
          <nav>
            <li className="nav-about">about</li>
            <li className="nav-projects">projects</li>
            <li className="nav-home">contact</li>
          </nav>
        </header>

        <main>
          <div className="main-content">
            <div className="image"></div>
            <div className="heahder"></div>
          </div>
        </main>
      </div>
    )
  }
}

export default Homepage;
