import React from "react"

import { LANGUAGE } from "../../utils/constants"

export default {
    [LANGUAGE.EN]: () => <span>Baptism incoming!</span>,
    [LANGUAGE.RO]: () => <span>Avem un botez!</span>
}
