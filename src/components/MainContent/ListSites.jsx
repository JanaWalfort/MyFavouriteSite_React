/* eslint-disable react/no-unused-state */
/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/self-closing-comp */
import React, { PureComponent } from 'react';
import './MainContent.css';
import Sites from './Sites.jsx';

export default class ListSites extends PureComponent {
    constructor() {
        super();
        this.state = {
            data: [],
            searchString: '',
            counter: 0,
        };

        this.fetchSites = this.fetchSites.bind(this);
    }

    fetchSites() {
        fetch('https://chayns1.tobit.com/TappApi/Site/SlitteApp?SearchString=love&Skip=0&Take=14')
            .then((resp) => resp.json())
            .then((json) => {
                this.setState((prevState) => ({
                    data: prevState.data.concat(json.Data),
                    counter: prevState.counter + 14,
                }));
            })
            .catch(() => {});
    }

    generateSites() {

    }

    render() {
        return (
            <div className="sitesRoot">
                Test
            </div>
        );
    }
}
