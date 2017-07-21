import React from 'react';
import pic1 from 'assets/images/slide/A2.jpg';
import pic2 from 'assets/images/slide/2B.jpg';
import pic3 from 'assets/images/slide/nier 2b stance.jpg';
import pic4 from 'assets/images/slide/nier epic.jpg';
import pic5 from 'assets/images/slide/nier.jpg';
import pic6 from 'assets/images/slide/A2 epic.jpg';
import pic7 from 'assets/images/slide/2b pic.jpg';
import pic8 from 'assets/images/slide/2b stand.jpg';
import pic9 from 'assets/images/slide/2b sad.jpg';
import pic10 from 'assets/images/slide/2b 9s.jpg';

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
      <div className='slide'>
        <h1>Image Slide Effect</h1>
        <p>A pretty cool slide effect using flexbox(left) and absolute position(right) that moves images based on your mouse position. The math is not very complicated, but you just need to figure the right kinds of equations to use! I used a gaussian curve for the left container and sin waves for the right container.</p>
        <main className='slide'>
          <div className='flexbox'>
            <ul id='flexbox-image-wrapper'>
              <li className='flexbox'><img src={pic1}></img></li>
              <li className='flexbox'><img src={pic2}></img></li>
              <li className='flexbox'><img src={pic3}></img></li>
              <li className='flexbox'><img src={pic4}></img></li>
              <li className='flexbox'><img src={pic5}></img></li>
              <li className='flexbox'><img src={pic6}></img></li>
              <li className='flexbox'><img src={pic7}></img></li>
              <li className='flexbox'><img src={pic8}></img></li>
              <li className='flexbox'><img src={pic9}></img></li>
              <li className='flexbox'><img src={pic10}></img></li>
            </ul>
          </div>
          <div className='sin'>
            <ul id='sin-image-wrapper'>
              <li className='sin' id='p1'><img src={pic1}></img></li>
              <li className='sin' id='p2'><img src={pic2}></img></li>
              <li className='sin' id='p3'><img src={pic3}></img></li>
              <li className='sin' id='p4'><img src={pic4}></img></li>
              <li className='sin' id='p5'><img src={pic5}></img></li>
              <li className='sin' id='p6'><img src={pic6}></img></li>
              <li className='sin' id='p7'><img src={pic7}></img></li>
              <li className='sin' id='p8'><img src={pic8}></img></li>
              <li className='sin' id='p9'><img src={pic9}></img></li>
              <li className='sin' id='p10'><img src={pic10}></img></li>
            </ul>
          </div>
        </main>
      </div>

    )
  }
}

export default Slide;
