import React, { Component } from 'react';
import { ReactNavbar } from 'react-responsive-animate-navbar';
 
class AnimatedNav extends Component {
  render() {
    return (
      <ReactNavbar
        color="rgb(25, 25, 25)"
        logo="assets/images/image.png"
        menu={[
          { name: "HOME", to: "/" },
          { name: "ARTICLES", to: "/articles" },
          { name: "ABOUT ME", to: "/about" },
          { name: "CONTACT", to: "/contact" },
        ]}
        social={[
          {
            name: "Linkedin",
            url: "https://www.linkedin.com/",
            icon: ["fab", "linkedin-in"],
          },
          {
            name: "Facebook",
            url: "https://www.facebook.com/",
            icon: ["fab", "facebook-f"],
          },
          {
            name: "Instagram",
            url: "https://www.instagram.com/",
            icon: ["fab", "instagram"],
          },
          {
            name: "Twitter",
            url: "http://twitter.com/",
            icon: ["fab", "twitter"],
          },
        ]}
      />
    );
  }
}
export default AnimatedNav;