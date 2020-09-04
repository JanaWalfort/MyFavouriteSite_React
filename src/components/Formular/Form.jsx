/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
/* eslint-disable react/jsx-tag-spacing */
import React, { PureComponent } from 'react';
import { Accordion, Input, Button } from 'chayns-components';
import './formular.css';

export default class FormCompunents extends PureComponent {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
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
                    if (name && email && url) {
                        chayns.dialog.alert(`${firstName}, das Formular wurde abgeschickt.`);
                    } else {
                        chayns.dialog.alert('Fülle bitte die Felder Name, e-Mail und Url aus.');
                    }
                });
        } else {
            chayns.dialog.alert('Login missing', 'Um das Formular absenden zu können musst du angemeldet sein.');
        }
    }

    render() {
        return (
            <form className="formular-form">
                <Accordion head="eigene Seite hinzufügen">
                    <div className="accordion__content">
                        <p>Hier kannst du einen Antrag ausfüllen, um deine Seiten bei My Favourite Sites zu speichern!</p>
                        <div className="flexContainer">
                            <Input
                                id="nameInput"
                                type="text"
                                dynamic
                                placeholder="Name"
                            />
                            <Input
                                id="emailInput"
                                type="text"
                                dynami
                                placeholder="e-Mail"
                            />
                            <Input
                                id="adressInput"
                                type="text"
                                dynamic
                                placeholder="Adresse"
                            />
                            <Input
                                id="urlInput"
                                type="text"
                                dynamic
                                placeholder="Url der Seite"
                            />
                            <Input
                                id="commentInput"
                                type="text"
                                dynamic
                                placeholder="Kommentar"
                            />

                            <Button
                                id="sendButton"
                                className="button"
                                onClick={() => { this.handleSubmit(); }}
                            >
                                Absenden
                            </Button>

                        </div> {/* / flexContainer */}
                    </div> {/* accordion__content */}
                </Accordion>
            </form>
        );
    }
}
