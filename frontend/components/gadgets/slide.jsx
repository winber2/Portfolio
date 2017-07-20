import React from 'react';

class Slide extends React.Component {
  constructor(props) {
    super(props);
  }

  prepareSin() {
    let currX;
    let enter = false;
    let li = Array.from(document.querySelectorAll('li.sin'));
    let [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10] = li;
    let index = document.getElementById('sin-image-wrapper');
    index.addEventListener('mousemove', function(e) {
      if (!enter) {
        enter = true;
        for (let i = 0; i < li.length; i++) {
          li[i].style.transition = 'all 0.2s';
          setTimeout(function() {
            for (let i = 0; i < li.length; i++) {
              li[i].style.transition = '';
            }
          }, 200);
        }

      }
      let width = e.currentTarget.clientWidth;
      let offsetLeft = e.currentTarget.offsetLeft;
      let screenX = e.x;
      let x = screenX - offsetLeft;

      p1.style.left = `${-gaussian(x, 0, 0.5)}%`;
      p2.style.left = `${10 - gaussian(x, 40, 0.55)}%`;
      p3.style.left = `${20 - gaussian(x, 80, 0.6)}%`;
      p4.style.left = `${30 - gaussian(x, 120, 0.65)}%`;
      p5.style.left = `${40 - gaussian(x, 160, 0.7)}%`;
      p6.style.left = `${50 - gaussian(x, 200, 0.75)}%`;
      p7.style.left = `${60 - gaussian(x, 240, 0.8)}%`;
      p8.style.left = `${70 - gaussian(x, 280, 0.85)}%`;
      p9.style.left = `${80 - gaussian(x, 320, 0.9)}%`;
      p10.style.left = `${90 - gaussian(x, 360, 1)}%`;
    })

    index.addEventListener('mouseleave', function(e) {
      enter = false;
      for (let i = 0; i < li.length; i++) {
        li[i].style.transition = 'all 0.3s';
      }
      p1.style.left = `${0}%`;
      p2.style.left = `${10}%`;
      p3.style.left = `${20}%`;
      p4.style.left = `${30}%`;
      p5.style.left = `${40}%`;
      p6.style.left = `${50}%`;
      p7.style.left = `${60}%`;
      p8.style.left = `${70}%`;
      p9.style.left = `${80}%`;
      p10.style.left = `${90}%`;
      setTimeout(function() {
        for (let i = 0; i < li.length; i++) {
          li[i].style.transition = '';
        }
      }, 300);
    })

    function gaussian(x, b, w) {
      if (Math.abs(x - b) < 45) {
        return 15 * w * Math.sin((x - b) / 45 * Math.PI / 2);
      } else {
        return 15 * w * Math.cbrt((x - b) / 45);
      }
    }
  }

  prepareFlex() {
    let enter = false;
    let li = Array.from(document.querySelectorAll('li.flexbox'));
    let [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10] = li;
    let index = document.getElementById('flexbox-image-wrapper');
    index.addEventListener('mousemove', function(e) {
      if (!enter) {
        enter = true;
        for (let i = 0; i < li.length; i++) {
          li[i].style.transition = 'all 0.2s';
          setTimeout(function() {
            for (let i = 0; i < li.length; i++) {
              li[i].style.transition = '';
            }
          }, 200);
        }
      }
      let width = e.currentTarget.clientWidth;
      let offsetLeft = e.currentTarget.offsetLeft;
      let screenX = e.x;
      let x = screenX - offsetLeft;

      p1.style.flex = `${gaussian(x, 20)}`;
      p2.style.flex = `${gaussian(x, 60)}`;
      p3.style.flex = `${gaussian(x, 100)}`;
      p4.style.flex = `${gaussian(x, 140)}`;
      p5.style.flex = `${gaussian(x, 180)}`;
      p6.style.flex = `${gaussian(x, 220)}`;
      p7.style.flex = `${gaussian(x, 260)}`;
      p8.style.flex = `${gaussian(x, 300)}`;
      p9.style.flex = `${gaussian(x, 340)}`;
      p10.style.flex = `${gaussian(x, 380)}`;
    })

    index.addEventListener('mouseleave', function(e) {
      enter = false;
      for (let i = 0; i < li.length; i++) {
        li[i].style.transition = 'all 0.3s';
      }
      p1.style.flex = `1`;
      p2.style.flex = `1`;
      p3.style.flex = `1`;
      p4.style.flex = `1`;
      p5.style.flex = `1`;
      p6.style.flex = `1`;
      p7.style.flex = `1`;
      p8.style.flex = `1`;
      p9.style.flex = `1`;
      p10.style.flex = `1`;
      setTimeout(function() {
        for (let i = 0; i < li.length; i++) {
          li[i].style.transition = '';
        }
      }, 300);
    });

    function gaussian(x, b) {
      return 0.5 + 5 * Math.pow(3, - Math.pow(x - b, 2) / 4500);
    }
  }

  componentDidMount() {
    this.prepareSin();
    this.prepareFlex();
  }

  render() {
    return(
      <main className='slide'>
        <div className='flexbox'>
          <ul id='flexbox-image-wrapper'>
            <li className='flexbox'><img src='assets/slide/2B.jpg'></img></li>
            <li className='flexbox'><img src='assets/slide/A2.jpg'></img></li>
            <li className='flexbox'><img src='assets/slide/nier 2b stance.jpg'></img></li>
            <li className='flexbox'><img src='assets/slide/nier epic.jpg'></img></li>
            <li className='flexbox'><img src='assets/slide/nier.jpg'></img></li>
            <li className='flexbox'><img src='assets/slide/A2 epic.jpg'></img></li>
            <li className='flexbox'><img src='assets/slide/2b pic.jpg'></img></li>
            <li className='flexbox'><img src='assets/slide/2b stand.jpg'></img></li>
            <li className='flexbox'><img src='assets/slide/2b sad.jpg'></img></li>
            <li className='flexbox'><img src='assets/slide/2b 9s.jpg'></img></li>
          </ul>
        </div>
        <div className='sin'>
          <ul id='sin-image-wrapper'>
            <li className='sin' id='p1'><img src='assets/slide/A2.jpg'></img></li>
            <li className='sin' id='p2'><img src='assets/slide/2B.jpg'></img></li>
            <li className='sin' id='p3'><img src='assets/slide/nier 2b stance.jpg'></img></li>
            <li className='sin' id='p4'><img src='assets/slide/nier epic.jpg'></img></li>
            <li className='sin' id='p5'><img src='assets/slide/nier.jpg'></img></li>
            <li className='sin' id='p6'><img src='assets/slide/A2.jpg'></img></li>
            <li className='sin' id='p7'><img src='assets/slide/2b pic.jpg'></img></li>
            <li className='sin' id='p8'><img src='assets/slide/2b stand.jpg'></img></li>
            <li className='sin' id='p9'><img src='assets/slide/2b sad.jpg'></img></li>
            <li className='sin' id='p10'><img src='assets/slide/2b 9s.jpg'></img></li>
          </ul>
        </div>
      </main>

    )
  }
}

export default Slide;
