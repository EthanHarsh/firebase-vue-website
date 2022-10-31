import React from "react";
import { pageMarginBottom, pageMarginTop } from "../components/utils/padding_margin/margin";
import { windowPaddingSides } from "../components/utils/padding_margin/padding";
import InfoBox from './../components/InfoBox/index'
import { Box, Heading, Text, Image, Flex } from "rebass";
import { background, primaryText } from "../components/utils/colors/lightTheme";
import Footer from "../components/Footer/index";


const pageStyle = {
    marginLeft: windowPaddingSides,
    marginRight: windowPaddingSides,
    marginTop: pageMarginTop,
    marginBottom: pageMarginBottom,
    height: '100%',
    paddingLeft: '5rem',
    paddingRight: '5rem'
}




function About () {
    return (
        <div style={pageStyle}>
            <Heading>
                <h1>About Me</h1>
            </Heading>
            <Text>Full stack web developer with entrepreneurial and management experience, a bachelor's degree and a full stack coding certificate from Ohio State University. Skills in Node.js, React.js, Ubuntu Server Admin, multiple templating languages, MongoDB and MySQL. Successfully co-founded and built an organization, while simultaneously maintaining full time employment as a general manager. Passionate about approaching programming challenges from different angles and collaborating with others to create intuitive and enjoyable web experiences. Excited to develop responsive websites. Positioned to provide unique leadership and insights based on my varied leadership roles in multiple industries.</Text>
            <Footer />
        </div>
    )

}

export default About