import { Button } from '@chakra-ui/button';
import { Flex, Box, Text } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';
import { Image } from "@chakra-ui/react"
import React from 'react'

function Header() {

    const [isNotSmallerScreen] = useMediaQuery("(min-width:680px)");
    return (
        <Flex >
            <Image
                borderRadius="full"
                boxSize="60"
                alignSelf='center'
                src="https://avatars.githubusercontent.com/u/54584081?v=4"
                alt="Ilham"
                me='5'
            />
            <Flex direction={isNotSmallerScreen ? 'row' : 'column'} p={isNotSmallerScreen ? '18' : '0'} marginBottom='2' alignSelf='flex-start'>
                <Box mt={isNotSmallerScreen ? '0' : 16} alignSelf='flex-start' margin='0'>
                    <Text fontSize='5xl' fontWeight='semibold'>Hi, I am </Text>
                    <Text fontSize='7xl' fontWeight='bold' bgGradient="linear(to-l, #a8dadc, #457b9d)" bgClip='text' >Ilham Muslim M.R.</Text>
                    <Text color="gray.400" fontSize="2xl" mb='3'>
                        A motivated final year software engineering student and full-stack developer
                    </Text>
                    <Text color="gray.400" fontSize="2xl" mb='3'>
                    </Text>
                    <Button colorScheme="blue" size="lg" onClick={() =>
                        window.open("")
                    } >
                        My Resume
                    </Button>

                </Box>

            </Flex>

        </Flex>
    )
}

export default Header;
