import React, {Component} from 'react';
// must import Picture from Picture.js
import Picture from './Picture.js'

// Do hooks require importing Component?
class App extends Component {
    render() {
        
        return (
            <div>
                <h1> Solo Project YAY Boo</h1>
                <Picture />
            </div>
        )
    }
}

export default App;