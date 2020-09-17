/* eslint-disable react/jsx-tag-spacing */

import { hot } from 'react-hot-loader/root';
import React, { useState } from 'react';
import './App.css';

// components
import Intro from '../Intro/Intro.jsx';
import Formular from '../Formular/Form.jsx';
import Filter from '../Sites/SiteContent/Filter.jsx';
import ListSites from '../Sites/ListSites.jsx';


const App = () => {
    const [searchString, setSearchString] = useState();
    return (
        <div>
            <Intro />
            <Formular />
            <div className="box">
                <Filter searchString={searchString} setSearchString={setSearchString}/>
                <ListSites searchString={searchString} />
            </div>
        </div>
    );
};

export default App;
export const HotApp = hot(App);
