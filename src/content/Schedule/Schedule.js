import React from "react"

import { LANGUAGE } from "../../utils/constants"

export default {
    [LANGUAGE.EN]: [
        {
            Title: () => <>Holy Ceremony</>,
            Date: () => <>Friday, July 14th, 2023</>,
            Time: () => <>15:00 PM to 16:00 PM</>,
            Location: () => <>{`"Assumption of Mary" Church, Iasi`}</>,
            locationLink: "http://amdis.ro/",
            Address: () => (
                <>
                    <p>Bulevardul Ștefan cel Mare și Sfânt 26, Iași 700064</p>
                </>
            ),
            mapLink:
                "https://goo.gl/maps/MQ6UbWzKbh3qPpHm6",
            Details: () => (
                <>
                    <p>
                        The Holy Ceremony will take place at the "Assumption of Mary" Church, and will be succeeded by a short photo session.
                    </p>
                </>
            )
        },
        {
            Title: () => <>Party</>,
            Date: () => <>Friday, July 14th, 2023</>,
            Time: () => <>17:00 PM</>,
            Location: () => <>Zada, Aleea Mihail Sadoveanu, Iași</>,
            locationLink: "https://www.facebook.com/p/Zada-100051989815586/",
            Address: () => (
                <>
                    <p>Aleea Mihail Sadoveanu, Iași 707405</p>
                </>
            ),
            mapLink:
                "https://goo.gl/maps/RtGymfxYR1nYpw7s8",
            Details: () => (
                <>
                    <p>
                        The party will take place in the Copou Vineyard, at the Zada Events location.
                        Let's have some fun!
                    </p>
                </>
            )
        },
    ],
    [LANGUAGE.RO]: [
        {
            Title: () => <>Biserică</>,
            Date: () => <>Vineri, 14 Iulie, 2023</>,
            Time: () => <>de la 15:00 PM până la 16:00 PM</>,
            Location: () => <>{`Biserica "Adormirea Maicii Domnului", Iași`}</>,
            locationLink: "http://amdis.ro/",
            Address: () => (
                <>
                    <p>Bulevardul Ștefan cel Mare și Sfânt 26, Iași 700064</p>
                </>
            ),
            mapLink:
                "https://goo.gl/maps/pXB33GZ34UQgZbFUA",
            Details: () => (
                <>
                    <p>
                        Slujba religioasa se va celebra la Biserica "Adormirea Maicii Domnului" și va fi urmată de o scurtă sesiune foto.
                    </p>
                </>
            )
        },
        {
            Title: () => <>Petrecere</>,
            Date: () => <>Vineri, 14 Iulie, 2023</>,
            Time: () => <>de la 17:00 PM</>,
            Location: () => <>Zada, Aleea Mihail Sadoveanu, Iași</>,
            locationLink: "https://www.facebook.com/p/Zada-100051989815586/",
            Address: () => (
                <>
                    <p>Aleea Mihail Sadoveanu, Iași 707405</p>
                </>
            ),
            mapLink:
                "https://goo.gl/maps/RtGymfxYR1nYpw7s8",
            Details: () => (
                <>
                    <p>
                        Petrecerea va avea loc in podgoria Copou, la locatia pentru evenimente Zada.
                        Vă așteptăm să ne distrăm împreună!
                    </p>
                </>
            )
        },
    ],
}
