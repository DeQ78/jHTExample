import {App} from './App.js'

window.addEventListener('load', function () {
    try {
        let app = new App(
            '#app',
            null,
        )
        app.run()
    } catch (error) {
        console.error(error)
    }
})