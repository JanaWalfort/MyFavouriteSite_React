/* eslint-disable no-console */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/prop-types */

import React, { useState, useEffect } from 'react';
import { Button } from 'chayns-components';

// component
import Sites from './SiteContent/Sites.jsx';

import './MainContent.css';


const ListSites = ({ searchString = 'love' }) => {
    const [arrayData, setArrayData] = useState([]);
    const [timeout, setTime] = useState(0);
    const [showButton, setShowButton] = useState(false);
    const [newSearchString, setNewSearchString] = useState();


    const fetchSites = async (skip) => {
        chayns.showWaitCursor();
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
        chayns.hideWaitCursor();
    };


    const buffer = () => {
        clearTimeout(timeout);

        setTime(setTimeout(() => {
            fetchSites(arrayData.length);
        }, 500));
    };


    useEffect(() => {
        clearTimeout(timeout);

        setTime(setTimeout(() => {
            if (searchString !== '') {
                setArrayData([]);
                fetchSites(0);
                setNewSearchString(searchString);
            }
        }, 1000));
    }, [searchString]);


    useEffect(() => {
        if (arrayData.length % 14 || arrayData.length === 0) {
            setShowButton(false);
        } else {
            setShowButton(true);
        }
    }, [arrayData]);


    return (
        <div className="mainBody">

            <div className="listSites">
                {
                    arrayData.map((site) => <Sites
                        key={site.locationId}
                        name={site.locationName}
                        siteId={site.siteId}
                    />)
                }
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
