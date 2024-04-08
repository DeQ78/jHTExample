import {JHTComponent} from '/node_modules/jsHtmlTemplate/index.js'

export class Baner extends JHTComponent {
    data = {
        "msg": "",
        "counter": {
            "current": 0,
            "increase": 0,
            "decrease": 0
        },
        "msgCounter": "counter: current = %1; increase = %2; decrease = %3"
    };

    template = '<div class="baner">{createMessage()}</div>';

    createMessage() {
        let ret = this.data.msg;
        if (this.data.msgCounter != '') {
            ret = this.data.msgCounter;
        }
        return ret;
    }


}
