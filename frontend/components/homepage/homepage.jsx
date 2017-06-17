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
            <div className="parallax__layer" id="base">
            </div>
          </div>
          <div className="parralax__group" id="group-2">
            <div className="parallax__layer" id="index">
              <h1>Winber Xu</h1>
              <h1>Software Engineer</h1>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Homepage;
