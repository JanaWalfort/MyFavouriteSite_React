/* eslint-disable react/prop-types */
/* eslint-disable no-restricted-globals */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable max-len */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-console */
/* eslint-disable react/jsx-tag-spacing */
/* eslint-disable react/no-unused-state */
/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/self-closing-comp */

import React, { useState, useEffect } from 'react';
import { Button } from 'chayns-components';

import Sites from './SiteContent/Sites.jsx';

import './MainContent.css';


const ListSites = ({ searchString = 'love' }) => {
    const [arrayData, setArrayData] = useState([]);
    const [timeout, setTime] = useState(0);
    const [showButton, setShowButton] = useState(false);
    const [newSearchString, setNewSearchString] = useState();


    async function fetchSites(skip) {
        try {
            let resp;
            if (searchString !== '') {
                resp = await fetch(`https://chayns2.tobit.com/SiteSearchApi/location/search/${searchString}/?skip=${skip}&take=14`);
            } else {
                resp = await fetch(`https://chayns2.tobit.com/SiteSearchApi/location/search/${newSearchString}/?skip=${skip}&take=14`);
            }
            const list = await resp.json();

            if (list !== null) {
                setArrayData((prevData) => prevData.concat(list));
            }
        } catch (error) {
            console.log(error);
        }
    }

    function buffer() {
        if (timeout > 0) {
            clearTimeout(timeout);
        }
        setTime(setTimeout(() => {
            fetchSites(arrayData.length);
            setTime(0);
        }, 500));
    }


    useEffect(() => {
        // const newSearchString = event.target.value;
        if (timeout > 0) {
            clearTimeout(timeout);
        }

        setTime(setTimeout(() => {
            if (searchString !== '') {
                setArrayData([]);
                fetchSites(0);
                setNewSearchString(searchString);
                console.log('if');
                console.log(newSearchString);
                console.log(searchString);
            }
            setTime(0);
        }, 1000));
    }, [searchString]);

    useEffect(() => {
        if (arrayData.length % 14 || arrayData.length === 0) {
            setShowButton(false);
        } else {
            setShowButton(true);
        }
    }, [arrayData]);

    chayns.hideWaitCursor();
    return (
        <div className="mainBody">
            {/* <div className="filterBar">
                <Filter searchString={searchString} setSearchString={setSearchString}/>
            </div> */}

            <div className="listSites">
                {arrayData.map((site) => <Sites
                    key={site.locationId}
                    name={site.locationName}
                    siteId={site.siteId}
                />)}
            </div>

            <div className="moreContainer">
                {showButton
                    ? <Button id="more" className="button" onClick={() => buffer()}>Mehr</Button>
                    : null}
            </div>
        </div>
    );
};


export default ListSites;
