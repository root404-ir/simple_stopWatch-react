import React from "react"
import './Button.css'
class Button extends React.Component {
    render() {
        return (
            <div className="button">
                <button onClick={this.props.Start} className="start">Start</button>
                <button onClick={this.props.Stop} className="stop">Stop</button>
                <button onClick={this.props.Reset} className="reset">Reset</button>
            </div>
        )
    }
}
export default Button