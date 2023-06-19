import React from "react"

import { LANGUAGE } from "../../utils/constants"

const fontFamily = 'cursive';
const fontSize = '2.5em';
const color = '#eb7388';

export default {
    [LANGUAGE.EN]: {
        Title: () => <span style={{ fontFamily, fontSize, color }}>Victoria Elena</span>,
        Date: () => <span style={{ fontFamily }}>14/07/2023</span>,
        Location: () => <span style={{ fontFamily }}>Zada, Aleea Mihail Sadoveanu, Iași</span>,
        locationLink: "https://goo.gl/maps/RtGymfxYR1nYpw7s8"
    },
    [LANGUAGE.RO]: {
        Title: () => <span style={{ fontFamily, fontSize, color }}>Victoria Elena</span>,
        Date: () => <span style={{ fontFamily }}>14/07/2023</span>,
        Location: () => <span style={{ fontFamily }}>Zada, Aleea Mihail Sadoveanu, Iași</span>,
        locationLink: "https://goo.gl/maps/RtGymfxYR1nYpw7s8"
    }
}
