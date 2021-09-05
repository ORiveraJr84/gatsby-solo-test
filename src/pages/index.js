import React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";

const App = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this page following the Gatsby tutorial.</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
      />
    </Layout>
  );
};

export default App;
