import Icon from '@chakra-ui/icon'
import { Center, Flex, Heading, HStack } from '@chakra-ui/layout'
import React from 'react'
import { SiVisualstudiocode, SiFlutter, SiReact, SiHtml5, SiCss3, SiLaravel, SiMysql, SiMongodb, SiJava, SiJavascript, SiDart, SiPhp, SiPython } from 'react-icons/si'
import { FaBootstrap, FaNode, FaGithub } from 'react-icons/fa'
import { DiGit } from 'react-icons/di'
import { useMediaQuery } from '@chakra-ui/media-query'
import { Container } from "@chakra-ui/react"

function Techs() {
    const [isNotSmallerScreen] = useMediaQuery("(min-width:680px)");

    return (
        <>


            <Heading as="h2" size="xl" mb='2' mt='2' textAlign='center'  bgGradient="linear(to-l, #a8dadc, #457b9d)" bgClip='text'>
                My Tech Stack
            </Heading>

            <Flex direction={isNotSmallerScreen ? 'row' : 'column'} p={isNotSmallerScreen ? '12' : '0'} marginBottom='3'>

                <Container mb='5' >
                    <Heading as="h3" size="md" mb='5' textAlign='center'>
                        Frontend Technologies
                    </Heading>
                    <Center >
                        <HStack>
                            <Icon as={SiFlutter} boxSize='50' />
                            <Icon as={SiHtml5} boxSize='50' />
                            <Icon as={SiCss3} boxSize='50' />
                            <Icon as={SiReact} boxSize='50' />
                            <Icon as={FaBootstrap} boxSize='50' />
                        </HStack>
                    </Center>
                </Container>
                <Container mb='5' >
                    <Heading as="h3" size="md" mb='5' textAlign='center'>
                        Backend Technologies
                    </Heading>
                    <Center >
                        <HStack>
                            <Icon as={SiLaravel} boxSize='50' />
                            <Icon as={FaNode} boxSize='50' />
                            <Icon as={SiMysql} boxSize='50' />
                            <Icon as={SiMongodb} boxSize='50' />
                        </HStack>
                    </Center>

                </Container>
                <Container mb='5' >
                    <Heading as="h3" size="md" mb='5' textAlign='center'>
                        Programming Languages
                    </Heading>
                    <Center >

                        <HStack>
                            <Icon as={SiJava} boxSize='50' />
                            <Icon as={SiJavascript} boxSize='50' />
                            <Icon as={SiDart} boxSize='50' />
                            <Icon as={SiPhp} boxSize='50' />
                            <Icon as={SiPython} boxSize='50' />
                        </HStack>
                    </Center>

                </Container>
                <Container mb='5' >
                    <Heading as="h3" size="md" mb='5' textAlign='center'>
                        Other tools
                    </Heading>
                    <Center >

                        <HStack>
                            <Icon as={DiGit} boxSize='50' />
                            <Icon as={FaGithub} boxSize='50' />
                            <Icon as={SiVisualstudiocode} boxSize='50' />
                        </HStack>
                    </Center>
                </Container>
            </Flex>



        </>
    )
}

export default Techs
