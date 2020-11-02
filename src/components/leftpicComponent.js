import React, { Component } from 'react';

export default class LeftContent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="row z-depth-5 hoverable" style={{borderColor: "#FFFFFF" , alignItems: 'center',justifyContent: 'center', borderRadius:'300px', elevation: 10, paddingTop:20, backgroundColor: "#000000", margin: "40px"}}>
                <div className="col-12 col-sm">
                    <img src={this.props.image} style={{elevation: 10}} width="500" height="500"/>
                </div>
                <div className="col-12 col-sm" >
                    <h1 style={{color: "#FFFFFF", fontFamily: 'sans-serif'}}>{this.props.text1}</h1>
                    <br/>
                    <h2 style={{color: "#FFFFFF", fontFamily: "sans-serif"}}>{this.props.text2}</h2>
                    <br />
                    <p style={{color: "#F9A826", fontFamily: "sans-serif"}}>{this.props.des}</p>
                </div>
            </div>
        );
    }
}