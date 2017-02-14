import React, { Component } from 'react';
import Header from './header.js';
import TimeForm from '../../components/TimeForm';
import { fetchTime, calculateHoursWorked } from '../../actions/timeActions';


export default class Welcome extends Component {

    constructor() {
        super();

        this.state = {
          time: 0
        };
    };

    handleSubmit(data) {
        calculateHoursWorked(data);
        console.log('this fired');
        window.location.reload();
    }
    componentDidMount() {

    };


    render() {
        let hours = fetchTime();

        return (
          <div>
            <Header time={hours}/>
            <TimeForm onSubmit={this.handleSubmit.bind(this)}></TimeForm>
          </div>
        );
    }
}
