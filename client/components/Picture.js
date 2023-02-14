import { Component } from "react";
import React from "react";

class Picture extends Component {
    constructor(props) {
        super(props);
        this.state = {
            picture: ''
        }
    }

    componentDidMount() {
        fetch('/pictures')
        .then(res => res.json())
        .then(picture => {
            this.setState(
                {picture: picture['src']}
            )
        })
    }

    render() {
        return (
            <img src={this.state.picture}></img>
        );
    }
}

export default Picture;