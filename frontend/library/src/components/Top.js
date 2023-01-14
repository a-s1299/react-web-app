import React from 'react'
import Clock from "./Clock"


class Top extends React.Component {

    render() {
        return (
            <div className="card">
                <h1>{this.props.name}</h1>
                <Clock />
            </div>
        )
    }
}

export default Top