import React from 'react';
import Carousel from 'nuka-carousel';

export default class extends React.Component {
  render() {
    return (
      <Carousel>
        <img src="assets/images/1.jpg" />
        <img src="assets/images/2.jpg" />
        <img src="assets/images/3.jpg" />
        <img src="assets/images/4.jpg" />
      </Carousel>
    );
  }
}