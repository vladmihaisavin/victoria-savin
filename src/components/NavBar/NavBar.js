import React from "react"
import { useCookies } from "react-cookie"
import { NavLink as RouterNavLink, withRouter } from "react-router-dom"
import Navbar from "react-bootstrap/Navbar"
import NavLink from "react-bootstrap/NavLink"
import Nav from "react-bootstrap/Nav"
import NavItem from "react-bootstrap/NavItem"
import Dropdown from "react-bootstrap/Dropdown"
import ReactCountryFlag from "react-country-flag"
import classNames from "classnames"

import { selectLanguage } from "../../utils/cookies"
import { LANGUAGE } from "../../utils/constants"
import { navigation } from "../../content"

import styles from "./NavBar.module.scss"

const NavBar = () => {
    const [cookies, setCookie] = useCookies(["language"])

    const handleSelectLanguage = (lang) => {
        setCookie("language", lang, { path: "/" })
    }

    const languageCodes = {
        [LANGUAGE.RO]: "RO",
        [LANGUAGE.EN]: "US",
    }

    const {
        schedule: ScheduleNavText,
        travel: TravelNavText,
        invitation: InvitationNavText,
        gift: GiftNavText,
    } = navigation[selectLanguage(cookies)]

    return (
        <Navbar
            variant="dark"
            expand="lg"
            sticky="top"
            className={styles.navigation}
        >
            <RouterNavLink to="/" className={classNames("navbar-brand", styles.brand)}>
                Victoria Elena
            </RouterNavLink>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Nav>
                    <RouterNavLink to="/invitation" className="nav-link" role="button">
                        <InvitationNavText />
                    </RouterNavLink>
                    <RouterNavLink to="/schedule" className="nav-link" role="button">
                        <ScheduleNavText />
                    </RouterNavLink>
                    <RouterNavLink to="/travel" className="nav-link" role="button">
                        <TravelNavText />
                    </RouterNavLink>
                    <RouterNavLink to="/gift" className="nav-link" role="button">
                        <GiftNavText />
                    </RouterNavLink>
                </Nav>
                <Nav className="ml-auto">
                    <Dropdown as={NavItem}>
                        <Dropdown.Toggle as={NavLink}>
                            <ReactCountryFlag
                                countryCode={
                                    languageCodes[selectLanguage(cookies)]
                                }
                                svg
                            />{" "}
                            {selectLanguage(cookies)}
                        </Dropdown.Toggle>
                        <Dropdown.Menu alignRight>
                            <Dropdown.Item
                                eventKey={LANGUAGE.EN}
                                onSelect={handleSelectLanguage}
                            >
                                <ReactCountryFlag countryCode="US" svg />{" "}
                                {LANGUAGE.EN}
                            </Dropdown.Item>
                            <Dropdown.Item
                                eventKey={LANGUAGE.RO}
                                onSelect={handleSelectLanguage}
                            >
                                <ReactCountryFlag countryCode="RO" svg />{" "}
                                {LANGUAGE.RO}
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default withRouter(NavBar)