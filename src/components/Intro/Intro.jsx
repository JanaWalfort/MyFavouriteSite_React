import React, { PureComponent } from 'react';
import './intro.css';

export default class Intro extends PureComponent {
    render() {
        return (
            <div>
                <h1>My Favourite Sites</h1>
                <p className="intro-txt">Auf My Favourite Sites kannst du ganz einfach alle chayns Seiten ansehen und deine Favouriten speichern!</p>
            </div>
        );
    }
}
