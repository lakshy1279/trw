import React from 'react';
import axios from  'axios';
import PropTypes from "prop-types";
import SimpleReactValidator from 'simple-react-validator';
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
    this.validator = new SimpleReactValidator({
      className: "text-danger",
      validators: {
          passwordvalid: {
              message:
                  "The :attribute must be at least 6 and at most 30 with 1 numeric,1 special charac" +
                  "ter and 1 alphabet.",
              rule: function (val, params, validator) {
                  return (
                      validator.helpers.testRegex(
                          val,
                          /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z]).{6,30}$/i
                      ) && params.indexOf(val) === -1
                  );
              },
          },
          passwordMismatch: {
              message: "confirm password must match with password field.",
              rule: function (val, params, validator) {
                  return document.getElementById("password_input").value === val
                      ? true
                      : false;
              },
          },
          whitespace: {
              message: "The :attribute not allowed first whitespace   characters.",
              rule: function (val, params, validator) {
                  return (
                      validator.helpers.testRegex(val, /[^\s\\]/) &&
                      params.indexOf(val) === -1
                  );
              },
          },
          specialChar: {
              message: "The :attribute not allowed special   characters.",
              rule: function (val, params, validator) {
                  return (
                      validator.helpers.testRegex(val, /^[ A-Za-z0-9_@./#&+-]*$/i) &&
                      params.indexOf(val) === -1
                  );
              },
          },
          specialCharText: {
              message: "The :attribute may only contain letters, dot and spaces.",
              rule: function (val, params, validator) {
                  return (
                      validator.helpers.testRegex(val, /^[ A-Za-z_@./#&+-]*$/i) &&
                      params.indexOf(val) === -1
                  );
              },
          },

          zip: {
              message: "Invalid Pin Code",
              rule: function (val, params, validator) {
                  return (
                      validator.helpers.testRegex(val, /^(\d{5}(\d{4})?)?$/i) &&
                      params.indexOf(val) === -1
                  );
              },
          },
          website: {
              message: "The Url should be example.com ",
              rule: function (val, params, validator) {
                  return (
                      validator.helpers.testRegex(
                          val,
                          /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
                      ) && params.indexOf(val) === -1
                  );
              },
          },
          Fax: {
              message: "Invalid fax number ",
              rule: function (val, params, validator) {
                  return (
                      validator.helpers.testRegex(
                          val,
                          /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/i
                      ) && params.indexOf(val) === -1
                  );
              },
          },
      },
  });
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
    if(this.validator.allValid())
        {
        axios
            .post(
              "https://lakshy12.herokuapp.com/contact/add_subscriber",
              {
                  email:this.state.subscribeemail,
              }
            )
            .then((response)=> {
              // handle success
              this.props.history.push("/");
              console.log(response.data);
            })
          }
          else
          {
            this.validator.showMessages();
             this.forceUpdate();
          }    
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
    if(this.validator.allValid())
    {
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
      else {
        this.validator.showMessages();
        this.forceUpdate();
      } 
    }
  render()
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
                      {this.validator.message(
                                                            "email",
                                                            this.state.email,
                                                            "required|whitespace|min:1|max:80"
                                                        )}
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
                {this.validator.message(
                                                            "name",
                                                            this.state.name,
                                                            "required|whitespace|min:1|max:40"
                                                        )}
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
                   {this.validator.message(
                                                            "Email",
                                                            this.state.email,
                                                            "required|whitespace|min:1|max:100"
                                                        )}
              </div>
            </div>
            <div class="flex-row">
              <div class="input-box row1" style={{width: '244px'}}>
                <p>Phone</p>
                <input type="text" class="input"   name="phone"
                     onChange={this.onChange}
                     value={this.state.phone}required />
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
                    rows="5"
                    style={{width: '100%', paddingBottom: '30px',overflowY:"scroll"}}
                    required
                  ></textarea>
                   {this.validator.message(
                                                            "Message",
                                                            this.state.message,
                                                            "required|whitespace|min:1|max:1000"
                                                        )}
              </div>
            </div>
            <div class="flex-row" style={{alignSelf: 'flex-end'}}>
              <div class="input-box row1">
                <button style={{margin: '0'}} class="button" onClick={this.handleSubmit}>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</div>)
  }
}

export default Contact;