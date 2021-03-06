/* eslint-disable react/jsx-tag-spacing */
import { hot } from 'react-hot-loader/root';
import React, { PureComponent } from 'react';
import './App.css';


import Intro from '../Intro/Intro.jsx';
import Formular from '../Formular/Form.jsx';
import ListSites from '../Sites/ListSites.jsx';


class App extends PureComponent {
    render() {
        return (
            <div>
                <Intro />
                <Formular />
                <div className="box">
                    <ListSites />
                </div>
            </div>
        );
    }
}

export default App;
export const HotApp = hot(App);
