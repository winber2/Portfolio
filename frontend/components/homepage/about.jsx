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
            <p>I'm a software engineer based in San Francisco focused on giving the best user experience possible. Building web applications is my passion, and I'm excited to be where I am today. But, I think a sense of self-placency in this growing field of technology means you don't love development as much as you say. Web development is "development" for a reason, it's constantly being built and constantly being improved on.</p>
            <br />
            <p>Technology is awesome, and I want to explore what it can do. Why don't you check out some of my projects.</p>
          </aside>
          <ul className="skills">
            <h2>skills</h2>
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
        </section>
      </div>
    );
  }
}

export default About;
