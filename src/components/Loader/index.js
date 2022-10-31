import React from "react";
import Loader from "react-loader-spinner";
import { primary } from "../utils/colors/lightTheme";

const loaderStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    marginTop: '5rem'
}

export default class LoaderObj extends React.Component {
  //other logic
  render() {
    return (
      <div style={loaderStyle}>
        <Loader
            type="Rings"
            color={primary}
            height={250}
            width={250}
            timeout={10000} //3 secs
        />
      </div>
    );
  }
}