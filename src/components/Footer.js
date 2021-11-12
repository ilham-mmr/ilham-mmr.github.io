import React from 'react'
import { BsFillHeartFill } from 'react-icons/bs';
import Icon from '@chakra-ui/icon'
import { ButtonGroup, ButtonGroupProps, IconButton } from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'
import { Box, Divider, Stack, Text, VStack } from '@chakra-ui/layout'

function Footer() {
    return (
        <Box as="footer" role="contentinfo" mx="auto" maxW="7xl" py="12" px={{ base: '6', md: '8' }}>
            <Stack align='center'>
                <Text color="gray.400" fontSize="2xl" alignSelf={{ base: 'center', sm: 'start' }}>
                    made with
                    <Icon color="red" p="4" as={BsFillHeartFill} w="16" h="16" />
                    love by Ilham
                </Text>
                <Stack direction="row" spacing="4" align="center" justify="space-between">
                    <ButtonGroup variant="ghost" color="gray.600" >
                        <IconButton as="a" href="https://www.linkedin.com/in/ilham-m-maulana-r-468b58150/" aria-label="LinkedIn" icon={<FaLinkedin fontSize="20px" />} />
                        <IconButton as="a" href="https://github.com/ilham-mmr" aria-label="GitHub" icon={<FaGithub fontSize="20px" />} />
                    </ButtonGroup>
                </Stack>

            </Stack>
        </Box>
    )
}

export default Footer
