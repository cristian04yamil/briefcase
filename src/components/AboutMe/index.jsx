import { Button, Grid, Link, Row, Spacer, Text } from "@nextui-org/react";
import { FiArrowDown } from "react-icons/fi";
import styles from './index.module.css'

const AboutMe = () => (
    <>
        <Spacer id="about-me" />
        <Spacer y={4} />
        <Text h2 align="center" color="white">
            About me
        </Text>
        <Spacer y={2}/>
        <Row justify="center">
            <Grid sm={12} md={8} direction="column" className={styles.aboutMe}>
                <Text color="#f6f6f6" size="1.1rem" margin={20}>
                    My name is Cristian Salazar, I am a <b>Web developer</b> and passionate about technology with more than 5 years of experience. 👨‍💻
                </Text>
                <Text color="#f6f6f6" size="1.1rem" margin={20}>
                    <b>One of my goals 🏅, is to make useful services or applications for people,</b> besides this, I enjoy and I love creating new things. 😍
                </Text>
                <Text color="#f6f6f6" size="1.1rem" margin={20}>
                I am a person committed to my work, I have innovative ideas, I like
                    challenges and new projects that the company where I intend to work could propose to me
                    I have the facility to relate to people, I like to work in coordination
                    with the different headquarters, I have no problem working under pressure, I like
                    face the obstacles that arise and my mission in every job is to meet
                    the objectives of the company and my work team. 🤩
                </Text>
                <Text color="#f6f6f6" size="1.1rem" margin={20}>
                    In addition to programming, <b>I get along well with soccer and paddle tennis.</b> On the other hand, I love getting to know new places 🌴 and different cultures 🙆‍♂️. 
                </Text>
                <Grid className={styles.callToAction}>
                    <Button rounded color="secondary" iconRight={<FiArrowDown />} auto>
                        <Link href="#history">¿I tell you my story?</Link>
                    </Button>
                </Grid>
            </Grid>
        </Row>
    </>
)

export default AboutMe