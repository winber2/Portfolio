import React from 'react';
import Gadgets from './gadgets';


class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: '' };
    this.toggleModal = this.toggleModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    document.onkeydown = (e) => {
      if (e.keyCode === 27) {
        this.closeModal();
      }
    };
  }

  toggleModal() {
    if (this.state.isOpen === '') {
      this.setState({ isOpen: 'open' });
      $('body').toggleClass('open');
    } else {
      this.setState({ isOpen: '' });
      setTimeout(() => $('body').toggleClass('open'), 500);
    }
  }

  closeModal() {
    this.setState({ isOpen: '' });
    setTimeout(() => $('body').removeClass('open'), 500);
  }

  render() {
    return(
      <div className="projects">
        <Gadgets closeModal={this.closeModal} open={this.state.isOpen} />
        <h1>projects</h1>
        <ul className="projects">
          <li className="vibe">
            <article className="vibe">
              <div className="vibe-image">
                <a href='http://www.vibemusic.life' />
              </div>
            </article>
            <section className="project-description">
              <h1>Vibe Music</h1>
              <h6>• Built with Ruby on Rails, React-Redux, and PostgreSQL</h6>
              <h6>• Implemented with RESTful APIs and customized API endpoints</h6>
              <h2>Music-sharing web application built from scratch, inspired by Soundcloud</h2>
            </section>
          </li>
          <div className="border" />
          <li className="algomapper">
            <article className="algomapper">
              <div className="algomapper-image">
                <a href='http://www.algomapper.life' />
              </div>
            </article>
            <section className="project-description">
              <h1>AlgoMapper</h1>
              <h6>• Built with Python/Django, React-Redux, and D3.js</h6>
              <h6>• Customized visualizations and runtime comparisons using D3.js</h6>
              <h2>Shortest-path algorithm visualizer that compares four well-known algorithms</h2>
            </section>
          </li>
          <div className="border" />
          <li className="valkyrie">
            <article className="valkyrie">
              <div className="valkyrie-image">
                <a href='http://winber2.github.io' />
              </div>
            </article>
            <section className="project-description">
              <h1>Valkyrie</h1>
              <h6>• Pure JavaScript game utilizing EaselJS and jQuery</h6>
              <h6>• Refined algortihms to render hundreds of objects smoothly</h6>
              <h2>Classic arcade-style bullet hell game built with Object-Oriented vanilla JavaScript</h2>
            </section>
          </li>
          <div className="border" />
          <li className="streamplay">
            <article className="streamplay">
              <div className="streamplay-image">
                <a href='https://streamplay-app.herokuapp.com' />
              </div>
            </article>
            <section className="project-description">
              <h1>Streamplay</h1>
              <h6>• Utilized Websockets and Google OAuth2 to stream messages</h6>
              <h6>• Hit Youtube API to search and display live broadcasts</h6>
              <h2>Small-scale chatting application that lets users discuss live broadcasting streams</h2>
            </section>
          </li>
          <div className="border" />
          <li className="gadgets">
            <article onClick={this.toggleModal} className="gadgets">
              <div className="gadgets-image" />
            </article>
            <section className="project-description">
              <h1>Personal Gadgets</h1>
              <h6>• Utilizes different data strucures, algoritms, and libraries</h6>
              <h6>• Come check them out!</h6>
              <h2>Some nifty little creations I've made in my free time</h2>
            </section>
          </li>
        </ul>
      </div>
    );
  }
}

export default Projects;
