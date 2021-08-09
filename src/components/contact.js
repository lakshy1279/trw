import React from 'react';
import axios from  'axios';
import PropTypes from "prop-types";
class Contact extends React.Component
{
  constructor(props) {
    super(props);
    this.state = {
     name:"",
     reason:"Join as faciliator",
     email:"",
     phone:"",
     message:"",
     subscribeemail:""
    };
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmit1 = this.handleSubmit1.bind(this);
    
}

onChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  handleSubmit1(e)
  {
    e.preventDefault();
    console.log(this.state.subscribeemail);
    axios
        .post(
          "https://lakshy12.herokuapp.com/contact/add_subscriber",
          {
              email:this.state.subscribeemail,
          }
        )
        .then((response)=> {
          // handle success
          window.location.reload();
          console.log(response.data);
        })    
  }
  handleSubmit(e) {
    e.preventDefault();
      console.log(this.state);
      // const formdata = new FormData();
      // formdata.append("name", this.state.name);
      // formdata.append("phone", this.state.phone);
      // formdata.append("email", this.state.email);
      // formdata.append("reason", this.state.reason);
      // formdata.append("message", this.state.message);
      axios
        .post(
          "https://lakshy12.herokuapp.com/contact/add_contact",
          {
              name:this.state.name,
              phone:this.state.phone,
              email:this.state.email,
              reason:this.state.reason,
              message:this.state.message
          }
        )
        .then((response)=> {
          // handle success
          window.location.reload();
          console.log(response.data);
        })    
    }
  render()
  {
    return ( 
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
              <form action="" onSubmit={this.handleSubmit1}>
                  <input
                    type="email"
                    style={{width:'244px'}}
                    name="subscribeemail"
                    onChange={this.onChange}
                    value={this.state.subscribeemail}
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
                <input type="text" class="input" name="name" value={this.state.name} onChange={this.onChange} required />
              </div>
              <div class="input-box row1" style={{width:'244px'}}>
                <p>Email</p>
                <input
                     type="email"
                     name="email"
                     onChange={this.onChange}
                     value={this.state.email}
                     placeholder="yourname@address.com"
                     class="input"
                    required
                  />
              </div>
            </div>
            <div class="flex-row">
              <div class="input-box row1" style={{width: '244px'}}>
                <p>Phone</p>
                <input type="text" class="input"   name="phone"
                     onChange={this.onChange}
                     value={this.state.phone}/>
              </div>
              <div class="input-box row1" style={{width: '244px'}}>
                <p>Reason</p>
                <input
                    name="reason"
                    value={this.state.reason}
                    onChange={this.onChange}
                    // id="select"
                    class="input facaliator"
                    style={{width: '100%'}}
                    required
                  />
              </div>
            </div>
            <div>
              <div class="input-box row1">
                <p class="msg-para">Message</p>
                <textarea
                    class="input area"
                    name="message"
                    onChange={this.onChange}
                    value={this.state.message}
                    placeholder="Write your message here"
                    style={{width: '100%', paddingBottom: '30px',overflowY:"scroll"}}
                    rows="5"
                    required
                  ></textarea>
              </div>
            </div>
            <div class="flex-row" style={{alignSelf: 'flex-end'}}>
              <div class="input-box row1">
                <button style={{margin: '0'}} class="button" onClick={this.handleSubmit}>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>)
  }
}

export default Contact;