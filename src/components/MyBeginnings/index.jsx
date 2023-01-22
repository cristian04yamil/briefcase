import { Grid, Link, Row, Spacer, Text, Tooltip } from "@nextui-org/react"
import styles from './index.module.css'

const MyBeginnings = () => (
    <>
        <Spacer id="history" />
        <Spacer y={4} />
        <Text h2 align="center" color="white" >
            My story
        </Text>
        <Spacer y={2} />
        <Row justify="center">
            <Grid sm={12} md={8} direction="column">
                <Text color="white" size="1.1rem" margin={20}>
                    Before starting in this world of web development, I was a student at the University of Jujuy where I learned to program in different languages ​​and started my first steps as a programmer in 2014.
                </Text>
                <Text color="white" size="1.1rem" margin={20}>
                    After finishing university in 2017, I started my first job as a web developer for the municipality of Palpala where I worked for two years.
                </Text>
                {/* <Text color="white" size="1.1rem" margin={20}>
                    Si bien esa era mi idea inicial, no tenía idea de como hacerlo así que empece a buscar videos en YouTube de como crear tu propia página web, hasta que encontré una página para crear páginas web llamada <Link color icon href="https://www.wix.com/" rel="noreferrer noopener" target="_blank"><Text b>Wix</Text></Link>. Yo estaba muy emocionado porque estaba creando algo propio con mis propias manos, era básicamente como mi "pequeña marca personal". A medida que iba pasando el tiempo yo sentía la necesidad de agregar más y más cosas, hasta el punto en el que Wix <Tooltip className={styles.tooltip} content="No recuerdo puntualmente que era, pero estaba relacionado con los videos de YouTube." color="primary"><Text b className={styles.underline} size="1.1rem">no me permitía hacer lo que quería hacer</Text></Tooltip> y tampoco encontraba videos que me ayudaran con eso.
                </Text>
                <Text color="white" size="1.1rem" margin={20}>
                    Así que continué buscando en Internet como hacerlo, y me di cuenta que lo que yo quería hacer se podía pero con código y por desgracia no me daba tanta libertad como para utilizar código. Así que no desistí, y empece a buscar una solución, y la que encontré fue haciendo la página que había creado con Wix pero con HTML y CSS puro. Una vez que obtuve el mismo resultado visual de la página de WIX con la que realice desde cero, experimenté usando el código que había encontrado.
                </Text>
                <Text color="white" size="1.1rem" margin={20}>
                    A partir de ahí empece a tener curiosidad por crear páginas web, poco a poco me fui empapando a tal punto de conseguir la suficiente experienca para conseguir <Tooltip className={styles.tooltip} content="Para este momento tenía conocimientos básicos en HTML, CSS y jQuery" color="primary"><Text b className={styles.underline} size="1.1rem">mi primer trabajo en mi país natal Venezuela.</Text></Tooltip>
                </Text> */}
            </Grid>
        </Row>
        <Spacer y={2} />
        <Text h3 align="center" color="white" id="projects">
            What have I learned these past years?
        </Text>
        <Spacer y={2} />
        <Row justify="center">
            <Grid sm={12} md={8} direction="column">
                <Text color="white" size="1.1rem" margin={20}>  
                    Continuing with the story line, in my first job I had the opportunity to learn <Link color="warning" icon href="https://angularjs.org/" rel="noreferrer noopener" target="_blank"><Text b>AngularJS</Text></Link> y <Link color="warning" icon href="https://angular.io/" rel="noreferrer noopener" target="_blank"><Text b>Angular 2</Text></Link> with both technologies, I participated in the development of various applications. I began to apply everything I learned at the university html5, css, bootstrap  javasctip, git etc.
                </Text>
                <Text blockquote size="1.1rem" margin={20} color="primary" className={styles.blockquote}>
                    What I loved the most about this was how to make several applications coexist within the same one, regardless of the technologies in which they are made, as well as having the possibility of being on a computer totally isolated from the main application and enjoying of total freedom and independence in the development and deployment of new versions.                </Text>
                {/* <Text color="white" size="1.1rem" margin={20}>
                   Paralelamente a mi trabajo, estoy trabajando en mi propio blog el cual está hecho con <Link color="warning" icon href="https://svelte.dev/" rel="noreferrer noopener" target="_blank"><Text b>Svelte</Text></Link> (el cual debes haber visto en mis <Link color icon href="#projects">proyectos destacados</Link>) y aunque al momento de escribir esto, el backend en el que estoy trabajando no está conectado a él, estoy utilizando <Link color="warning" icon href="https://nestjs.com/" rel="noreferrer noopener" target="_blank"><Text b>NestJS</Text></Link> para crear las sesiones y la posiblidad crear contenido desde el blog.
                </Text>
                <Text color="white" size="1.1rem" margin={20}>
                    Además también tengo bastante tiempo trabajando como freelance en <Link color icon href="https://www.workana.com/freelancer/b4aebd5f18465eb956a6404f3f3d5995" rel="noreferrer noopener" target="_blank">Workana</Link>, desde que empecé siempre estuve en el area móvil, utilizando <Link color="warning" icon href="https://ionicframework.com/" rel="noreferrer noopener" target="_blank"><Text b>Ionic 3</Text></Link> y <Link color="warning" icon href="https://reactnative.dev/" rel="noreferrer noopener" target="_blank"><Text b>React Native</Text></Link> para desarrollar las aplicaciones.
                </Text> */}
                <Text color="white" size="1.1rem" margin={20}>
                    Finally today, in my current job I am working as Fullstack with <Link color="warning" icon href="https://reactjs.org/" rel="noreferrer noopener" target="_blank"><Text b>ReactJS</Text></Link> y <Link color="warning" icon href="https://nodejs.org/" rel="noreferrer noopener" target="_blank"><Text b>NodeJS</Text></Link>.
                </Text>
            </Grid>
        </Row>
        
        
    </>
)

export default MyBeginnings