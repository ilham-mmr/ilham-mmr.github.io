import React from 'react'
import { useMediaQuery } from '@chakra-ui/media-query';
import { Box, Flex, Heading } from '@chakra-ui/layout';
import { SiFlutter, SiReact, SiNodedotjs, SiLaravel } from 'react-icons/si';

import Project from './Project';
function Projects() {

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");


    return (
        <Flex direction={isNotSmallerScreen ? "row" : "column"} >

            <Box alignSelf="center" px="32" py="16">

                <Heading size="lg" mb='5' textAlign='center'>
                    My Projects
                </Heading>
                <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={8} >
                    <Project icon={SiFlutter} title='HayuTutor - Tutoring Services Platform' link='https://github.com/ilham-mmr/HayuTutor' />
                    <Project icon={SiReact} title='Todo List App' link='https://github.com/ilham-mmr/react-simple-todo-app' />
                    <Project icon={SiNodedotjs} title='YelpCamp Clone' link='https://github.com/ilham-mmr/YelpCamp' />
                    <Project icon={SiLaravel} title='CRUD KP Laravel' link='https://github.com/ilham-mmr/CRUD-KP-Laravel' />
                </Flex>
            </Box>
        </Flex>
    )
}

export default Projects