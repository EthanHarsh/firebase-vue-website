import React from "react";
import { Box, Flex, Heading, Image, Text } from "rebass";
import InfoBox from './index';
import BtnObj from './../ButtonStyled/index';

const imgHolder = {
    width: '250px',
    height: '250px',
    overflow: 'hidden',
    borderRadius: '6px',
    border: '1px solid #e5e5e5'
}

const title = {
    marginBottom: '2rem'
}

const desc = {
    marginBottom: '5rem'
}

const infoStyle = {
    height: '100%'
}

const undecorate = {
    color: "black", 
    textDecoration: "none"
}

function ProjectDisplay (project) {
    //console.log('projectdisplay')
    project = project.project
    //console.log(project.name)
    return (
        <div>
            <InfoBox.FeatureBox>
                
                    <Flex>
                        <Box width={1/3}>
                            <div style={imgHolder}>
                                <Image
                                    src={project.heroimg}
                                />
                            </div>
                        </Box>
                        <Box width={2/3} style={infoStyle}>
                            <Heading style={title}>{project.name}</Heading>
                            <Text style={desc}>{project.description}</Text>
                            <a style={undecorate} href={project.url} target="_blank"><BtnObj.ButtonPrimary text="View Project"></BtnObj.ButtonPrimary></a>
                            <a style={undecorate} href={project.repo} target="_blank"><BtnObj.ButtonSecondary text="View GitHub"></BtnObj.ButtonSecondary></a>
                        </Box>
                    </Flex>
            </InfoBox.FeatureBox>
        </div>
    )
}

export default ProjectDisplay;