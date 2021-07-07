import React from 'react';

function Contact()
{
    return ( <div >
        <section class="contactus">
      <div class="container">
        <div class="contact-us-content">
          <div class="contact-main-sec1">
            <div>
              <h2>Contact Us</h2>
              <h1>We'd love to hear from you</h1>
            </div>
            <div style={{paddingTop: '115px'}}>
              <img src="/assests/images/Email icon.svg" alt="" />
              <p>Subscribe to our newsletter</p>
              <form action="">
                <input
                  type="email"
                  placeholder="yourname@address.com"
                  class="input"
                />
                &nbsp;&nbsp;&nbsp;
                <button class="button">Subscribe</button>
              </form>
            </div>
          </div>
          <div class="contact-main-sec2">
            <div class="flex-row">
              <div class="input-box" style={{width:'244px'}}>
                <p>Full Name</p>
                <input type="text" class="input" required />
              </div>
              <div class="input-box row1" style={{width:'244px'}}>
                <p>Email</p>
                <input
                  type="text"
                  placeholder="yourmail@address.com"
                  class="input"
                  required
                />
              </div>
            </div>
            <div class="flex-row">
              <div class="input-box row1" style={{width: '244px'}}>
                <p>Phone</p>
                <input type="number" class="input" required />
              </div>
              <div class="input-box row1" style={{width: '244px'}}>
                <p>Reason</p>
                <select
                  name=""
                  id="select"
                  class="input facaliator"
                  style={{width: '100%'}}
                  required
                >
                  <option disabled selected hidden value="">Join as faciliator</option>
                </select>
              </div>
            </div>
            <div>
              <div class="input-box row1">
                <p class="msg-para">Message</p>
                <textarea
                  class="input area"
                  name=""
                  id=""
                  placeholder="Write your message here"
                  style={{width: '100%', paddingBottom: '30px'}}
                  required
                ></textarea>
              </div>
            </div>
            <div class="flex-row" style={{alignSelf: 'flex-end'}}>
              <div class="input-box row1">
                <button style={{margin: '0'}} class="button">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</div>)
}

export default Contact;