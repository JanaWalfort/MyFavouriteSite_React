/* eslint-disable react/jsx-tag-spacing */
import React, { PureComponent } from 'react';
import Filter from './Filter.jsx';
import ListSites from './ListSites.jsx';
import MoreButton from './MoreButton.jsx';


export default class Sites extends PureComponent {
    render() {
        return (
            <div>
                <Filter />
                <div>
                    Test
                </div>
                <ListSites />
                <MoreButton />
            </div>
        );
    }
}
