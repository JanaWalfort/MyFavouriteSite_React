/* eslint-disable react/self-closing-comp */
import React, { PureComponent } from 'react';
import './MainContent.css';

export default class Formular extends PureComponent {
    render() {
        return (
            <div className="filterContainer">
                <div className="filter-icons">
                    <div className="filter-icon">
                        <i className="fas fa-utensils"></i>
                    </div>
                    <div className="filter-icon">
                        <i className="fas fa-film"></i>
                    </div>
                    <div className="filter-icon">
                        <i className="fas fa-shopping-cart"></i>
                    </div>
                    <div className="filter-icon">
                        <i className="fas fa-bicycle"></i>
                    </div>
                    <div className="filter-icon">
                        <i className="fas fa-heartbeat"></i>
                    </div>
                </div>
                <div className="filter-search"></div>
                <input id="search" className="input textInp" type="text" placeholder="Suche"></input>
            </div>
        );
    }
}
