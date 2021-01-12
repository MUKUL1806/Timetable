import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday'];
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
            <Typography variant="h6" align="left">
                {this.state.date.toLocaleTimeString()}
                &nbsp;
                {days[this.state.date.getDay()]}
            </Typography>
        )
    }
}
export default Clock