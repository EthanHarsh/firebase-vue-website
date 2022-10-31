import React from "react";
import { Text } from "rebass"

const footerStyle = {
    paddingTop: '5rem',
    paddingBottom: '5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginLeft: '5rem',
    marginRight: '5rem',
    opacity: '50%'
}

function Footer () {
    return (
        <div style={footerStyle}>
            <Text>© {new Date().getFullYear()} Ethan Harsh. All rights reserved.</Text>
        </div>
    )
}

export default Footer