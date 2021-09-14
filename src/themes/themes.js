import _ from 'lodash'
import { blue } from './blue/blue'
import { red } from './red/red'

export const themes = {
    'blue': blue,
    'red': red
}

export function activateTheme(theme) {
    for (let p in theme) {
        let prefix = "--" + p;
        for (let k in theme[p]) {
            let key = _.startCase(_.toLower(k));
            document.querySelector(':root').style.setProperty(prefix+key, theme[p][k]);
        }
    }
}