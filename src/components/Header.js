import React from 'react';

export default class Header extends React.Component{
    render(){
        return(
            <div className="App-header">
                
                <ul>
                    <img src="https://picsum.photos/200" className="App-logo" alt="Logo"></img>
                    <li><a href="#Contact">Haunt me</a></li>
                    <li><a href="#Projects">Projects</a></li>
                    <li><a href="#AboutMe">About me</a></li>
                </ul>
            </div>
        );
    }
}