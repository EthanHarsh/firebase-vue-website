import React from "react";
import { Flex, Box, Image, Text } from 'rebass';
import { primary } from "../utils/colors/lightTheme";
import { github, linkedin, instagram } from './../utils/icons/socials'
import { windowPaddingSides } from "../utils/padding_margin/padding";

const style = {
    height: '64px',
    paddingLeft: windowPaddingSides,
    paddingRight: windowPaddingSides,
    paddingTop: '2.5rem',
    paddingBottom: '2.5rem',
    alignItems: 'center'
}

const boxBaseStyle = {
    color: 'black'
}

const centerBox = {
    ...boxBaseStyle,
    fontSize: '1.15rem',
    textAlign: 'center'
}

const logoText = {
    color: primary,
    fontSize: '1.35rem'
}

const logoGroup = {
    justifyContent: 'flex-end'
}

const undecorate = {
    color: "black", 
    textDecoration: "none"
}

function NavBar (props) {
    return(
        <Flex style={style}>
            <Box width={1/3} style={boxBaseStyle}>
                <a style={undecorate} href="/"><Text fontWeight='bold' style={logoText}>Ethan Harsh</Text></a>
            </Box>
            <Box width={1/3} style={centerBox}>
                <Flex>
                    <Box width={1/4}><Text fontWeight='bold'><a style={undecorate} href="/about">About</a></Text></Box>
                    <Box width={1/4}><Text fontWeight='bold'><a style={undecorate} href="/portfolio">Portfolio</a></Text></Box>
                    <Box width={1/4}><Text fontWeight='bold'><a style={undecorate} href="mailto:ethan@ethanharsh.com">Contact</a></Text></Box>
                    <Box width={1/4}><Text fontWeight='bold'><a style={undecorate} href="/pdf/Ethan_Harsh_Resume.pdf" target="_blank">Resume</a></Text></Box>
                </Flex>
            </Box>
            <Box width={1/3} style={boxBaseStyle}>
                    <Flex style={logoGroup}>
                        <Box width={1/6}><a style={undecorate} href="https://github.com/EthanHarsh" target="_blank"><Image src={github}></Image></a></Box>
                        <Box width={1/6}><a style={undecorate} href="https://www.linkedin.com/in/ethanharsh/" target="_blank"><Image src={linkedin}></Image></a></Box>
                        <Box width={1/6}><a style={undecorate} href="https://www.instagram.com/eharsh4/" target="_blank"><Image src={instagram}></Image></a></Box>
                    </Flex>
            </Box>
        </Flex>
    )
}

export default NavBar