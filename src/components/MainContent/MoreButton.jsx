/* eslint-disable react/self-closing-comp */
import React, { PureComponent } from 'react';
import './MainContent.css';

export default class ListSites extends PureComponent {
    render() {
        return (
            <div className="moreContainer">
                <button id="more" type="button" className="button">Mehr</button>
            </div>
        );
    }
}
