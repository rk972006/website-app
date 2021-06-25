import React, { Component } from 'react'
import './Header.css'


export default class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className = 'Header_logo'>
          <img src="data:image/png;base64,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"  height="50px" width="80" ></img>
        </div>
        <div className="Header_options">
          <div className="option1">
            <span className="Style">
              Home
            </span>

          </div>
          <div className="option2">
            <span className="Style">
            About Us
            </span>
            
          </div>
          <div className="option3">
            <span className="Style">
              Blogs
            </span>
            
          </div>
          <div className="option4">
            <span className="Style">
              Write:-)
            </span>
            
          </div>
          <div className="option5">
            <span className="Style">
            Contact Us
            </span>
          </div>

        </div>
        <diiv className="Header_end">
          <div className="header_end_option">
          <span className="Style">
              Sign In
            </span>
          </div>
        </diiv>
      </div>
    )
  }
}
