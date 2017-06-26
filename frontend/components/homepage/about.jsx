import React from 'react';

class About from React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="about">
        <h1>about</h1>
        <section className="about-and-skills">
          <aside className="about">
            <p>I'm a software engineer based in San Francisco focused on giving the best user experience possible, and I'm looking for some cool projects to work on. Let's tackle some challenges together.</p>

            <p>Technology is awesome, and I want to explore what it can do. Why don't you check out some of my projects.</p>
          </aside>
          <ul className="skills">
            <li>HTML</li>
            <li>HTML</li>
            <li>HTML</li>
            <li>HTML</li>
            <li>HTML</li>
          </ul>
        </section>
      </div>
    );
  }
}
