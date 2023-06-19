import React from "react"
import Container from "react-bootstrap/Container"
import Image from "react-bootstrap/Image"
import styles from "./Rsvp.module.scss"
import invitationImage from "../photos/invitation.jpg"

function Invitation() {
    return (
        <>
            <Container className={styles['form-container']} style={{ marginBottom: '40px', marginTop: '40px', maxWidth: '650px' }}>
                <Image src={invitationImage} fluid />
            </Container>
        </>
    )
}

export default Invitation
