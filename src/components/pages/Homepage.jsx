import React from 'react';
import ReactPlayer from 'react-player';
import { DefaultPlayer as Video } from 'react-html5video/dist';
import Introvideo from "../../videos/videoplayback.mp4";
import 'react-html5video/dist/styles.css';
const Homepage = () => {
  return (
 <section className="hero">
    
      <div className="container ">
        <div className="row ">
          <div className="col-12 col-md-6 senan2">
            <div className="text-content text-white ">
<p><span className='big' >Tartan: an Elegant Lifestyle Collection with a Modern Twist on Tradition  </span><span className="small">This season’s collection is split into two main drops</span></p>


            </div>
          </div>

          <div className="col-12 col-md-6 senan">
<div className="video-content">
<Video className="video" autoPlay  loop muted
  controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}

>
  <source src={Introvideo} type='video/mp4' />
</Video>

</div>
          </div>
        </div>
      </div>


 </section>
  )
}

export default Homepage