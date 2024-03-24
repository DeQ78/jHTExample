import {jsHtmlTemplate} from './node_modules/jsHtmlTemplate/index.js';

window.addEventListener('load', function () {

    let jht = new jsHtmlTemplate()
    console.log(jht.modiffy('Hello world', 'world', '???'))

    // let envBox = document.getElementById('envBox');
    // let appEnv = new AppEnv(envBox);
    //
    // let btnStart = document.getElementById('btnStart');
    // btnStart.addEventListener('click', (event) => {
    //     appEnv.run();
    // });
    //
    // let btnStop = document.getElementById('btnStop');
    // btnStop.addEventListener('click', (event) => {
    //     appEnv.isRunning = false;
    // });
})

