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
              <h6>- Built with Ruby on Rails, React-Redux, and PostgreSQL.</h6>
              <h6>- Built with Ruby on Rails, React-Redux, and PostgreSQL.</h6>
              <h2>Music-sharing web application built from scratch, inspired by Soundcloud</h2>
            </section>
          </li>
          <div className="border" />
          <li className="algomapper">
            <article className="algomapper"></article>
            <section className="project-description">
              helhoeaohleoh lao hlela lahoel le aohla olaog kadhalk hjdal;kjv safhlkajjghalkfh  heu hfdf half hsk jybt htgatsfaljk hfuwhfw flkaowhvjzlxkjhvwifj alkn
            </section>
          </li>
          <div className="border" />
          <li className="valkyrie">
            <article className="valkyrie"></article>
            <section className="project-description">
              helhoeaohleoh lao hlela lahoel le aohla olaog kadhalk hjdal;kjv safhlkajjghalkfh  heu hfdf half hsk jybt htgatsfaljk hfuwhfw flkaowhvjzlxkjhvwifj alkn
            </section>
          </li>
        </ul>
      </div>
    );
  }
}

export default Projects;
