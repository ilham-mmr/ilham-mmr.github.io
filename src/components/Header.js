import { Button } from '@chakra-ui/button';
import { Flex, Box, Text, Stack, Circle } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';
import { Image, Tooltip } from "@chakra-ui/react"
import React from 'react'

function Header() {

    const [isNotSmallerScreen] = useMediaQuery("(min-width:680px)");
    return (
        <Stack >
            <Circle position="absolute" bg="blue.100" opacity="0.1"
                w="200px" h="200px" alignSelf="flex-end" />

            <Flex direction={isNotSmallerScreen ? 'row' : 'column'} p={isNotSmallerScreen ? '18' : '0'} marginBottom='6' alignSelf='flex-start'>
                <Box mt={isNotSmallerScreen ? '0' : 16} alignSelf='flex-start' margin='0'>
                    <Text fontSize='5xl' fontWeight='semibold'>Hi, my name is </Text>
                    <Text fontSize='7xl' fontWeight='bold' bgGradient="linear(to-l, #a8dadc, #457b9d)" bgClip='text' >Ilham Muslim M.R.</Text>
                    <Text color="gray.400" fontSize="2xl">
                        A motivated final year software engineering student and full-stack developer.
                    </Text>
                    <Text color="gray.400" fontSize="2xl" >
                        I am very passionate about technology especially mobile and web development.
                    </Text>
                    <Text color="gray.400" fontSize="2xl" mb='3'>
                        I also like solving data structures and algorithms questions.
                    </Text>
                    <Text color="gray.400" fontSize="2xl" mb='3'>
                    </Text>
                    <Tooltip label="Check out my resume here!" aria-label="A tooltip">
                        <Button colorScheme="blue" size="lg" onClick={() =>
                            window.open("")
                        } >
                            My Resume
                        </Button>
                    </Tooltip>


                </Box>
                <Image
                    borderRadius="full"
                    boxSize="60"
                    alignSelf='center'
                    src="https://avatars.githubusercontent.com/u/54584081?v=4"
                    alt="Ilham"
                    me='5'
                />

            </Flex>

        </Stack>
    )
}

export default Header;
