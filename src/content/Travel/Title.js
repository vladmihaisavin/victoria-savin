import React from "react"

import { LANGUAGE } from "../../utils/constants"

export default {
    [LANGUAGE.EN]: {
        Heading: () => <>Travel</>,
        SubHeading: () => (
            <>
                Here is some information about how to get to the places where the events are hosted.
            </>
        ),
    },
    [LANGUAGE.RO]: {
        Heading: () => <>Cum ajung?</>,
        SubHeading: () => (
            <>
                Aici sunt informații despre cum puteți ajunge la evenimente.
            </>
        ),
    },
}
