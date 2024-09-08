import React from "react";
import Button from "../Button/Button";
import "./Timer.css"
let interval, colorInterval;

class Timer extends React.Component {
    constructor() {
        super();
        this.state = {
            hour: 0,
            minute: 0,
            second: 0,
            isStart: false,
            currentColor: 0, // برای کنترل رنگ box-shadow
        };
    }

    // آرایه‌ای از رنگ‌ها برای box-shadow
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

            // تایمر هر ثانیه افزایش پیدا کند
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

            // تغییر رنگ box-shadow هر 1 ثانیه
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
        clearInterval(interval); // توقف تایمر
        clearInterval(colorInterval); // توقف تغییر رنگ‌ها
    };

    Reset = () => {
        this.Stop(); // توقف تایمر و تغییر رنگ‌ها
        this.setState({
            hour: 0,
            minute: 0,
            second: 0,
            currentColor: 0, // تنظیم رنگ به حالت اولیه
        });
    };

    render() {
        const { hour, minute, second, currentColor } = this.state;

        // رنگ فعلی box-shadow
        const boxShadowStyle = {
            boxShadow: `0 0 40px ${this.colors[currentColor]}`,
        };

        return (
            <>
                <h3 className="timer" style={boxShadowStyle}>
                    {`${hour > 9 ? hour : "0" + hour} : ${minute > 9 ? minute : "0" + minute
                        } : ${second > 9 ? second : "0" + second}`}
                </h3>
                <Button Start={this.Start} Stop={this.Stop} Reset={this.Reset} />
            </>
        );
    }
}

export default Timer;
