import React from 'react';


class Bottom extends React.Component {

    render() {

        return (
            <div className="card">
                <h1>{this.props.name}</h1>
                <div id="theme-div">
                    <button id="button-theme" onClick={this.props.onThemeChange} value='twist'>Twist</button>
                    <button id="button-theme" onClick={this.props.onThemeChange} value='bingsu'>Bingsu</button>
                    <button id="button-theme" onClick={this.props.onThemeChange} value='carbon'>Carbon</button>
                    <button id="button-theme" onClick={this.props.onThemeChange} value='bento'>Bento</button>
                    <button id="button-theme" onClick={this.props.onThemeChange} value='laser'>Laser</button>
                </div>
            </div>
        )
    }
}

export default Bottom