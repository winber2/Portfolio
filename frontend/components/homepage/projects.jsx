import React from 'react';

class Projects extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="projects">
        <h1>projects</h1>
        <ul className="projects">
          <li className="vibe">
            <article className="vibe"></article>
            <section className="project-description">
              <h1>Vibe Music</h1>
              <h6>• Built with Ruby on Rails, React-Redux, and PostgreSQL</h6>
              <h6>• Implemented with RESTful APIs and customized API endpoints</h6>
              <h2>Music-sharing web application built from scratch, inspired by Soundcloud</h2>
            </section>
          </li>
          <div className="border" />
          <li className="algomapper">
            <article className="algomapper"></article>
            <section className="project-description">
              <h1>AlgoMapper</h1>
              <h6>• Built with Python/Django, React-Redux, and D3.js</h6>
              <h6>• Customized visualizations and runtime comparisons using D3.js</h6>
              <h2>Shortest-path algorithm visualizer that compares four well-known algorithms</h2>
            </section>
          </li>
          <div className="border" />
          <li className="valkyrie">
            <article className="valkyrie"></article>
            <section className="project-description">
              <h1>Valkyrie</h1>
              <h6>• Pure JavaScript game utilizing EaselJS and jQuery</h6>
              <h6>• Refined algortihms to render hundreds of objects smoothly</h6>
              <h2>Classic arcade-style bullet hell game built with Object-Oriented vanilla JavaScript</h2>
            </section>
          </li>
        </ul>
      </div>
    );
  }
}

export default Projects;
