import React from 'react';

class Homepage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className="homepage">
        <div className="parallax">
          <div className="parralax__group" id="group-1">
            <div className="parallax__layer" id="base-1"></div>
            <div className="parallax__layer" id="base-2"></div>
          </div>
          <div className="parralax__group" id="group-2">
            <div className="parallax__layer" id="name">
              <h1>Winber Xu</h1>
              <h1>Software Engineer</h1>
            </div>
            <div className="parallax__layer" id="index">
              <div className="arrow-box">
                <div className="arrow"></div>
              </div>
                <div className="white-triangle-top"></div>
                <div className="white-triangle-bottom"></div>
                <div className="blue-triangle-top"></div>
                <div className="blue-triangle-bottom"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Homepage;
