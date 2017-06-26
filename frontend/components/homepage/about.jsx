import React from 'react';

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="about">
        <h1>about</h1>
        <section className="about-and-skills">
          <aside className="about">
            <h2>me</h2>
            <p>I'm a software engineer based in San Francisco focused on giving the best user experience possible. Coming from a background of research, I'm awed by the expressiveness of a website, and I want to connect with people as they have done with me. Building web applications is my passion, and I'm excited to be where I am today.</p>
            <br />
            <p>But, I think a sense of complacency in this growing field of technology means you don't love development as much as you say. Web development is "development" for a reason, right? It's constantly being built and constantly being improved on, and that's what I love about it.</p>
            <br />
            <p>Technology is awesome, and I want to explore what it can do. Check out some of the applications I've built!</p>
          </aside>
          <ul className="skills">
            <h2>skills</h2>
            <ul className="skills-list">
              <li>
                <span>JavaScript</span>
                <div className='bar-line'>
                  <div className='javascript' />
                </div>
              </li>
              <li>
                <span>React-Redux</span>
                <div className='bar-line'>
                  <div className='react-redux' />
                </div>
              </li>
              <li>
                <span>Ruby/Rails</span>
                <div className='bar-line'>
                  <div className='ruby-rails' />
                </div>
              </li>
              <li>
                <span>HTML5</span>
                <div className='bar-line'>
                  <div className='html' />
                </div>
              </li>
              <li>
                <span>CSS3</span>
                <div className='bar-line'>
                  <div className='css' />
                </div>
              </li>
            </ul>
          </ul>
        </section>
      </div>
    );
  }
}

export default About;
