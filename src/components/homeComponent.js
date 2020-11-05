import React, { Component } from 'react';
import LeftContent from './leftpicComponent';
import RightContent from './rightpicComponent';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return(
            <div style={{backgroundColor: "#000000"}}>
                <LeftContent image={'assets/images/welcome.svg'} text1={'Hello!♥'} text2={'Sachdeva, Wecomes You'} des={'Hope you all have a great time and great food.'} />
                <RightContent image={'assets/images/birthday.svg'} text1={'Yayy! Birthday Party'} des={'Where else could you go to give a treat to your ever-hungry friends.'} />
                <LeftContent image={'assets/images/date.svg'} text1={"Congtzz! it's a 'Date'"} des={'No nearby dine-in restaurant or cafe would provide you better peaceful ambiance and lip smacking cuisines.'} />
                <RightContent image={'assets/images/mojito.svg'} text1={'Craving for softdrinks ?'} des={'We serve almost all the types of mojito you may ever like.'} />
                <LeftContent image={'assets/images/leavewithlove.svg'} text1={"Thank you! for choosing us"} des={'You surely will leave with lots of love and happy tummy. 😋'} />
            </div>
        );
    }
}