import {JHTComponent} from './node_modules/jsHtmlTemplate/index.js'

export class App extends JHTComponent {
    data = {
        "msg": "aaaa",
        "cntSw1": 0,
        "cntSw2": 0
    }

    template = '' +
        '<div class="appContainer">' +
        '<div>' +
        '<button {@keydown="toggleSw1"}>toggle box1 = ${:cntSw1}</button>' +
        '<button {@keydown="toggleSw2(2)"}>toggle box2 = ${:cntSw2}</button>' +
        '<:baner cntSw1="{:cntSw1}" cntSw2="{:cntSw2}" msg="${msg}" />' +
        '</div>' +
        '<div class="box1">--- ${msg} ---</div>' +
        '<div class="box1">box1 => ${:cntSw1}</div>' +
        '<div class="box2">box2 => ${:cntSw2}</div>' +
        '</div>'

    toggleSw1() {
        this.data.cntSw1++
    }

    toggleSw2(counter) {
        this.data.cntSw2 += counter
    }
}
