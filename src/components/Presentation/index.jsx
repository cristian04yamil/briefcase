import { Avatar, Button, Col, Grid, Row, Text } from "@nextui-org/react"
import { FiMail } from "react-icons/fi"
import ProfileImg from '../../assets/me.jpg'
import styles from './index.module.css'

const Presentation = () => {
    const contact = () => {
        window.open("mailto:cristiantita91@gmail.com?subject=Quisiera ponerme en contacto contigo");
    }

    return (
        <Row className={styles.presentation} align="center">
            <Grid.Container gap={5} justify="center">
                <Grid>
                    <Col className={styles.avatarContainer}>
                        <Avatar className={styles.avatar} size={250} src={ProfileImg} bordered alt="profile image" />
                    </Col>
                </Grid>
                <Grid xs={12} sm={6}>
                    <Col>
                            <Text h6 size={15} color="white" style={{ margin: 0 }}>
                                Hello, my name is
                            </Text>
                            <Text h1 color="white" style={{ margin: 0 }}>
                                Cristian Salazar
                            </Text>
                            <Text h3 color="#efe" style={{ margin: 0 }}>
                                Developer web applications
                            </Text>
                            <Text h4 color="#b6b6b6" style={{ margin: 0, marginBottom: 15 }}>
                            I'm a frontend developer. I consider myself a proactive person and always looking to create new things and new challenges. 🚀.
                            </Text>
                            <Button rounded auto iconRight={<FiMail />} onClick={contact}>
                                Contact me
                            </Button>
                    </Col>
                </Grid>
            </Grid.Container>
        </Row>
    )
}

export default Presentation