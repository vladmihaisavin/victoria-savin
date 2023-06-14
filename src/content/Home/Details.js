import React from "react"

import { LANGUAGE } from "../../utils/constants"

export default {
    [LANGUAGE.EN]: {
        Title: () => <span>Victoria Elena's Baptism</span>,
        Date: () => <span>14/09/2023</span>,
        Location: () => <span>Zada, Aleea Mihail Sadoveanu, Iași</span>,
        locationLink: "https://goo.gl/maps/RtGymfxYR1nYpw7s8"
    },
    [LANGUAGE.RO]: {
        Title: () => <span>Botezul Victoriei Elena</span>,
        Date: () => <span>14/09/2023</span>,
        Location: () => <span>Zada, Aleea Mihail Sadoveanu, Iași</span>,
        locationLink: "https://goo.gl/maps/RtGymfxYR1nYpw7s8"
    }
}
