import "./Content.css";
import iamgeBoxSat from "./images/Mask group.jpg";
import place from "./images/1.png"
import placee from "./images/2.png"
import placeee from "./images/3.png"
import placeeee from "./images/4.png"

function Content() {
  return (
    <>
      <div className="box_house">
        <div className="first_box">
          <div className="text_box">
            <h1>Find Your Dream Home</h1>
            <p>
              Explore our curated selection of exquisite properties meticulously
              tailored to your unique dream home vision
            </p>
            <button>Sign Up</button>
          </div>
          {/* <div className="image_box">
            <img src="" />
        </div> */}
        </div>
        <div className="two_box">
          <div className="input_box">
            <input
              type="text"
              className="input_location"
              placeholder="Location"
            />
            <input type="text" placeholder="Type" />
            <input type="text" placeholder="Price Range" />
          </div>
          <button>Sign Up</button>
        </div>
      </div>

      <div className="box_statistics">
        <div className="box_stat_img">
          <img src={iamgeBoxSat} />
        </div>
        <div className="box_stat_text">
          <h1>We Help You To Find Your Dream Home</h1>

          <p>
            From cozy cottages to luxurious estates, our dedicated team guides
            you through every step of the journey, ensuring your dream home
            becomes a reality
          </p>

          <div className="statistics">
            <div>
              <h1>8K+</h1>
              <p>Houses Available</p>
            </div>
            <div>
              <h1>6K+</h1>
              <p>Houses Sold</p>
            </div>
            <div>
              <h1>2K+</h1>
              <p>Trusted Agents</p>
            </div>
          </div>
        </div>
      </div>

      <div className="main-block">
        <div className="text-osnova">
        <h2>Why Choose You</h2>
        <p>Elevating Your Home Buying Experience with Expertise, Integrity, <br /> and Unmatched Personalized Service</p>
        </div>

        <div className="cardss">
          <div className="card1">
            <img src={place} />
            <div className="osn">
            <div className="tex">Expert Guidance</div>
            <div className="texx">Benefit from our team's <br /> seasoned expertise for a <br /> smooth buying experience</div>
            </div>
            
          </div>

          <div className="card1">
            <img src={placee} />
            <div className="osn">
            <div className="tex">Personalized Service</div>
            <div className="texx">Benefit from our team's <br /> seasoned expertise for a <br /> smooth buying experience</div>
            </div>
            
          </div>

          <div className="card1">
            <img src={placeee} />
            <div className="osn">
            <div className="tex">Transparent Process</div>
            <div className="texx">Benefit from our team's <br /> seasoned expertise for a <br /> smooth buying experience</div>
            </div>
            
          </div>

          <div className="card1">
            <img src={placeeee} />
            <div className="osn">
            <div className="tex">Exceptional Support</div>
            <div className="texx">Benefit from our team's <br /> seasoned expertise for a <br /> smooth buying experience</div>
            </div>
            
          </div>
        </div>
            
      </div>

      
    </>
  );
}

export default Content;

// h2 > p > общий один div там + 2div 