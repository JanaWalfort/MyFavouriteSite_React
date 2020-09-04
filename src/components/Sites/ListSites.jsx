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

import React, { PureComponent } from 'react';
import { Button } from 'chayns-components';

import Sites from './SiteContent/Sites.jsx';
import Filter from './SiteContent/Filter.jsx';

import './MainContent.css';


export default class ListSites extends PureComponent {
    constructor() {
        super();
        this.state = {
            arrayData: [],
            searchString: 'love',
            counter: 0,
            timeout: null,
            showButton: true,
        };

        this.fetchSites = this.fetchSites.bind(this);
        this.search = this.search.bind(this);
    }

    componentDidMount() {
        this.fetchSites();
    }

    async fetchSites() {
        const { timeout } = this.state;
        if (timeout !== null) {
            clearTimeout(timeout);
        }
        try {
            const resp = await fetch(`https://chayns2.tobit.com/SiteSearchApi/location/search/${this.state.searchString}/?skip=${this.state.counter}&take=14`);
            const list = await resp.json();

            this.setState((prevState) => ({
                arrayData: [...prevState.arrayData.concat(list)],
                counter: prevState.counter + 14,
            }));
            if (this.state.arrayData.length % 14) {
                this.setState({
                    showButton: false,
                });
            } else {
                this.setState({
                    showButton: true,
                });
            }
        } catch (error) {
            console.log(error);
        }
    }

    search(event) {
        const { timeout } = this.state;
        const newSearchString = event.target.value;
        if (timeout !== null) {
            clearTimeout(timeout);
        }
        this.setState({
            timeout:
                setTimeout(() => {
                    if (newSearchString !== null && newSearchString !== '' && newSearchString !== ' ') {
                        this.setState({
                            arrayData: [],
                            searchString: newSearchString,
                            counter: 0,
                            timeout: 0,
                        });
                        this.fetchSites();
                    }
                }, 1000),
        });
    }

    render() {
        chayns.hideWaitCursor();
        const data = this.state.arrayData;
        return (
            <div className="mainBody">
                <div className="filterBar">
                    <Filter search={this.search} />
                </div>

                <div className="listSites">
                    {data.map((site) => <Sites
                        key={site.locationId}
                        name={site.locationName}
                        siteId={site.siteId}
                        goToSite={this.goToSite}
                    />)}
                </div>

                <div className="moreContainer">
                    {this.state.showButton
                        ? <Button id="more" className="button" onClick={this.fetchSites}>Mehr</Button>
                        : null}
                </div>
            </div>
        );
    }
}
