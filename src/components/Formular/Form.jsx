/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable react/jsx-tag-spacing */
import React, { PureComponent } from 'react';
import { Accordion, Input } from 'chayns-components';
import './formular.css';

export default class FormCompunents extends PureComponent {
    constructor() {
        super();
        this.state = {

        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        const { firstName } = chayns.env.user;
        if (chayns.env.user.isAuthenticated) {
            const name = document.querySelector('#nameInput').value;
            const email = document.querySelector('#emailInput').value;
            const adress = document.querySelector('#adressInput').value;
            const url = document.querySelector('#urlInput').value;
            const comment = document.querySelector('#commentInput').value;

            const message = `Name: ${name}, e-Mail: ${email}, Adresse: ${adress}, url: ${url}, Kommentar: ${comment}`;

            chayns.intercom.sendMessageToPage({
                text: message,
            })
                .then(() => {
                    if (name && email) {
                        chayns.dialog.alert(`${firstName}, das Formular wurde abgeschickt.`);
                    } else {
                        chayns.dialog.alert('Fülle bitte die Felder Name und e-Mail aus.');
                    }
                });
        } else {
            chayns.dialog.alert('Login missing', 'To send a message, you have to login.');
        }
        console.log('submitted!');
    }

    render() {
        return (
            <div>
                <form className="formular-form">
                    <Accordion head="eigene Seite hinzufügen">
                        <div className="accordion__content">
                            <p>Hier kannst du einen Antrag ausfüllen, um deine Seiten bei My Favourite Sites zu speichern!</p>
                            <div className="flexContainer">
                                <Input id="nameInput" type="text" dynamic="true" placeholder="Name" />
                                <Input id="emailInput" type="text" dynamic="true" placeholder="e-Mail" />
                                <Input id="adressInput" type="text" dynamic="true" placeholder="Adresse" />
                                <Input id="urlInput" type="text" dynamic="true" placeholder="Url der Seite" />
                                <Input id="commentInput" type="text" dynamic="true" placeholder="Kommentar" />

                                <button type="button" id="sendButton" className="button" onClick={this.handleSubmit}>Absenden</button>
                            </div>
                        </div>
                    </Accordion>
                </form>
            </div>
        );
    }
}
