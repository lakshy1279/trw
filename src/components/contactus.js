import React from 'react';
import Navbar from './navbar';
import Footer from './footer';
import swal from "sweetalert";
import axios from 'axios';
import SimpleReactValidator from 'simple-react-validator';
class  ContactUs extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
         name:"",
         fetchedreason:[],
         reason:"",
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
   componentDidMount() {
     axios.get('https://lakshy12.herokuapp.com/reason/fetch').then((res)=>{
       console.log(res.data);
       this.setState({
         fetchedreason:res.data,
         reason:res.data[0].reason
       })
     })
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
              swal("Thank you for subscribing to the TRW newsletter.","","success").then((value)=>{
                this.props.history.push("/");
              })
            })
      }
      handleSubmit(e) {
        e.preventDefault();
          console.log(this.state);
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
            swal("Thank you for Contacting Us,We will reach you Shortly.","","success").then((value)=>{
              this.props.history.push("/");
            })
        })
      }
      else {
        this.validator.showMessages();
        this.forceUpdate();
      }   
        } 
   render()
   {
     console.log("state",this.state);
    return ( <div>
         <section class="secconatct" id="seccontact">
             <Navbar/>
             <div class="hero">
        <div class="heading">
          <h1>Contact Us</h1>
          <h2>We’d love to hear from you</h2>
        </div>
      </div>
         </section>
         <section class="contact-us-sec">
      <div class="contact-form">
        <div class="con">
          <div class="contact-us-contents">
            <div class="contact-main-sec">
              <div style={{paddingTop: '180px', paddingBottom: '180px'}}>
                <img src="/assests/images/Email icon.svg" alt="" />
                <p>Subscribe to our newsletter</p>
                <form action="" onSubmit={this.handleSubmit1}>
                  <input
                    type="email"
                    style={{width:'244px'}}
                    name="subscribeemail"
                    onChange={this.onChange}
                    value={this.state.subscribeemail}
                    placeholder="yourmail@address.com"
                    class="input"
                    required
                  />
                  &nbsp;&nbsp;&nbsp;
                  <button class="contact-button">Subscribe</button>
                </form>
              </div>
            </div>
            <div class="contacts-main-sec2">
              <div class="flex-row">
                <div class="input-box" style={{width: '244px'}}>
                  <p>Full Name</p>
                  <input type="text" class="input" name="name" value={this.state.name} onChange={this.onChange} required />
                  {this.validator.message(
                                                            "name",
                                                            this.state.name,
                                                            "required|whitespace|min:1|max:40"
                                                        )}
                </div>
                <div class="input-box row1" style={{width: '244px'}}>
                  <p>Email</p>
                  <input
                     type="email"
                     name="email"
                     onChange={this.onChange}
                     value={this.state.email}
                     placeholder="yourmail@address.com"
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
                <div class="input-box row1" style={{width:'244px'}}>
                  <p>Phone</p>
                  <input type="text" class="input"   name="phone"
                     onChange={this.onChange}
                     value={this.state.phone}required />
                </div>
                <div class="input-box row1" style={{width:'244px'}}>
                  <p>Reason</p>
                  <select
                    name="reason"
                    id="select"
                    class="input facaliator"
                    onChange={this.onChange}
                    style={{width: "100%",color: "#cbcbd4",
                    fontStyle: "normal",
                    fontSize: "16px",
                    lineHeight: "16px"}}
                    required
                  >
                  {this.state.fetchedreason.length>0&&this.state.fetchedreason.map((item)=>{
                      return (<option style={{color: "#cbcbd4",
                        fontStyle: "normal",
                        fontSize: "16px",
                        lineHeight: "16px"}} value={item.reason}>
                        {item.reason}
                    </option>)
                  })}
                  </select>
                </div>
              </div>
              <div id="text-area-msg">
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
                  {this.validator.message(
                                                            "Message",
                                                            this.state.message,
                                                            "required|whitespace|min:1|max:1000"
                                                        )}
                </div>
              </div>
              <div class="flex-row" style={{alignSelf: 'flex-end'}}>
                <div class="input-box row1">
                  <button style={{margin: '0'}} class="contact-button" type="submit" onClick={this.handleSubmit}>Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="write-to-us">
      <div class="container">
        <h2>Write to us</h2>
        <div class="details">
          <div class="details-sec1">
            <img src="/assests/images/Email icon 1.svg" alt="" />
            <span id="span-email">Email</span>
          </div>
          <div class="details-sec2">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor
              imperdiet feugiat venenatis diam dignissim vitae. Maecenas
              pellentesque dis vel, vel blandit imperdiet urna pellentesque
              vestibulum.
            </p>
           <a> <p id="email">ouremail@gmail.com</p></a>
          </div>
        </div>
      </div>
    </section>
    <footer class="footer1">
    <Footer/>
    </footer>
</div>)
   }
}

export default ContactUs;