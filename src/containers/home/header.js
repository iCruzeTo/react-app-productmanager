import React, { Component } from 'react';
import {fetchUser} from '../../actions/loginActions';
import {fetchTime} from '../../actions/timeActions';
import Time from 'react-time'

export default class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            user: '',
            last: '',
            email: '',
            hours: 0
        };
    };

    componentDidMount() {
      let getData = fetchUser();
      let getTime = fetchTime();
      if(getTime === null){
        getTime = 0;
      }
      let parseData = JSON.parse(getData);
      this.setState(state => {
        state.user = parseData.firstName;
        state.last = parseData.lastName;
        state.email = parseData.email;
        state.hours = getTime;
        return state;
      });
    };


    render() {
      let now = new Date()

      return (
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <h1 className="inline">Welcome {this.state.user} {this.state.last}</h1> <p className="inline">Today is <Time value={now} format="YYYY/MM/DD HH:mm" /></p> <span> You've worked {this.state.hours} Hrs</span>
            </div>
          </div>
        </nav>
        );
    }
}
