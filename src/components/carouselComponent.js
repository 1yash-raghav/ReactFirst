import React from "react";
import styled from "styled-components";

// ============= Styling =====================
const Carousel = styled.div`
  display: flex;
  width: ${props => props.count}00vw;
  height: 100vh;
  transform: translateX(-${props => props.current}00vw);
  transition: transform 0.35s ease-in-out;
`;

const Image = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background: #34495e;
  background-image: url(${props => props.src});
  background-position: center;
  background-size: cover;
  h1 {
    color: rgb(250,250,250);
  }
  p {
    color: rgb(249,240,250);
  }
`;

const Button = styled.button`
  position: absolute;
  top: 50vh;
  left: ${props => props.name === "left" && "20px"};
  right: ${props => props.name === "right" && "20px"};
  background: transparent;
  border: none;
  font-size: 28px;
  color: rgb(249,168,38);
  &:hover {
    cursor: pointer;
  }
`

// ======================== render ======================

export default class Mycarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      data: [
        {
          image:
            "assets/images/2.jpg",
          title: "Sachdeva & Co.",
          content: "Brings delight to your life.",
          link: ""
        },
        {
          image:
            "assets/images/1.jpg",
          title: "Nope, we won't let you down, we aren't your EX",
          content: "",
          link: ""
        },
        {
          image: "assets/images/3.jpg",
          title: "One last time won't be last. We promise!!",
          content: "",
          link: ""
        },
        {
          image: "assets/images/4.jpg",
          title: "Hope you have a good day.",
          content: "",
          link: ""
        }
      ]
    };
    this.handleSlide = this.handleSlide.bind(this);
  }
  handleSlide({ target: { name } }) {
    if (name === "left" && this.state.current <= 0) {
      this.setState({
        current: 2
      });
    } else if (name === "left") {
      this.setState({
        current: this.state.current - 1
      });
    } else if (name === "right" && this.state.current <= 1) {
      this.setState({
        current: this.state.current + 1
      });
    } else {
      this.setState({
        current: 0
      });
    }
  }

  render() {
    const { current, data } = this.state;
    return (
      <React.Fragment>
        <Carousel count={data.length} current={current}>
          {data.map((item, i) => (
            <Image key={i} src={item.image}>
              <h1 style={{fontFamily:'sans-serif'}}>{item.title}</h1>
              <p style={{fontFamily:'sans-serif'}}>{item.content}</p>
            </Image>
          ))}
        </Carousel>
        <Button name="left" onClick={this.handleSlide}>
          {"<"}
        </Button>
        <Button name="right" onClick={this.handleSlide}>
          {">"}
        </Button>
      </React.Fragment>
    );
  }
};