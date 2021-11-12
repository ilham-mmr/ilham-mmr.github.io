import React from 'react'
import { Center, Flex, Text } from '@chakra-ui/layout';
import Icon from '@chakra-ui/icon';
import { SiGithub } from 'react-icons/si';
import { IconButton } from '@chakra-ui/button';
import { Tooltip } from "@chakra-ui/react"

const Project = ({ icon, title, link }) => {
    console.log(link);
    return (
        <Flex rounded="2xl" direction="column" mt={4} bg="#457b9d" h="40vh" w="40vh" justify="flex-end" me={3}>
            <Center>
                <Icon color="white" p="4" as={icon} w="20" h="20" />

            </Center>
            <Text color="white" p="4" fontSize="lg" fontWeight="bold" textAlign='center'>
                {title}
            </Text>
            <Tooltip label="Go to the repo" aria-label="A tooltip">
                <IconButton rounded="2xl" icon={<SiGithub />} color='#f1faee' onClick={() =>
                    window.open(link)
                } ></IconButton>
            </Tooltip>
        </Flex>
    )
}

export default Project
