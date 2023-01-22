import { Grid, Spacer, Text } from "@nextui-org/react";
import Project from "./Project";

const listOfProjects = [
    {
        id: 1,
        name: 'Cristian Dev - Blog',
        description: 'Un portal actualmente en desarrollo, inicialmente creado como blog personal.',
        urlProject: 'https://csalazar.dev',
        urlCode: 'https://github.com/cristian04yamil',
        technologies: 'React',
        image: '/dartiles.dev.jpg'
    }
]

const Projects = () => (
    <>
        <Spacer id="projects"/>
        <Spacer y={4} />
        <Text h2 align="center" color="white">
            Proyectos Destacados
        </Text>
        <Spacer y={2}/>
        <Grid.Container gap={2} justify="center">
            {
                listOfProjects
                    .map(project => {
                        return <Grid xs={12} key={project.id} direction="column">
                            <Project {...project}/>
                        </Grid>
                    })
            }
        </Grid.Container>
    </>
)

export default Projects