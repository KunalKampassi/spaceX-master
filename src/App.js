import React from "react";
import Layout from "./containers/Layout/Layout";
import SpaceLaunch from "./containers/SpaceLaunch/SpaceLaunch";
import { getParam } from "./utils/utils";

function App(props) {
  return (
    <Layout>
      <SpaceLaunch query={getParam(props.location.search)} history={props.history} />
    </Layout>
  );
}

export default App;
