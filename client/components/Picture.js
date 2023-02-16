import { Component } from "react";
import React from "react";

class Picture extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        //console.log(this.props);
        const images = this.props.pictures.map(pic => { 
                                                    return <div className="picture">
                                                        <h2> {pic.caption} </h2>
                                                        <img src={pic.url} /> 
                                                    </div>
                                                });

        const props = this.props;
        return (
            <>
            <header> 
                    <h1> The Gallery </h1>
                    <div> 
                        <form id="add-picture" onSubmit={props.handleSubmit}>
                            <input onChange={props.handleCaptionChange} value={props.userCaption} name="caption" id="caption" placeholder="caption" type="text"/> 
                            <input onChange={props.handleURLChange} value={props.userURL} name="url" id="url" placeholder="url" type="text"/> 
                            <button type="submit"> Add </button>
                        </form>
                    </div>
            </header>
            <div id="pictures"> {images} </div>
            </>
        );
    }
}

export default Picture;