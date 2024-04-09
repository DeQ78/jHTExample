import {App} from './App.js'

window.addEventListener('load', function () {
    try {
        let app = new App(
            '#app',
            null,
        )
        app.initiate()
    } catch (error) {
        console.error(error)
    }
})