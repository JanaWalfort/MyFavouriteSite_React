/* eslint-disable react/jsx-tag-spacing */
import React, { PureComponent } from 'react';
import { Accordion } from 'chayns-components';
import './formular.css';

export default class FormCompunents extends PureComponent {
    render() {
        return (
            <div>
                <form className="formular-form">
                    <Accordion head="eigene Seite hinzufügen">
                        <div className="accordion__content">
                            <p>Hier kannst du einen Antrag ausfüllen, um deine Seiten bei My Favourite Sites zu speichern!</p>
                            <div className="flexContainer">
                                <input className="input textInp" type="text" placeholder="Name" />
                                <input className="input textInp" type="text" placeholder="e-Mail" />
                                <input className="input textInp" type="text" placeholder="Adresse" />
                                <input className="input textInp" type="text" placeholder="Url der Seite" />
                                <input className="input textInp" type="text" placeholder="Kommentar" />

                                <button type="button" id="sendButton" className="button">Absenden</button>
                            </div>
                            { /*
                            onClick={this.props.handleSubmit}
                            */ }
                        </div>
                    </Accordion>
                </form>
            </div>
        );
    }
}
FormCompunents.propTypes = {
    // name: PropTypes.string.isRequired,
    // props: propTypes.handleSubmit,
};
