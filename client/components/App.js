import React, {Component} from 'react';
// must import Picture from Picture.js
import Picture from './Picture.js'

// Do hooks require importing Component?
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pictures: [],
            userURL: '',
            userCaption: '',
        }
        // this.handleChange = this.handleChange.bind(this);
        this.handleURLChange = this.handleURLChange.bind(this);
        this.handleCaptionChange = this.handleCaptionChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        fetch('/pictures')
        .then(res => res.json())
        .then(pictures => {
            // console.log(pictures);
            this.setState(
                 {pictures: pictures}
            )
        })
    }

    handleURLChange(event) {
        this.setState({userURL : event.target.value});
    }

    handleCaptionChange(event) {
        console.log(event.target.value);
        this.setState({userCaption : event.target.value});
    }

    handleSubmit(event) {
        // event prevent default
        event.preventDefault(); 

        // make fetch request
        console.log(this.state.userCaption);
        console.log(this.state.userURL);

        const newPic = {caption: this.state.userCaption, url : this.state.userURL};

        // post this to database, so that on refresh these are maintained
        fetch('/pictures', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(newPic)
        })
        
        //console.log(this.state.pictures);
        // there is no need to get that newly posted record to the database, we can just push it to pictures
        this.setState((state) => {
            const newState = {...state};
            newState.pictures.push(newPic);
            //console.log(newState.pictures);
            newState.userCaption = '';
            newState.userURL = '';
            console.log('newState', newState)
            return newState
         })
        
        // console.log('After set state', this.state); // setState is aysnchronous
    }

    render() {
        
        return (
            <>
                <div>
                    <Picture pictures={this.state.pictures} 
                    handleSubmit={this.handleSubmit} 
                    handleCaptionChange={this.handleCaptionChange} 
                    handleURLChange={this.handleURLChange}
                    userCaption={this.state.userCaption}
                    userURL={this.state.userURL}
                    />
                </div>
            </>
        )
    }
}

export default App;