"use strict";

class Navigationsleiste {

    constructor() {
        this._html = this._html_generieren();
    }
    
    _html_generieren() {
        let navigationsleiste = document.createElement("nav");
        navigationsleiste.setAttribute("id", "navigationsleiste");

        let anker = document.createElement("a");
        anker.setAttribute("href", "#");
        navigationsleiste.insertAdjacentElement("afterbegin", anker);

        let span = document.createElement("span");
        span.setAttribute("id", "markenname");
        span.textContent = "Liqui-Planer";
        anker.insertAdjacentElement("afterbegin", span);

        return navigationsleiste;
    }

    anzeigen() {
        let body = document.querySelector("body");
        if (body !== null) {
            body.insertAdjacentElement("afterbegin", this._html);
        }
    }

}