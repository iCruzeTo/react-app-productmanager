import React, { Component } from 'react';
import Datetime  from 'react-datetime';
import moment from 'moment';

const TimeForm = React.createClass({

  getInitialState() {
      return {
          startTime: this.props.startTime,
          endTime: this.props.endTime,
          date: this.props.date
      }
  },

    componentWillReceiveProps(props) {
        this.setState(props);
    },

    handleStartTimeChange(e) {
        this.setState({
            startTime: e.target.value
        });
    },

    handleEndTimeChange(e) {
        this.setState({
            endTime: e.target.value
        });
    },

    handleDateChange(e) {
          this.setState({
              date: e.target.value
          });
      },

    handleSubmit(e) {
        e.preventDefault();
        this.props.onSubmit(this.state);
    },

    render() {
        return (
            <form name="time" className="form-horizontal" onSubmit={this.handleSubmit}>
                <div id="time">

                    <div className="form-group">
                        <label className="col-sm-2 control-label required" htmlFor="startTime">Start Time</label>
                        <div className="col-sm-10">
                            <input type="number" min="0" max ="24"
                                   id="startTime"
                                   required="required"
                                   onChange={this.handleStartTimeChange}
                                   className="form-control"/>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-sm-2 control-label required" htmlFor="endTime">End Time</label>
                        <div className="col-sm-10">
                            <input type="number" min="0" max ="24"
                                   id="endTime"
                                   required="required"
                                   onChange={this.handleEndTimeChange}
                                   className="form-control"/>
                        </div>
                    </div>
                    
                    <div className="form-group">
                        <label className="col-sm-2 control-label required" htmlFor="description">Description</label>
                        <div className="col-sm-10">
                            <input type="text"
                                   id="description"
                                   required="required"
                                   className="form-control"/>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-sm-2 control-label required" htmlFor="date">Date</label>
                        <div className="col-sm-10">
                          <Datetime />
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="col-sm-2"></div>
                        <div className="col-sm-10">
                            <button type="submit"
                                    id="login_submit"
                                    className="btn-default btn">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
});

export default TimeForm;
