import {JHTComponent} from '/node_modules/jsHtmlTemplate/index.js'

import {Baner} from './components/Baner.js'

export class App extends JHTComponent {
    components = {
        "Baner": Baner
    };

    data = {    
        "msg": "Hello World",
        "counter": {
            "current": 0,
            "increase": 0,
            "decrease": 0
        },
        "msgCounter": "counter: current = %1; increase = %2; decrease = %3"
    };

    template = '' +
        '<div class="appContainer">' +
        '    <div>' +
        '       <div class="msgBox">--- {$msg} ---</div>' +
        '       <div class="msgBox">--- {revertMsg()} ---</div>' +
        '    </div>' +
        '    <span class="spacer"/>' +
        '    <:baner msg="{$msg}"/>' +
        '    <br/><br />'+
        '    <div>' +
        '        <button {@keydown="counterIncres()"}>incres(1)</button>' +
        '        <button {@keydown="counterDecres(2)"}>decres(2)</button>' +
        '        <div class="box">counter.increase = {$:counter.increase}</div>' +
        '        <div class="box">counter.decrease = {$:counter.decrease}</div>' +
        '        <:baner msgCounter="{$msgCounter}" counter="{$:counter}" />' +
        '        <div class="msgBox">--- {revertStr($:msgCounter)} ---</div>' +
        '    </div>' +
        '</div>';

    counterIncres() {
        this.data.cntSw1++
    }

    counterDecres(counter) {
        this.data.cntSw2 += counter
    }

    revertMsg() {
        return this.revertStr(this.data.msg)
    }

    revertStr(str) {
        return str.split("").reverse().join("")
    }
}
