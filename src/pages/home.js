import React from "react";
import { useQuery } from '@apollo/client'
import { pageMarginBottom, pageMarginTop } from "../components/utils/padding_margin/margin";
import { windowPaddingSides } from "../components/utils/padding_margin/padding";
import InfoBox from './../components/InfoBox/index'
import ProjectDisplay from "../components/InfoBox/projects";
import { Box, Heading, Text, Image, Flex } from "rebass";
import { background, primaryText } from "../components/utils/colors/lightTheme";
import BtnObj from './../components/ButtonStyled/index'
import { QUERY_FEATURES } from './../utils/queries';
import Footer from "../components/Footer/index";
import Loader from "../components/Loader/index"


const pageStyle = {
    marginLeft: windowPaddingSides,
    marginRight: windowPaddingSides,
    marginTop: pageMarginTop,
    marginBottom: pageMarginBottom,
    height: '100%',
}

const whiteText = {
    color: background,
    marginBottom: '1.25rem'
}

const introText = {
    ...whiteText,
    marginBottom: '5rem'
}

const introTextPrimary = {
    color: primaryText,
    marginBottom: '2.5rem'
}

const bottomText = {
    ...whiteText,
    marginBottom: '2.5rem'
}

const avatarStyle = {
    display: 'flex',
    justifyContent: 'end',
    alignItems: 'start'
}

const featureStyle = {
    flexFlow: 'column wrap'
}

const undecorate = {
    color: "black", 
    textDecoration: "none"
}

function HomePage() {
    const { loading, error, data } = useQuery(QUERY_FEATURES)
    if (loading) {
        return <Loader />;
    }
    if (error) {
        console.log(error)
        return <p>Error!</p>;
    } 
    //console.log(data.features);
    let features = data.features;
    //console.log(features[0])
    return (
        <div style={pageStyle}>
            <InfoBox.BlueBox>
                <Flex>
                    <Box width={2/3}>
                        <Text style={ introText }>Introduction</Text>

                        <Heading style={ whiteText }>Hello, my name is Ethan. I like Mac & Cheese, Techno, and Coding</Heading>
                        <Text style={ bottomText }>I’m a full stack developer from Columbus, Ohio. I have a MERN full stack development certification from the Ohio State University. </Text>
                        <a style={undecorate} href="/portfolio"><BtnObj.ButtonSecondary text='View Projects'></BtnObj.ButtonSecondary></a>
                    </Box>
                    <Box width={1/3} style={avatarStyle}>
                        <Image src='avatar.jpeg' sx={{width: ['140px', '140px'], borderRadius: '10px'}}></Image>
                    </Box>
                </Flex>
            </InfoBox.BlueBox>
            <InfoBox.RedBox>
                <Flex>                
                    <Box width={2/3}>
                        <Text style={ introText }>Education</Text>
                        <Heading style={ whiteText }>The Ohio State University</Heading>
                        <Text style={ bottomText }>After playing college football for two years at John Carroll University, I transferred to The Ohio State University in 2014.  In 2017 I graduated with a bachelors degree in Political Science.  Now I am getting certified to be a Full Stack MERN developer at Ohio State.</Text>
                        <a style={undecorate} href="/pdf/Ethan_Harsh_Resume.pdf" target="_blank"><BtnObj.ButtonSecondary text='View Resume'></BtnObj.ButtonSecondary></a>
                    </Box>
                    <Box width={1/3} style={avatarStyle}>
                        <Image src='osu-seal-min.jpeg' sx={{width: ['140px', '140px'], borderRadius: '10px'}}></Image>
                    </Box>
                </Flex>
            </InfoBox.RedBox>
            <InfoBox.GreyBox>
                <Flex style={featureStyle}>                
                    <Text style={ introTextPrimary }>Featured Projects</Text>
                    <ProjectDisplay project={features[2]}>

                    </ProjectDisplay>
                    <ProjectDisplay project={features[1]}>

                    </ProjectDisplay>
                    <ProjectDisplay project={features[0]}>

                    </ProjectDisplay>
                </Flex>
            </InfoBox.GreyBox>
            <Footer />
        </div>
    )

}

export default HomePage