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
        '    <div>'.trim() +
        '       <div class="msgBox">--- {$msg} ---</div>'.trim() +
        '       <div class="msgBox">--- {revertMsg()} ---</div>'.trim() +
        '    </div>'.trim() +
        '    <span class="spacer"/>'.trim() +
        '    <:baner msg="{$msg}"/>'.trim() +
        '    <br/><br />'.trim()+
        '    <div>'.trim() +
        '        <button {@keydown="counterIncres()"}>incres(1)</button>'.trim() +
        '        <button {@keydown="counterDecres(2)"}>decres(2)</button>'.trim() +
        '        <div class="box">counter.increase = {$:counter.increase}</div>'.trim() +
        '        <div class="box">counter.decrease = {$:counter.decrease}</div>'.trim() +
        '        <:baner msgCounter="{$msgCounter}" counter="{$:counter}" />'.trim() +
        '        <div class="msgBox">--- {revertStr($:msgCounter)} ---</div>'.trim() +
        '    </div>'.trim() +
        '</div>'.trim();

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
