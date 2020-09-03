/* eslint-disable react/prop-types */
/* eslint-disable react/no-unused-state */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-console */
/* eslint-disable react/void-dom-elements-no-children */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import './MainContent.css';

function Formular(props) {
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
            <input
                onChange={props.search}
                id="search"
                className="input textInp"
                type="text"
                placeholder="Suche"
            >
            </input>
        </div>
    );
}

export default Formular;
