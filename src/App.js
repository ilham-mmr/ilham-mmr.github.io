import { Divider,  VStack } from '@chakra-ui/layout'
import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Techs from './components/Techs'
import Projects from './components/Projects'

function App() {
    return (
        <VStack p={5}>
            <Navbar />
            <Header></Header>
            <Techs></Techs>
            <Divider/>
            <Projects></Projects>
        </VStack>
    )
}

export default App
