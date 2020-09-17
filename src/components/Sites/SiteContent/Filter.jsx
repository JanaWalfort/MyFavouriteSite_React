/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-tag-spacing */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unused-state */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-console */
/* eslint-disable react/void-dom-elements-no-children */
import React from 'react';
import '../MainContent.css';
import { Input } from 'chayns-components';

const Filter = ({ searchString, setSearchString }) => {
    return (
        <div className="filterContainer">
            <div className="filter-icons">
                <div className="filter-icon">
                    <i className="fas fa-utensils" />
                </div>
                <div className="filter-icon">
                    <i className="fas fa-film" />
                </div>
                <div className="filter-icon">
                    <i className="fas fa-shopping-cart" />
                </div>
                <div className="filter-icon">
                    <i className="fas fa-bicycle" />
                </div>
                <div className="filter-icon">
                    <i className="fas fa-heartbeat" />
                </div>
            </div>
            <div>
                <Input
                    onChange={setSearchString}
                    value={searchString}
                    id="search"
                    type="text"
                    placeholder="Suche"
                />
            </div>

        </div>
    );
};

export default Filter;
