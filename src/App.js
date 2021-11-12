import { Divider, VStack } from '@chakra-ui/layout'
import React from 'react'
import Header from './components/Header'
import Techs from './components/Techs'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Topbar from './components/Topbar'


function App() {
    return (
        <VStack p={5}>
            <Topbar />
            <Header />
            <Techs />
            <Divider />
            <Projects />
            <Footer />
        </VStack>
    )
}

export default App
