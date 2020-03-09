import React from "react";
import "bulma/css/bulma.css";
import "./App.css";
import styled from 'styled-components';
import Navbar from "./components/Navbar";
import Card from './components/Card';

const NavbarGap = styled.div`
  margin-top: 4rem;
`;

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="container">
        <NavbarGap></NavbarGap>
        <div className="columns">
          <div className="column is-one-third is-offset-one-third">
            {/* <Card image={data.image} caption={data.caption} /> */}
            {/* <Card image="/img/IMG_0002.jpg" caption={quote} /> */}
            <Card image="/img/IMG_0003.jpg" />
            <Card image="/img/IMG_0004.jpg" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
