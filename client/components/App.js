import React, {Component} from 'react';
// must import Picture from Picture.js
import Pictures from './Pictures.js'
import { useLoaderData } from "react-router-dom";

export async function picturesLoader() {
    let pics = await fetch('/pictures')
    pics = await pics.json();
    console.log("pics", pics);
    return pics;
}

// Time to practice Hooks
export default function App() {
    const pics = picturesLoader();
    const load = useLoaderData();
    console.log(load);
    console.log(pics['pics']);
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
            <div>
                <p> {pics['pics']} </p>
                
            </div>
        </>
    )
} 