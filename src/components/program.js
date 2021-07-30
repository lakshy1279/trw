import React from 'react';
import Navbar from './navbar';
import Footer from './footer';
function Program(props) {
    return (
        <div>
            <div className="container">
                <Navbar/>
                {/* <!-- Prog Details --> */}
      <section class="prog-details">
        <div class="prog-main">
          <div class="prog-heading">
            <h1>Tempor posuere imperdiet consequat est et feugiat imperdiet</h1>
          </div>
          <div class="prog-img">
            <img src="/assests/images/Party.jfif" alt="" />
          </div>
          <div class="prog-para">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget eu
              velit et facilisi faucibus luctus tellus. Arcu enim, maecenas
              vitae eget turpis. Imperdiet congue viverra blandit diam dolor. Id
              venenatis velit eu in commodo venenatis cras vulputate. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Eget eu velit
              et facilisi faucibus luctus tellus. Arcu enim, maecenas vitae eget
              turpis. Imperdiet congue viverra blandit diam dolor. Id venenatis
              velit eu in commodo venenatis cras vulputate. Arcu enim, maecenas
              vitae eget turpis. Imperdiet congue viverra blandit. Id venenatis
              velit eu in commodo venenatis cras vulputate. Lorem ipsum dolor
              sit. luctus tellus arcu enim, maecenas vitae. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Eget eu velit et facilisi
              faucibus luctus tellus. Arcu enim, maecenas vitae eget turpis.
              Imperdiet congue viverra blandit diam dolor. Id venenatis velit eu
              in commodo venenatis cras vulputate. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>
          </div>
          <div class="when">
            <p class="prog-date">19th July 2021, Monday</p>
            <p class="prog-time">IST: 8:00, CET: 12:00, EST: 19:00</p>
          </div>
        </div>
      </section>
      <section class="prog-org-details">
        <div class="prog-org-main">
          <div class="header-org-main">
            <h1>Organizer</h1>
          </div>
          <div class="org-main-sec-1">
            <div class="org-image">
              <img src="/assests/images/AEIOU.png" alt="" />
            </div>
            <div class="org-details-info">
              <div class="header">
                <h1>Tempor posuere imperdiet consequat estfe ugiat</h1>
              </div>
              <div class="link">
                <i class="fas fa-external-link-alt"></i>
                <span id="link-blue">https://organisationwebsite.com</span>
              </div>
              <div class="link">
                <i class="fas fa-phone-alt"></i>
                <span class="number">1800-666-999</span>
              </div>
              <div class="link">
                <span class="envelope">myemail@address.com</span>
              </div>
              <div class="para">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
                  eu velit et facilisi faucibus luctus tellus. Arcu enim,
                  maecenas vitae eget turpis. Imperdiet congue viverra blandit
                  diam dolor. Id venenatis velit eu in commodo venenatis cras
                  vulputate. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Eget eu velit et facilisi faucibus luctus tellus. Arcu
                  enim, maecenas vitae eget turpis. Imperdiet congue viverra
                  blandit diam dolor. Id venenatis velit eu in commodo venenatis
                  cras vulputate.
                </p>
              </div>
            </div>
          </div>
          <div class="org-main-sec-2">
            <div class="paragraphtwo">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget eu
                velit et facilisi faucibus luctus tellus. Arcu enim, maecenas
                vitae eget turpis. Imperdiet congue viverra blandit diam dolor.
                Id venenatis velit eu in commodo venenatis cras vulputate. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Eget eu velit
                et facilisi faucibus luctus tellus. Arcu enim, maecenas vitae
                eget turpis. Imperdiet congue viverra blandit diam dolor. Id
                venenatis velit eu in commodo venenatis cras vulputate. Arcu
                enim, maecenas vitae eget turpis. Imperdiet congue viverra
                blandit. Id venenatis velit eu in commodo venenatis cras
                vulputate. Lorem ipsum dolor sit. luctus tellus arcu eget eu
                velit et facilisi faucibus luctus tellus. Arcu enim, maecenas
                vitae eget turpis. Imperdiet congue viverra blandit diam dolor.
                Id venenatis velit eu in commodo venenatis cras vulputate. Arcu
                enim, maecenas vitae eget turpis. Imperdiet congue viverra
                blandit. Id venenatis velit eu in commodo venenatis cras
                vulputate. Lorem ipsum dolor sit. luctus tellus arcu enim,
                maecenas vitae.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- How to apply --> */}
      <section class="how-to-apply">
        <div class="main-apply">
          <div class="header-apply">
            <h1>How to apply?</h1>
          </div>
          <div class="lists-apply">
            <ul>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget eu
                velit et facilisi faucibus luctus tellus. Arcu enim, maecenas
                vitae eget turpis. Imperdiet congue viverra blandit diam dolor.
              </li>
              <li>
                Id venenatis velit eu in commodo venenatis cras vulputate. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Eget eu velit
                et facilisi faucibus luctus tellus. Arcu enim, maecenas vitae
                eget turpis.
              </li>
              <li>
                Imperdiet congue viverra blandit diam dolor. Id venenatis velit
                eu in commodo venenatis cras vulputate. Arcu enim, maecenas
                vitae eget turpis. Imperdiet congue viverra blandit.
              </li>
              <li>
                Id venenatis velit eu in commodo venenatis cras vulputate. Arcu
                enim, maecenas vitae eget turpis. Imperdiet congue viverra
                blandit. Id venenatis velit eu in commodo venenatis cras
                vulputate.
              </li>
            </ul>
          </div>
          <div class="apply-button">
            <button>Apply Now</button>
          </div>
        </div>
      </section>
            </div>
            <div style={{marginTop:"104px",background:"#fcf6f1"}}>
                <Footer/>
            </div>
        </div>
    );
}

export default Program;