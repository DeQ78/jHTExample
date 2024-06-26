"use strict";
import {App} from './App.js'

window.addEventListener('load', function () {
    try {
        let app = new App(
            {
                "htmlElement": '#app'
            }
        )
        app.initiate()
    } catch (error) {
        console.error(error)
    }
})