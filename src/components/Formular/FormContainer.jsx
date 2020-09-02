/* eslint-disable no-console */
/* eslint-disable react/jsx-tag-spacing */
/* eslint-disable class-methods-use-this */
/* eslint-disable lines-between-class-members */
/* eslint-disable no-unused-vars */
import React, { PureComponent } from 'react';
import FormComp from './FormComponents.jsx';

export default class Formular extends PureComponent {
    constructor() {
        // eslint-disable-next-line no-unused-expressions
        super();
        this.state = {
            // eslint-disable-next-line react/no-unused-state
            test: 'test',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        console.log('submitted!');
    }

    render() {
        return (
            <FormComp handleSubmit={this.handleSubmit} />
        );
    }
}
