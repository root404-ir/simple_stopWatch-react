import React from "react";
import "./Timer.css"
import "../Button/Button.css"
let interval, colorInterval;
class Timer extends React.Component {
    constructor() {
        super();
        this.state = {
            hour: 0,
            minute: 0,
            second: 0,
            isStart: false,
            currentColor: 0,
        };
    }

    colors = ["#18dffc",
        "#0a4644",
        " #c0a266",
        "#dce0d6",
        "#380e3b",
        "#15355a",
        "#28bfb4",
        "#e5c1fa",
        "#ffc000",
        "#a8c9f0",
        "#e70867",
        "#d6fac1",
        " #e5c1fa",
        "#ffc000",
        "#f1f7fc",
        "#edf8dc",
        "#e2f4c7",
        "#28bfb4",
        "#eef1fd",
        "#5d74f4",
        "#f4dd5d",
        "#000010",
        "#4d7292",
        "#abc7d6",
        "#0d98ba",
        "#484e55",
        "#151d26",
        "#252c35",
        "#07080f",
        "#ad00fa",
        "#e07ab9",
        "#217fa6",
        "#f10750",
        "#603f8b",
        "#dd72a6",
        "#a16ae8",
        "#ffffff",
        "#b0c1b3",
        "#e5d3bb",
        "#bcb7cd",
        "#380e3b",
        "#560f2c"];

    Start = () => {
        if (!this.state.isStart) {
            this.setState({
                isStart: true,
            });

            interval = setInterval(() => {
                this.setState({
                    second: this.state.second + 1,
                });

                if (this.state.second === 60) {
                    this.setState({
                        second: 0,
                        minute: this.state.minute + 1,
                    });
                }
                if (this.state.minute === 60) {
                    this.setState({
                        minute: 0,
                        hour: this.state.hour + 1,
                    });
                }
            }, 1000);

            colorInterval = setInterval(() => {
                this.setState((prevState) => ({
                    currentColor: (prevState.currentColor + 1) % this.colors.length,
                }));
            }, 1000);
        }
    };

    Stop = () => {
        this.setState({
            isStart: false,
        });
        clearInterval(interval);
        clearInterval(colorInterval);
    };

    Reset = () => {
        this.Stop();
        this.setState({
            hour: 0,
            minute: 0,
            second: 0,
            currentColor: 0,
        });
    };
    render() {
        const { hour, minute, second, currentColor } = this.state;

        const boxShadowStyle = {
            boxShadow: `0 0 40px ${this.colors[currentColor]}`,
        };
        return (
            <>
                <h3 className="timer" style={boxShadowStyle}>
                    {`${hour > 9 ? hour : "0" + hour} : ${minute > 9 ? minute : "0" + minute
                        } : ${second > 9 ? second : "0" + second}`}
                </h3>
                <div className="button">
                    <button onClick={this.Start} className="start">Start</button>
                    <button onClick={this.Stop} className="stop">Stop</button>
                    <button onClick={this.Reset} className="reset">Reset</button>
                    <button onClick={this.props.handleLight} className="changeBg">change Bg</button>
                </div>
            </>
        );
    }
}

export default Timer;
