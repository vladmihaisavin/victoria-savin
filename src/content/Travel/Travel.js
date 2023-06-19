import React from "react"

import { LANGUAGE } from "../../utils/constants"

export default {
    [LANGUAGE.EN]: [
        {
            Title: () => <>Holy Ceremony</>,
            Date: () => <>Friday, July 14th, 2023</>,
            Time: () => <>15:00 PM to 16:00 PM</>,
            Location: () => <>{`"Assumption of Mary" Church, Iasi`}</>,
            Map: () => <iframe title={`"Assumption of Mary" Church, Iasi`} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d678.2222913175506!2d27.582909569685526!3d47.16002511008535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40cafb764993cf55%3A0x2cab6fc64d17f426!2sAssumption%20of%20Mary%20Church%2C%20Ia%C8%99i%2C%20Bulevardul%20%C8%98tefan%20cel%20Mare%20%C8%99i%20Sf%C3%A2nt%2026%2C%20Ia%C8%99i%20700064!5e0!3m2!1sen!2sro!4v1686771305085!5m2!1sen!2sro" width="300" height="200" frameborder="0" style={{ border: 0 }} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        },
        {
            Title: () => <>Party</>,
            Date: () => <>Friday, July 14th, 2023</>,
            Time: () => <>17:00 PM</>,
            Location: () => <>Zada, Aleea Mihail Sadoveanu, Iași</>,
            Map: () => <iframe title="Zada, Aleea Mihail Sadoveanu, Iași" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2710.465491312747!2d27.525997076933702!3d47.207473515453145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40cae3c5530a8da1%3A0x4a9c40b73009fa86!2sZada!5e0!3m2!1sen!2sro!4v1686771398908!5m2!1sen!2sro" width="300" height="200" frameborder="0" style={{ border: 0 }} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        },
    ],
    [LANGUAGE.RO]: [
        {
            Title: () => <>Biserică</>,
            Date: () => <>Vineri, 14 Iulie, 2023</>,
            Time: () => <>de la 15:00 PM până la 16:00 PM</>,
            Location: () => <>{`Biserica "Adormirea Maicii Domnului", Iași`}</>,
            Map: () => <iframe title={`Biserica "Adormirea Maicii Domnului", Iași`} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d678.2223029349262!2d27.583553300000002!3d47.160024199999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40cafb764a20f3df%3A0x83817fb81da6424f!2sBiserica%20Adormirea%20Maicii%20Domnului!5e0!3m2!1sen!2sro!4v1686771367168!5m2!1sen!2sro" width="300" height="200" frameborder="0" style={{ border: 0 }} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        },
        {
            Title: () => <>Petrecere</>,
            Date: () => <>Vineri, 14 Iulie, 2023</>,
            Time: () => <>de la 17:00 PM</>,
            Location: () => <>Zada, Aleea Mihail Sadoveanu, Iași</>,
            Map: () => <iframe title="Zada, Aleea Mihail Sadoveanu, Iași" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2710.465491312747!2d27.525997076933702!3d47.207473515453145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40cae3c5530a8da1%3A0x4a9c40b73009fa86!2sZada!5e0!3m2!1sen!2sro!4v1686771398908!5m2!1sen!2sro" width="300" height="200" frameborder="0" style={{ border: 0 }} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        },
    ],
}