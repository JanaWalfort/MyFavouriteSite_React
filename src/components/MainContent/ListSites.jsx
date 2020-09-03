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
import Sites from './Sites.jsx';
import './MainContent.css';

/* pic.style = `background-image: url(https://sub60.tobit.com/l/${locationId}); width: 57px; height: 57px`; */
/* defaultBackground.style = 'background-image: url(https://sub60.tobit.com/l/152342); width: 57px; height: 57px'; */

export default class ListSites extends PureComponent {
    constructor() {
        super();
        this.state = {
            arrayData: [],
            searchString: 'love',
            counter: 0,
        };

        this.fetchSites = this.fetchSites.bind(this);
        this.goToSite = this.goToSite.bind(this);
    }

    componentDidMount() {
        this.fetchSites();
    }

    fetchSites() {
        fetch(`https://chayns1.tobit.com/TappApi/Site/SlitteApp?SearchString=${this.state.searchString}&Skip=${this.state.counter}&Take=28`)
            .then((resp) => resp.json())
            .then((json) => {
                this.setState((prevState) => ({
                    arrayData: [...prevState.arrayData.concat(json.Data)],
                    counter: prevState.counter + 28,
                }));
                console.log(`fetch: ${this.state.searchString}`);
            })
            .catch(() => { console.log('error!'); });
    }

    goToSite(event) {
        const siteId = event.target.id;
        chayns.openUrlInBrowser(`https://chayns.net/${siteId}`);
    }

    render() {
        chayns.hideWaitCursor();
        const data = this.state.arrayData;
        return (
            <div className="mainBody">
                <div className="listSites">
                    {data.map((site) => <Sites
                        key={site.locationId}
                        name={site.appstoreName.substring(0, 10)}
                        siteId={site.siteId}
                        goToSite={this.goToSite}
                    />)}
                </div>
                <div className="moreContainer">
                    <Button id="more" className="button" onClick={this.fetchSites}>Mehr</Button>
                </div>
            </div>
        );
    }
}
