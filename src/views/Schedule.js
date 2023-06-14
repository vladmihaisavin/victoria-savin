import React from "react"
import { useCookies } from "react-cookie"
import Container from "react-bootstrap/Container"

import { Title, Schedule as ScheduleText } from "../content/Schedule"
import Header from "../components/Header"
import Item from "../components/Item"
import headerImg from "../photos/img_2.jpg"
import { selectLanguage } from "../utils/cookies"

function Schedule() {
    const [cookies] = useCookies(["language"])
    const language = selectLanguage(cookies)

    const { Heading, SubHeading } = Title[selectLanguage(cookies)]
    const scheduleItems = ScheduleText[language]

    return (
        <>
            <Header
                imageUrl={headerImg}
                Heading={Heading}
                SubHeading={SubHeading}
            />
            <Container fluid>
                {scheduleItems.map(
                    (
                        {
                            Title,
                            Date,
                            Time,
                            Location,
                            locationLink,
                            Address,
                            Details,
                            mapLink,
                        },
                        idx
                    ) => (
                        <Item
                            key={idx}
                            LeftMainTitle={Title}
                            LeftFirstSubTitle={Date}
                            LeftSecondSubTitle={Time}
                            RightMainTitle={() => (
                                <a
                                    href={locationLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Location />
                                </a>
                            )}
                            RightFirstContact={() => (
                                <a
                                    href={mapLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Address />
                                </a>
                            )}
                            RightDetails={Details}
                        />
                    )
                )}
            </Container>
        </>
    )
}

export default Schedule
