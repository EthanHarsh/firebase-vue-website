import React from "react";
import { primaryBorderLight, primary, primaryBorder, secondaryBorderLight, secondary, secondaryBorder, lightAccent, background } from "../utils/colors/lightTheme";
import { Box } from 'rebass';


const baseStyle = {
    width: '100%',
    height: '450px',
    borderRadius: '20px',
    padding: '5rem',
    marginBottom: '2.5rem',
    background: background
}

const featureBoxStyle = {
    ...baseStyle,
    height: '375px'
}

const blueBoxStyle = {
    ...baseStyle,
    background: primary,
    border: primaryBorderLight
}

const blueBoxOutlineStyle = {
    ...baseStyle,
    border: primaryBorder
}

const redBoxStyle = {
    ...baseStyle,
    background: secondary,
    border: secondaryBorderLight
}

const redBoxOutlineStyle = {
    ...baseStyle,
    border: secondaryBorder

}

const greyBoxStyle = {
    ...baseStyle,
    background: lightAccent,
    height: 'auto'
}

function RegBox({ children }) {
    return (
        <Box width={1/1} style={baseStyle}>{children}</Box>
    )
}

function FeatureBox({ children }) {
    return (
        <Box width={1/1} style={featureBoxStyle}>{children}</Box>
    )
}

function BlueBox({ children }) {
    return (
       <Box width={1/1} style={blueBoxStyle}>{children}</Box>
    )
}

function BlueBoxOutline({ children }) {
    return (
       <Box width={1/1} style={blueBoxOutlineStyle}>{children}</Box>
    )
}

function RedBox({ children }) {
    return (
       <Box width={1/1} style={redBoxStyle}>{children}</Box>
    )
}

function RedBoxOutline({ children }) {
    return (
       <Box width={1/1} style={redBoxOutlineStyle}>{children}</Box>
    )
}

function GreyBox({ children }) {
    return (
       <Box width={1/1} style={greyBoxStyle}>{children}</Box>
    )
}

const InfoBox = {
    RegBox,
    FeatureBox,
    BlueBox,
    BlueBoxOutline,
    RedBox,
    RedBoxOutline,
    GreyBox
}

export default InfoBox;