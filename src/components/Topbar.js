import { Flex, Heading, Spacer } from '@chakra-ui/layout'
import { IconButton } from '@chakra-ui/button'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

import React from 'react'

function Topbar() {
    return (
        <Flex w='100%'>
            <Heading ml="8" size="md" fontWeight="semibold" color="#a8dadc" >Ilham MMR</Heading>
            <Spacer />
            <IconButton ml={2} icon={<FaGithub />} isRound="true" boxSize='50' onClick={() => { window.open('https://github.com/ilham-mmr') }}></IconButton>
            <IconButton ml={2} icon={<FaLinkedin />} isRound="true" boxSize='50' onClick={() => { window.open('https://www.linkedin.com/in/ilham-mmr/') }}></IconButton>
        </Flex>
    )
}

export default Topbar
