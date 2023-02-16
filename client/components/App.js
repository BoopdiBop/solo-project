import React, {Component} from 'react';
// must import Picture from Picture.js
import Pictures from './Pictures.js'

// Time to practice Hooks
export default function App() {
    return (
        <>
            <header> 
                <h1> The Gallery </h1>
                <div>
                    <form id="add-picture" method="post">
                        <input name="caption" id="caption" placeholder="caption" type="text"/> 
                        <input name="url" id="url" placeholder="url" type="text"/> 
                        <button type="submit"> Add </button>
                    </form>
                </div>
                <div>
                    <form id="search-picture">
                        <input name="q" id="q" placeholder="search"/>
                    </form>
                </div>
                <a href={'/error'}> Click here for error </a>
            </header>
        </>
    )
} 