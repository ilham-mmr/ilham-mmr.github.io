import React from 'react'
import { Center, Flex, Text } from '@chakra-ui/layout';
import Icon from '@chakra-ui/icon';
import { SiGithub } from 'react-icons/si';
import { IconButton } from '@chakra-ui/button';

const Project = ({ icon, title, link }) => {
    console.log(link);
    return (
        <Flex rounded="xl" direction="column" mt={4} bg="#457b9d" h="30vh" w="30vh" justify="flex-end" me={3}>
            <Center>
                <Icon color="white" p="4" as={icon} w="24" h="24" />

            </Center>
            <Text color="white" p="4" fontSize="xl" fontWeight="semibold" textAlign='center'>
                {title}
            </Text>
            <IconButton icon={<SiGithub />} color='#f1faee' onClick={() =>
                window.open(link)
            } ></IconButton>
        </Flex>
    )
}

export default Project
