import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
let days = ['Sunday', 'Monday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday', 'Sunday'];
class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }
    componentDidMount() {
        this.timer = setInterval(
            () => this.setState({ date: new Date() }),
            1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.timer);
    }
    render() {
        return (
            <Typography variant="h6" align="right">
                {this.state.date.toLocaleTimeString()}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {days[this.state.date.getDay() - 1]}
            </Typography>
        )
    }
}
export default Clock