import React from "react"

import { LANGUAGE } from "../../utils/constants"

export default {
    [LANGUAGE.EN]: {
        Heading: () => <>Schedule</>,
        SubHeading: () => (
            <span>
                Here's what to expect during the Baptism day. We can't wait
                to celebrate with you!
            </span>
        )
    },
    [LANGUAGE.RO]: {
        Heading: () => <>Program</>,
        SubHeading: () => (
            <span>
                Acesta este programul botezului Victoriei.
                Suntem nerăbdători să celebrăm acest eveniment alături de dumneavoastră!
            </span>
        )
    }
}
